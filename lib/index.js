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
    });
    req.on('error', stream.emit.bind(stream, 'error'));
    stream.destroy = req.end.bind(req);
    req.pipe(stream);

  } else {
    if (options.begin) {
      url += '&begin=' + parseTime(options.begin);
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
  let rangedUrl = url;
  if (reconnectInfo.downloaded !== 0 ||
      reconnectInfo.range.start !== 0 ||
      reconnectInfo.range.end !== -1) {
    let start = reconnectInfo.range.start + reconnectInfo.downloaded;
    let end = reconnectInfo.range.end != -1 ? reconnectInfo.range.end : '';
    rangedUrl += '&range=' + start + '-' + end;
  }

  const req = request(rangedUrl, options.requestOptions);

  function cleanup() {
    req.removeListener('end', onend);
    req.removeListener('data', ondata);
    req.unpipe();
  }

  let myres = false;
  stream.destroy = () => {
    stream._isDestroyed = true;
    req.abort();
    cleanup();
  };

  // Forward events from the request to the stream.
  ['abort', 'request', 'response'].forEach(function(event) {
    req.on(event, (arg) => {
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

  req.on('error', (err) => {
    if (stream._isDestroyed || !myres) {
      stream.emit('error', err);
    } else {
      onend();
    }
  });

  req.on('response', (res) => {
    myres = true;
    if (stream._isDestroyed) { return; }
    if (reconnectInfo.downloaded === 0) {
      reconnectInfo.total = parseInt(res.headers['content-length']);
    }
  });

  function ondata(chunk) {
    const downloaded = reconnectInfo.downloaded += chunk.length;
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
