const PassThrough = require('stream').PassThrough;
const getInfo     = require('./info');
const util        = require('./util');
const cache       = require('./cache');
const request     = require('miniget');
const m3u8stream  = require('m3u8-stream');


/**
 * @param {String} link
 * @param {!Object} options
 * @return {ReadableStream}
 */
var ytdl = module.exports = function ytdl(link, options) {
  var stream = createStream();
  getInfo(link, options, function(err, info) {
    if (err) {
      stream.emit('error', err);
      return;
    }

    downloadFromInfoCallback(stream, info, options);
  });

  return stream;
};


ytdl.getInfo = getInfo;
ytdl.chooseFormat = util.chooseFormat;
ytdl.filterFormats = util.filterFormats;
ytdl.cache = cache;


function createStream() {
  var stream = new PassThrough();
  stream.destroy = function() { stream._isDestroyed = true; };
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
  var format = util.chooseFormat(info.formats, options);
  if (format instanceof Error) {
    // The caller expects this function to be async.
    setImmediate(function() {
      stream.emit('error', format);
    });
    return;
  }
  stream.emit('info', info, format);
  if (stream._isDestroyed) { return; }

  var url = format.url;
  var req;
  if (info.live_default_broadcast === '1') {
    req = m3u8stream(url, {
      chunkReadahead: +info.live_chunk_readahead,
      requestOptions: options.requestOptions,
    });

  } else {
    if (options.range) {
      url += '&range=' + options.range;
    }
    if (options.begin) {
      url += '&begin=' + util.fromHumanTime(options.begin);
    }

    req = request(url, options.requestOptions);
  }

  stream.destroy = function() { req.abort(); };

  // Forward events from the request to the stream.
  ['error', 'abort', 'request', 'response'].forEach(function(event) {
    req.on(event, function(arg) {
      stream.emit.call(stream, event, arg);
    });
  });

  req.pipe(stream);
}


/**
 * Can be used to download video after its `info` is gotten through
 * `ytdl.getInfo()`. In case the user might want to look at the
 * `info` object before deciding to download.
 *
 * @param {Object} info
 * @param {!Object} options
 */
ytdl.downloadFromInfo = function(info, options) {
  var stream = createStream();
  setImmediate(function() {
    downloadFromInfoCallback(stream, info, options);
  });
  return stream;
};
