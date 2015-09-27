var PassThrough = require('stream').PassThrough;
var request     = require('./request');
var getInfo     = require('./info');
var util        = require('./util');
var cache       = require('./cache');

module.exports = ytdl;
ytdl.getInfo = getInfo;
ytdl.downloadFromInfo = downloadFromInfo;
ytdl.cache = cache;

/**
 * @param {String} link
 * @param {Object} options
 * @return {ReadableStream}
 */
function ytdl(link, options) {
  options = options || {};
  options.downloadURL = true;

  var stream = new PassThrough();

  getInfo(link, options, function(err, info) {
    if (err) {
      stream.emit('error', err);
      return;
    }

    downloadFromInfoCallback(info, options, function(err, format, videoStream) {
      if (err) {
        stream.emit('error', err);
        return;
      }
      stream.emit('info', info, format);
      videoStream.pipe(stream);
    });
  });

  return stream;
}

function downloadFromInfoCallback(info, options, callback) {
  options = options || {};

  var format = util.chooseFormat(info.formats, options);
  if (format instanceof Error) {
    // The caller expects this function to be async.
    setImmediate(function() {
      callback(format);
    });
    return;
  }

  var url = format.url;
  if (options.range) {
    url += '&range=' + options.range;
  }

  // Start downloading the video.
  var req = request(url);
  req.on('error', callback);
  req.on('response', function(res) {
    if (res.statusCode !== 200) {
      callback(new Error('status code ' + res.statusCode));
      return;
    }

    format.size = res.headers['content-length'];
    callback(null, format, res);
  });
}

function downloadFromInfo(info, options) {
  var stream = new PassThrough();
  options = options || {};

  downloadFromInfoCallback(info, options, function(err, format, videoStream) {
    if (err) {
      stream.emit('error', err);
      return;
    }

    stream.emit('format', format);
    videoStream.pipe(stream);
  });

  return stream;
}
