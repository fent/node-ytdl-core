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
  var stream = new PassThrough();

  getInfo(link, options, function(err, info) {
    if (err) {
      stream.emit('error', err);
      return;
    }

    downloadFromInfoCallback(stream, info, options);
  });

  return stream;
}

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
