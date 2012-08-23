var url       = require('url');
var qs        = require('querystring');
var http      = require('http');
var EventVat  = require('eventvat');
var request   = require('request');
var streamify = require('streamify');
var Hash      = require('hashish');
var FORMATS   = require('./formats');
var parseTime = require('./util').parseTime;


var INFO_URL = 'http://www.youtube.com/get_video_info?hl=en_US&video_id=';
var KEYS_TO_SPLIT = [
  'keywords'
, 'fmt_list'
, 'fexp'
, 'watermark'
, 'ad_channel_code_overlay'
];


// cache for recently looked up video infos
var cache = new EventVat({ autoexpire: 30 });


/**
 * Checks cache to see if info for this video has been fetched recently.
 * If not, get it, then download the video once the info is found.
 *
 * @param (string) link
 * @param (Object) options
 * @return (ReadableStream)
 */
function ytdl(link, options) {
  var id = url.parse(link, true).query.v;
  var stream = streamify({ superCtor: http.ClientResponse });

  options = options || {};
  options.quality = 'highest';

  if (cache.exists(id)) {
    var info = cache.get(id);
    process.nextTick(function() {
      download(options, stream, info);
    });

  } else {
    ytdl.getInfo(link, options, function(err, info) {
      if (err) {
        stream.emit('error', err);
        stream.readable = false;
        return;
      }

      download(options, stream, info);
    });
  }

  return stream;
}


/**
 * Downloads a video.
 *
 * @param (Object) options
 * @param (ReadableStream) stream
 * @param (Object) info
 * @return (ReadableStream)
 */
function download(options, stream, info) {
  var formats = info.formats;
  if (options.filter) {
    formats = formats.filter(options.filter);
  }

  var format;
  switch (options.quality) {
    case 'highest':
      format = formats[0];
      break;

    case 'lowest':
      format = formats[formats.length - 1];
      break;

    default:
      format = formats.filter(function(format) {
        return format.itag === options.quality;
      })[0];

  }

  if (!format) {
    stream.emit('error', new Error('No such format found'));
    return;
  }

  format = Hash.copy(format);
  var url = format.url;
  var requestOptions = Hash.copy(options);

  if (options.start) {
    url = url + '&begin=' + parseTime(options.start);
  }

  format.url = requestOptions.url = url;

  // start downloading the video
  var res = request(requestOptions);
  res.on('response', function(res) {
    format.size = res.headers['content-length'];
    stream.emit('info', info, format);
  });
  stream.resolve(res);
}


/**
 * Gets info from a video.
 *
 * @param (string) link
 * @param (Object) requestOptions
 * @param (Function(Error, Object)) callback
 */
ytdl.getInfo = function getInfo(link, requestOptions, callback) {
  if (typeof requestOptions === 'function') {
    callback = requestOptions;
    requestOptions = {};
  } else {
    requestOptions = Hash.copy(requestOptions);
  }

  var id = url.parse(link, true).query.v;
  if (!id) {
    process.nextTick(function() {
      callback(new Error('Video ID not found'));
    });
    return;
  }

  requestOptions.url = INFO_URL + id;

  request(requestOptions, function(err, res, body) {
    if (err) return callback(err);
    if (res.statusCode !== 200) {
      return callback(new Error('Video not found: ' + link));
    }

    var info = qs.parse(body);

    if (info.status === 'fail') {
      callback(new Error('Error ' + info.errorcode + ': ' + info.reason));
      return;
    }

    // split some keys by commas
    KEYS_TO_SPLIT.forEach(function(key) {
      if (!info[key]) return;
      info[key] = info[key].split(',').filter(function(v) { return v !== ''; });
    });

    // convert some strings to javascript numbers and booleans
    info = Hash.map(info, function(val) {
      var intVal = parseInt(val, 10);
      var floatVal = parseFloat(val, 10);

      if (intVal.toString() === val) {
        return intVal;
      } else if (floatVal.toString() === val) {
        return floatVal;
      } else if (val === 'True') {
        return true;
      } else if (val === 'False') {
        return false;
      } else {
        return val;
      }
    });

    info.fmt_list = info.fmt_list.map(function(format) {
      return format.split('/');
    });

    info.formats = info.url_encoded_fmt_stream_map
      .split(',')
      .map(function(format) {
        var data = qs.parse(format);
        format = FORMATS[data.itag];

        if (!format) {
          err = new Error('No such format for itag ' + data.itag + ' found');
          return;
        }

        Hash(format).forEach(function(val, key) {
          data[key] = val;
        });

        return data;
      })
      ;

    delete info.url_encoded_fmt_stream_map;

    if (err) {
      return callback(err);
    }

    info.video_verticals = info.video_verticals
      .slice(1, -1)
      .split(', ')
      .filter(function(val) { return val !== ''; })
      .map(function(val) { return parseInt(val, 10); })
      ;

    cache.set(id, info);
    callback(null, info);
  });
};


/**
 * export
 */
module.exports = ytdl;
