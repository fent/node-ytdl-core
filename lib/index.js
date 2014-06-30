var http        = require('http');
var PassThrough = require('stream').PassThrough;
var request     = require('request');
var _           = require('underscore');
var getInfo     = require('./info');
var crequest    = require('./crequest');
var util        = require('./util');

module.exports = ytdl;
ytdl.getInfo = getInfo;
ytdl.downloadFromInfo = downloadFromInfo;

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
    setImmediate(callbackWithFormatError);
    return;
  }

  var requestOptions = _.clone(options);
  requestOptions.url = format.url;
  if (requestOptions.range) {
    requestOptions.url += '&range=' + requestOptions.range;
  }
  delete requestOptions.quality;
  delete requestOptions.range;
  delete requestOptions.filter;

  // Start downloading the video.
  var req = request(requestOptions);
  req.on('error', callback);
  req.on('response', function(res) {
    if (res.statusCode !== 200) {
      callback(new Error('status code ' + res.statusCode));
      return;
    }

    format.size = res.headers['content-length'];
    callback(null, format, req);
  });

  function callbackWithFormatError() {
    callback(format);
  }
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
