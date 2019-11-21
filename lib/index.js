const PassThrough = require('stream').PassThrough;
const getInfo     = require('./info');
const util        = require('./util');
const sig         = require('./sig');
const request     = require('miniget');
const m3u8stream  = require('m3u8stream');
const parseTime   = require('m3u8stream/dist/parse-time');


/**
 * @param {string} link
 * @param {!Object} options
 * @return {ReadableStream}
 */
const ytdl = (link, options) => {
  const stream = createStream(options);
  ytdl.getInfo(link, options, (err, info) => {
    if (err) {
      stream.emit('error', err);
      return;
    }

    downloadFromInfoCallback(stream, info, options);
  });

  return stream;
};
module.exports = ytdl;

ytdl.getBasicInfo = getInfo.getBasicInfo;
ytdl.getInfo = getInfo.getFullInfo;
ytdl.chooseFormat = util.chooseFormat;
ytdl.filterFormats = util.filterFormats;
ytdl.validateID = util.validateID;
ytdl.validateURL = util.validateURL;
ytdl.getURLVideoID = util.getURLVideoID;
ytdl.getVideoID = util.getVideoID;
ytdl.cache = {
  sig: sig.cache,
  info: getInfo.cache,
};


const createStream = (options) => {
  const stream = new PassThrough({
    highWaterMark: options && options.highWaterMark || null,
  });
  stream.destroy = () => { stream._isDestroyed = true; };
  return stream;
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
  const format = util.chooseFormat(info.formats, options);
  if (format instanceof Error) {
    // The caller expects this function to be async.
    setImmediate(() => {
      stream.emit('error', format);
    });
    return;
  }
  stream.emit('info', info, format);
  if (stream._isDestroyed) { return; }

  let contentLength, downloaded = 0;
  const ondata = (chunk) => {
    downloaded += chunk.length;
    stream.emit('progress', chunk.length, downloaded, contentLength);
  };

  let req;
  if (format.isHLS || format.isDashMPD) {
    req = m3u8stream(format.url, {
      chunkReadahead: +info.live_chunk_readahead,
      begin: options.begin || format.live && Date.now(),
      liveBuffer: options.liveBuffer,
      requestOptions: options.requestOptions,
      parser: format.isDashMPD ? 'dash-mpd' : 'm3u8',
      id: format.itag,
    });

    req.on('progress', (segment, totalSegments) => {
      stream.emit('progress', segment.size, segment.num, totalSegments);
    });

  } else {
    if (options.begin) {
      format.url += '&begin=' + parseTime.humanStr(options.begin);
    }
    let requestOptions = Object.assign({}, options.requestOptions, {
      maxReconnects: 6,
      maxRetries: 3,
      backoff: { inc: 500, max: 10000 },
    });
    if (options.range && (options.range.start || options.range.end)) {
      requestOptions.headers = Object.assign({}, requestOptions.headers, {
        Range: `bytes=${options.range.start || '0'}-${options.range.end || ''}`
      });
    }

    req = request(format.url, requestOptions);

    req.on('response', (res) => {
      if (stream._isDestroyed) { return; }
      if (!contentLength) {
        contentLength = parseInt(res.headers['content-length'], 10);
      }
    });
    req.on('data', ondata);
  }

  stream.destroy = () => {
    stream._isDestroyed = true;
    if (req.abort) req.abort();
    req.end();
    req.removeListener('data', ondata);
    req.unpipe();
  };

  // Forward events from the request to the stream.
  [
    'abort', 'request', 'response', 'error', 'retry', 'reconnect'
  ].forEach((event) => {
    req.prependListener(event, (arg) => {
      stream.emit(event, arg); });
  });

  req.pipe(stream);
};


/**
 * Can be used to download video after its `info` is gotten through
 * `ytdl.getInfo()`. In case the user might want to look at the
 * `info` object before deciding to download.
 *
 * @param {Object} info
 * @param {!Object} options
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
