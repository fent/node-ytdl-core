const PassThrough = require('stream').PassThrough;
const getInfo     = require('./info');
const util        = require('./util');
const cache       = require('./cache');
const request     = require('miniget');
const m3u8stream  = require('m3u8stream');
const buildIndex  = require('./index-builder');


/**
 * @param {String} link
 * @param {!Object} options
 * @return {ReadableStream}
 */
var ytdl = module.exports = function ytdl(link, options) {
  var stream = createStream(options);
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


function createStream(options) {
  var stream = new PassThrough({
    highWaterMark: options && options.highWaterMark || null,
  });
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
  if (format.live) {
    var req = m3u8stream(url, {
      chunkReadahead: +info.live_chunk_readahead,
      requestOptions: options.requestOptions,
    });
    req.on('error', stream.emit.bind(stream, 'error'));
    stream.destroy = req.end.bind(req);
    req.pipe(stream);

  } else {
    stream.startTime = 0
    if (options.begin) {
      if (format.index && format.init) {
        // parse the ranges
        var ranges = util.parseRanges(format)
        // download and parse index
        return downloadIndex(url, ranges.init, ranges.index, options.reqOptions, function (err, index, buffer) {
          if (err) {
            // fallback to begin parameter
            url += '&begin=' + util.fromHumanTime(options.begin);
          } else {
            var segment = util.getSegmentAt(index, util.fromHumanTime(options.begin), ranges.index.end + 1)
            var start_offset = segment.offset
            stream.startTime = segment.timestamp
            stream.emit("index", index)
            stream.emit('data', buffer)
          }

          doDownload(stream, url, options, {
            trys: options.retries || 5,
            range: {
              start: start_offset ? start_offset : 0,
              end: options.range && options.range.end ? options.range.end : (start_offset ? format.clen : -1),
            },
            downloaded: 0
          })
        });
      } else { // fallback to begin parameter
        url += '&begin=' + util.fromHumanTime(options.begin);
      }
    }
    doDownload(stream, url, options, {
      trys: options.retries || 5,
      range: {
        start: options.range && options.range.start ? options.range.start : 0,
        end: options.range && options.range.end ? options.range.end : -1,
      },
      downloaded: 0,
    });
  }
}


/**
 * Tries to download the video. If the download stops halfway, attempts to
 * reconnect, continuing the download where it left off.
 *
 * @param {stream.Readable} stream
 * @param {String} url
 * @param {Object} options
 * @param {Object} reconnectInfo
 */
function doDownload(stream, url, options, reconnectInfo) {
  if (reconnectInfo.trys === 0) {
    stream.emit('error', new Error('Too many reconnects'));
    return;
  }

  // Start downloading the video.
  var rangedUrl = url;
  if (reconnectInfo.downloaded !== 0 ||
      reconnectInfo.range.start !== 0 ||
      reconnectInfo.range.end !== -1) {
    var start = reconnectInfo.range.start + reconnectInfo.downloaded;
    var end = reconnectInfo.range.end != -1 ? reconnectInfo.range.end : '';
    rangedUrl += '&range=' + start + '-' + end;
  }

  var req = request(rangedUrl, options.requestOptions);

  function cleanup() {
    req.removeListener('end', onend);
    req.removeListener('data', ondata);
    req.unpipe();
  }

  var myres = false;
  stream.destroy = function() {
    stream._isDestroyed = true;
    req.abort();
    cleanup();
  };

  // Forward events from the request to the stream.
  ['abort', 'request', 'response'].forEach(function(event) {
    req.on(event, function(arg) {
      stream.emit.call(stream, event, arg);
    });
  });

  function onend() {
    cleanup();

    // Reconnect if there is more to be downloaded.
    if (reconnectInfo.downloaded < reconnectInfo.total) {
      reconnectInfo.trys = reconnectInfo.trys - 1;
      doDownload(stream, url, options, reconnectInfo);
    } else {
      stream.end();
    }
  }

  req.on('error', function(err) {
    if (stream._isDestroyed || !myres) {
      stream.emit('error', err);
    } else {
      onend();
    }
  });

  req.on('response', function(res) {
    myres = true;
    if (stream._isDestroyed) { return; }
    if (reconnectInfo.downloaded === 0) {
      reconnectInfo.total = parseInt(res.headers['content-length']);
    }
  });

  function ondata(chunk) {
    var downloaded = reconnectInfo.downloaded += chunk.length;
    stream.emit('progress', chunk.length, downloaded, reconnectInfo.total);
  }

  req.on('data', ondata);
  req.on('end', onend);
  req.pipe(stream, { end: false });
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
  var stream = createStream(options);
  setImmediate(function() {
    downloadFromInfoCallback(stream, info, options);
  });
  return stream;
};

/**
 * Download the index of the file and parse it. Then callback with the built index
 * 
 * @param {string} url
 * @param {Object} init_range
 * @param {Object} index_range 
 * @param {Object} requestOptions
 * @param {Function} callback
 */
function downloadIndex(url, init_range, index_range, requestOptions, callback) {
  
  url += "&range=" + init_range.start + "-" + index_range.end;
  var req = request(url, requestOptions);

  var bufs = []
  req.on('data', function (data) {
    bufs.push(data);
  })
  req.on('end', function () {
    // build the index
    try {
      var buffer = Buffer.concat(bufs)
      index_range.end = Math.max(index_range.end, buffer.length)
      var index = buildIndex(buffer, index_range);
      callback(null, index, buffer);
    } catch (e) {
      callback(e)
    }
  })
  req.on('error', callback)
}
