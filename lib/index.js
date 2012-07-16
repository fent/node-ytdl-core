var url       = require('url');
var qs        = require('querystring');
var http      = require('http');
var EventVat  = require('eventvat');
var request   = require('request');
var Streamify = require('streamify');
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
  var stream = new Streamify({ superCtor: http.ClientResponse });

  options = options || {};
  options.quality = 'highest';

  if (cache.exists(id)) {
    var info = cache.get(id);
    process.nextTick(function() {
      download(link, options, stream, info);
    });

  } else {
    ytdl.getInfo(link, options, function(err, info) {
      if (err) {
        stream.emit('error', err);
        stream.readable = false;
        return;
      }

      download(link, options, stream, info);
    });
  }

  return stream;
}


/**
 * Downloads a video.
 *
 * @param (string) link
 * @param (Object) options
 * @param (ReadableStream) stream
 * @param (Object) info
 * @return (ReadableStream)
 */
function download(link, options, stream, info) {
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
  stream.emit('info', info, format);

  // start downloading the video
  var res = request(requestOptions);
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
      return callback(new Error('Video not found: ' + url));
    }

    var info = { id: id };
    var info = qs.parse(body);

    if (info.status === 'fail') {
      callback(new Error('Error ' + info.errorcode + ': ' + info.reason));;
      return;
    }

    // split some keys by commas
    KEYS_TO_SPLIT.forEach(function(key) {
      info[key] = info[key].split(',').filter(function(v) { return v !== ''; });
    });

    // convert some strings to javascript numbers and booleans
    info = Hash.map(info, function(val, key) {
      var intVal = parseInt(val);
      var floatVal = parseFloat(val);

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

    // a few more manual data cleansing
    var fmt_map = info.url_encoded_fmt_stream_map =
      qs.parse(info.url_encoded_fmt_stream_map);

    fmt_map.itag = fmt_map.itag
      .map(function(itag) {
        var split = itag.split(',');
        return { itag: split[0], url: split[1] ? split[1].slice(4) : null };
      })
      ;

    info.fmt_list = info.fmt_list.map(function(fmt) {
      return fmt.split('/');
    });

    info.formats = info.fmt_list
      .map(function(format, i) {
        var itag = format[0];
        format = FORMATS[itag];

        if (!format) {
          err = new Error('Unrecognized format itag: ' + itag);
          return;
        }

        format               = Hash.copy(format);
        format.quality       = fmt_map.quality[i];
        format.fallback_host = fmt_map.fallback_host[i];
        format.type          = fmt_map.type[i];
        format.url           = fmt_map.itag[i].url;

        return format;
      })
      .filter(function(format) {
        return !!format.url;
      })
      ;

    if (err) {
      callback(err);
    }

    info.video_verticals = info.video_verticals
      .slice(1, -1)
      .split(', ')
      .filter(function(val) { return val !== ''; })
      .map(function(val) { return parseInt(val); })
      ;

    cache.set(id, info);
    callback(null, info);
  });
}


/**
 * export
 */
module.exports = ytdl;
