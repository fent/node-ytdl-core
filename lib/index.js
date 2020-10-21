const PassThrough = require('stream').PassThrough;
const getInfo = require('./info');
const util = require('./util');
const sig = require('./sig');
const miniget = require('miniget');
const m3u8stream = require('m3u8stream');
const parseTime = require('m3u8stream/dist/parse-time');


/**
 * @param {string} link
 * @param {!Object} options
 * @returns {ReadableStream}
 */
const ytdl = (link, options) => {
  const stream = createStream(options);
  ytdl.getInfo(link, options).then(info => {
    downloadFromInfoCallback(stream, info, options);
  }, stream.emit.bind(stream, 'error'));
  return stream;
};
module.exports = ytdl;

ytdl.getBasicInfo = getInfo.getBasicInfo;
ytdl.getInfo = getInfo.getInfo;
ytdl.chooseFormat = util.chooseFormat;
ytdl.filterFormats = util.filterFormats;
ytdl.validateID = util.validateID;
ytdl.validateURL = util.validateURL;
ytdl.getURLVideoID = util.getURLVideoID;
ytdl.getVideoID = util.getVideoID;
ytdl.cache = {
  sig: sig.cache,
  info: getInfo.cache,
  cookie: getInfo.cookieCache,
};


const createStream = options => {
  const stream = new PassThrough({
    highWaterMark: (options && options.highWaterMark) || 1024 * 512,
  });
  stream.destroy = () => { stream._isDestroyed = true; };
  return stream;
};


const pipeAndSetEvents = (req, stream, end) => {
  // Forward events from the request to the stream.
  [
    'abort', 'request', 'response', 'error', 'redirect', 'retry', 'reconnect',
  ].forEach(event => {
    req.prependListener(event, stream.emit.bind(stream, event));
  });
  req.pipe(stream, { end });
};


/**
 * Chooses a format to download.
 *
 * @param {stream.Readable} stream
 * @param {Object} info
 * @param {Object} options
 */
const downloadFromInfoCallback = (stream, info, options) => {
  options = options || {};

  let err = util.playError(info, 'UNPLAYABLE');
  if (err) {
    stream.emit('error', err);
    return;
  }

  if (!info.formats.length) {
    stream.emit('error', Error('This video is unavailable'));
    return;
  }

  let format;
  try {
    format = util.chooseFormat(info.formats, options);
  } catch (e) {
    stream.emit('error', e);
    return;
  }
  stream.emit('info', info, format);
  if (stream._isDestroyed) { return; }

  let contentLength, downloaded = 0;
  const ondata = chunk => {
    downloaded += chunk.length;
    stream.emit('progress', chunk.length, downloaded, contentLength);
  };

  // Download the file in chunks, in this case the default is 10MB,
  // anything over this will cause youtube to throttle the download
  const dlChunkSize = options.dlChunkSize || 1024 * 1024 * 10;
  let req;
  let shouldEnd = true;

  if (format.isHLS || format.isDashMPD) {
    req = m3u8stream(format.url, {
      chunkReadahead: +info.live_chunk_readahead,
      begin: options.begin || (format.isLive && Date.now()),
      liveBuffer: options.liveBuffer,
      requestOptions: options.requestOptions,
      parser: format.isDashMPD ? 'dash-mpd' : 'm3u8',
      id: format.itag,
    });

    req.on('progress', (segment, totalSegments) => {
      stream.emit('progress', segment.size, segment.num, totalSegments);
    });
    pipeAndSetEvents(req, stream, shouldEnd);
  } else {
    const requestOptions = Object.assign({}, options.requestOptions, {
      maxReconnects: 6,
      maxRetries: 3,
      backoff: { inc: 500, max: 10000 },
    });

    let shouldBeChunked = dlChunkSize !== 0 && (!format.hasAudio || !format.hasVideo);

    if (shouldBeChunked) {
      let start = (options.range && options.range.start) || 0;
      let end = start + dlChunkSize;
      const rangeEnd = options.range && options.range.end;

      contentLength = options.range ?
        (rangeEnd ? rangeEnd + 1 : parseInt(format.contentLength)) - start :
        parseInt(format.contentLength);

      const getNextChunk = () => {
        if (!rangeEnd && end >= contentLength) end = 0;
        if (rangeEnd && end > rangeEnd) end = rangeEnd;
        shouldEnd = !end || end === rangeEnd;

        requestOptions.headers = Object.assign({}, requestOptions.headers, {
          Range: `bytes=${start}-${end || ''}`,
        });

        req = miniget(format.url, requestOptions);
        req.on('data', ondata);
        req.on('end', () => {
          if (stream._isDestroyed) { return; }
          if (end && end !== rangeEnd) {
            start = end + 1;
            end += dlChunkSize;
            getNextChunk();
          }
        });
        pipeAndSetEvents(req, stream, shouldEnd);
      };
      getNextChunk();
    } else {
      // Audio only and video only formats don't support begin
      if (options.begin) {
        format.url += `&begin=${parseTime.humanStr(options.begin)}`;
      }
      if (options.range && (options.range.start || options.range.end)) {
        requestOptions.headers = Object.assign({}, requestOptions.headers, {
          Range: `bytes=${options.range.start || '0'}-${options.range.end || ''}`,
        });
      }
      req = miniget(format.url, requestOptions);
      req.on('response', res => {
        if (stream._isDestroyed) { return; }
        contentLength = contentLength || parseInt(res.headers['content-length']);
      });
      req.on('data', ondata);
      pipeAndSetEvents(req, stream, shouldEnd);
    }
  }

  stream.destroy = () => {
    stream._isDestroyed = true;
    if (req.abort) req.abort();
    req.end();
    req.removeListener('data', ondata);
    req.unpipe();
  };
};


/**
 * Can be used to download video after its `info` is gotten through
 * `ytdl.getInfo()`. In case the user might want to look at the
 * `info` object before deciding to download.
 *
 * @param {Object} info
 * @param {!Object} options
 * @returns {ReadableStream}
 */
ytdl.downloadFromInfo = (info, options) => {
  const stream = createStream(options);
  if (!info.full) {
    throw Error('Cannot use `ytdl.downloadFromInfo()` when called ' +
      'with info from `ytdl.getBasicInfo()`');
  }
  setImmediate(() => {
    downloadFromInfoCallback(stream, info, options);
  });
  return stream;
};
