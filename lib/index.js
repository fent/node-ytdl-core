const PassThrough = require('stream').PassThrough;
const deprecate   = require('util').deprecate;
const getInfo     = require('./info');
const util        = require('./util');
const sig         = require('./sig');
const request     = require('miniget');
const m3u8stream  = require('m3u8stream');
const parseTime   = require('m3u8stream/lib/parse-time');


/**
 * @param {String} link
 * @param {!Object} options
 * @return {ReadableStream}
 */
const ytdl = module.exports = function ytdl(link, options) {
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

ytdl.getBasicInfo = getInfo.getBasicInfo;
ytdl.getInfo = getInfo.getFullInfo;
ytdl.chooseFormat = util.chooseFormat;
ytdl.filterFormats = util.filterFormats;
ytdl.validateID = util.validateID;
ytdl.validateURL = util.validateURL;
ytdl.validateLink = deprecate(util.validateURL,
  'ytdl.validateLink: Renamed to ytdl.validateURL');
ytdl.getURLVideoID = util.getURLVideoID;
ytdl.getVideoID = util.getVideoID;
ytdl.cache = {
  sig: sig.cache,
  info: getInfo.cache,
};


function createStream(options) {
  const stream = new PassThrough({
    highWaterMark: options && options.highWaterMark || null,
  });
  stream.destroy = () => { stream._isDestroyed = true; };
  return stream;
}


/**
 * Chooses a format to download.
 *
 * @param {stream.Readable} stream
 * @param {Object} info
 * @param {Object} options
 */
function downloadFromInfoCallback(stream, info, options) {
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

  let url = format.url;
  if (format.live) {
    let req = m3u8stream(url, {
      chunkReadahead: +info.live_chunk_readahead,
      begin: options.begin || Date.now(),
      liveBuffer: options.liveBuffer,
      requestOptions: options.requestOptions,
      parser: /\/manifest\/dash\//.test(format.url) ? 'dash-mpd' : 'm3u8',
      id: format.itag,
    });
    req.on('error', stream.emit.bind(stream, 'error'));
    stream.destroy = req.end.bind(req);
    req.pipe(stream);

  } else {
    if (options.begin) {
      url += '&begin=' + parseTime(options.begin);
    }
    let requestOptions = Object.assign({}, options.requestOptions, {
      maxReconnects: 5
    });
    if (options.range && (options.range.start || options.range.end)) {
      requestOptions.headers = Object.assign({}, requestOptions.headers, {
        Range: `bytes=${options.range.start || '0'}-${options.range.end || ''}`
      });
    }

    const req = request(url, requestOptions);
    const ondata = (chunk) => {
      downloaded += chunk.length;
      stream.emit('progress', chunk.length, downloaded, contentLength);
    };
    stream.destroy = () => {
      stream._isDestroyed = true;
      req.abort();
      req.removeListener('data', ondata);
      req.unpipe();
    };

    // Forward events from the request to the stream.
    [
      'abort', 'request', 'response', 'error', 'retry', 'reconnect'
    ].forEach((event) => {
      req.on(event, (arg) => { stream.emit(event, arg); });
    });

    let contentLength, downloaded = 0;
    req.on('response', (res) => {
      if (stream._isDestroyed) { return; }
      if (!contentLength) {
        contentLength = parseInt(res.headers['content-length'], 10);
      }
    });

    req.on('data', ondata);
    req.pipe(stream);
  }
}


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
    throw new Error('Cannot use `ytdl.downloadFromInfo()` when called ' +
      'with info from `ytdl.getBasicInfo()`');
  }
  setImmediate(() => {
    downloadFromInfoCallback(stream, info, options);
  });
  return stream;
};
