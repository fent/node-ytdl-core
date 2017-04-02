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

  var url = format.url;
  if (options.begin) {
    url += '&begin=' + util.fromHumanTime(options.begin);
  }

  doDownload(stream, url, options, 3, {
    trys: 5,
    range: {
      start: options.range && options.range.start ? options.range.start : 0,
      end: options.range && options.range.end ? options.range.end : -1,
    },
    downloaded: 0,
  });
}


var redirectCodes = new Set([301, 302, 303, 307]);

/**
 * Tries to download the video. Youtube might respond with a redirect
 * status code. In which case, this function will call itself again.
 *
 * @param {stream.Readable} stream
 * @param {String} url
 * @param {Object} options
 * @param {Number} tryCount Prevent infinite redirects.
 * @param {Object} reconnectInfo Continue after ECONNRESET
 */
function doDownload(stream, url, options, tryCount, reconnectInfo) {
  if (stream._isDestroyed) { return; }
  if (tryCount === 0) {
    stream.emit('error', new Error('Too many redirects'));
    return;
  }
  if (reconnectInfo.trys === 0) {
    stream.emit('error', new Error('Too many reconnects'));
    return;
  }

  // Start downloading the video.
  var myrequest = options.request || request;
  var rangedUrl = url;
  if (reconnectInfo.downloaded !== 0 ||
      reconnectInfo.range.start !== 0 ||
      reconnectInfo.range.end !== -1) {
    var start = reconnectInfo.range.start + reconnectInfo.downloaded;
    var end = reconnectInfo.range.end != -1 ? reconnectInfo.range.end : '';
    rangedUrl += '&range=' + start + '-' + end;
  }
  var req = myrequest(rangedUrl, options.requestOptions);

  var myres;
  stream.destroy = function() {
    stream._isDestroyed = true;
    req.abort();
    if (myres) {
      myres.unpipe();
      myres.destroy();
    }
    stream.emit('abort');
  };

  req.on('error', function(err) {
    if (stream._isDestroyed || !myres) {
      stream.emit('error', err);
    } else {
      myres.unpipe();
    }
  });

  req.on('response', function(res) {
    myres = res;
    if (stream._isDestroyed) { return; }
    // Support for Streaming 206 status videos
    if (res.statusCode !== 200 && res.statusCode !== 206) {
      if (redirectCodes.has(res.statusCode)) {
        // Redirection header.
        doDownload(stream, res.headers.location, options, tryCount - 1, reconnectInfo);
        return;
      }
      stream.emit('response', res);
      stream.emit('error', new Error('Status code ' + res.statusCode));
      return;
    }

    if (reconnectInfo.downloaded === 0) {
      reconnectInfo.total = parseInt(res.headers['content-length']);
    }

    // Keep track of the download progress
    res.on('data', function(chunk) {
      var downloaded = reconnectInfo.downloaded += chunk.length;
      stream.emit('progress', chunk.length, downloaded, reconnectInfo.total);
    });

    res.on('end', function() {
      // Reconnect if there is more to be downloaded.
      if (reconnectInfo.downloaded < reconnectInfo.total) {
        myres.unpipe();
        reconnectInfo.trys = reconnectInfo.trys - 1;
        doDownload(stream, url, options, tryCount, reconnectInfo);
      } else {
        stream.end();
      }
    });

    res.pipe(stream, {end : false});
    stream.emit('response', res);
  });

  stream.emit('request', req);
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
