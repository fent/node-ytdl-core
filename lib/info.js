var qs       = require('querystring');
var Hash     = require('hashish');
var crequest = require('./crequest');
var util     = require('./util');
var FORMATS  = require('./formats');


var INFO_URL = 'http://www.youtube.com/get_video_info?' +
'hl=en_US&el=detailpage&video_id=';
var KEYS_TO_SPLIT = [
  'keywords',
  'fmt_list',
  'fexp',
  'watermark',
  'ad_channel_code_overlay'
];


/**
 * Gets info from a video.
 *
 * @param {String} link
 * @param {Object} requestOptions
 * @param {Function(Error, Object)} callback
 */
module.exports = function getInfo(link, requestOptions, callback) {
  if (typeof requestOptions === 'function') {
    callback = requestOptions;
    requestOptions = {};
  } else {
    requestOptions = Hash.copy(requestOptions);
  }

  var id = util.getVideoID(link);
  requestOptions.url = INFO_URL + id;

  crequest(requestOptions, function(err, body) {
    if (err) return callback(err);

    var info = qs.parse(body);

    if (info.status === 'fail') {
      callback(new Error('Error ' + info.errorcode + ': ' + info.reason));
      return;
    }

    // Split some keys by commas.
    KEYS_TO_SPLIT.forEach(function(key) {
      if (!info[key]) return;
      info[key] = info[key].split(',').filter(function(v) { return v !== ''; });
    });

    // Convert some strings to javascript numbers and booleans.
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

    if (info.fmt_list) {
      info.fmt_list = info.fmt_list.map(function(format) {
        return format.split('/');
      });
    } else {
      info.fmt_list = [];
    }

    info.formats = [];
    if (info.url_encoded_fmt_stream_map) {
      info.formats = info.formats
        .concat(info.url_encoded_fmt_stream_map.split(','));
    }
    if (info.adaptive_fmts) {
      info.formats = info.formats.concat(info.adaptive_fmts.split(','));
    }

    info.formats = info.formats
      .map(function(format) {
        var data = qs.parse(format);
        if (data.conn && data.conn.indexOf('rtmp') === 0) {
          data.rtmp = true;
        }

        format = FORMATS[data.itag];

        if (!format) {
          console.warn('No such format for itag ' + data.itag + ' found');
        }

        new Hash(format).forEach(function(val, key) {
          data[key] = val;
        });

        return data;
      });

    delete info.url_encoded_fmt_stream_map;
    delete info.adaptive_fmts;

    info.formats.sort(util.sortFormats);

    info.video_verticals = info.video_verticals
      .slice(1, -1)
      .split(', ')
      .filter(function(val) { return val !== ''; })
      .map(function(val) { return parseInt(val, 10); })
      ;

    callback(null, info);
  });
};
