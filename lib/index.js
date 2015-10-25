var PassThrough = require('stream').PassThrough;
var request     = require('./request');
var getInfo     = require('./info');
var util        = require('./util');
var cache       = require('./cache');


/**
 * @param {String} link
 * @param {!Object} options
 * @return {ReadableStream}
 */
var ytdl = module.exports = function ytdl(link, options) {
  options = options || {};
  var stream = new PassThrough();

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
ytdl.cache = cache;


/**
 * Chooses a format to download.
 *
 * @param {stream.Readable} stream
 * @param {Object} info
 * @param {Object} options
 */
function downloadFromInfoCallback(stream, info, options) {
  var format = util.chooseFormat(info.formats, options);
  if (format instanceof Error) {
    // The caller expects this function to be async.
    setImmediate(function() {
      stream.emit('error', format);
    });
    return;
  }
  stream.emit('info', info, format);

  var url = format.url;
  if (options.range) {
    url += '&range=' + options.range;
  }

  doDownload(stream, url, 3);
}


/**
 * Tries to download the video. Youtube might respond with a 302 redirect
 * status code. In which case, this function will call itself again.
 *
 * @param {stream.Readable} stream
 * @param {String} url
 * @param {Number} tryCount Prevent infinite redirects.
 */
function doDownload(stream, url, tryCount) {
  if (tryCount === 0) {
    stream.emit('error', new Error('Too many redirects'));
    return;
  }

  // Start downloading the video.
  var req = request(url);
  req.on('error', function(err) {
    stream.emit('error', err);
  });
  req.on('response', function(res) {
    if (res.statusCode !== 200) {
      if (res.statusCode === 302) {
        // Redirection header.
        doDownload(stream, res.headers.location, tryCount - 1);
        return;
      }
      stream.emit('response', res);
      stream.emit('error', new Error('status code ' + res.statusCode));
      return;
    }

    stream.emit('response', res);
    res.pipe(stream);
  });
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
  var stream = new PassThrough();
  options = options || {};
  setImmediate(function() {
    downloadFromInfoCallback(stream, info, options);
  });
  return stream;
};
