var qs      = require('querystring');
var url     = require('url');
var _       = require('underscore');
var FORMATS = require('./formats');


/**
 * Parses a string representation of amount of milliseconds.
 *
 * @param {String} time
 * @return {Number}
 */
var timeRegexp = /(?:(\d+)h)?(?:(\d+)m(?!s))?(?:(\d+)s)?(?:(\d+)(?:ms)?)?/;
exports.parseTime = function(time) {
  var result = timeRegexp.exec(time.toString());
  var hours  = result[1] || 0;
  var mins   = result[2] || 0;
  var secs   = result[3] || 0;
  var ms     = result[4] || 0;

  return hours * 3600000 + mins * 60000 + secs * 1000 + parseInt(ms, 10);
};


/**
 * Sort formats from highest quality to lowest.
 * By resolution, then video bitrate, then audio bitrate.
 *
 * @param {Object} a
 * @param {Object} b
 */
exports.sortFormats = function(a, b) {
  var ares = a.resolution ? parseInt(a.resolution.slice(0, -1), 10) : 0;
  var bres = b.resolution ? parseInt(b.resolution.slice(0, -1), 10) : 0;
  if (ares === bres) {
    var abitrate = a.bitrate ? parseFloat(a.bitrate, 10) : 0;
    var bbitrate = b.bitrate ? parseFloat(b.bitrate, 10) : 0;
    if (abitrate === bbitrate) {
      return b.audioBitrate - a.audioBitrate;
    } else {
      return bbitrate - abitrate;
    }
  } else {
    return bres - ares;
  }
};


/**
 * Extract string inbetween another.
 *
 * @param {String} haystack
 * @param {String} left
 * @param {String} right
 * @return {String}
 */
exports.between = function(haystack, left, right) {
  var pos;
  pos = haystack.indexOf(left);
  if (pos === -1) { return ''; }
  haystack = haystack.slice(pos + left.length);
  pos = haystack.indexOf(right);
  if (pos === -1) { return ''; }
  haystack = haystack.slice(0, pos);
  return haystack;
};


/**
 * Get video ID.
 *
 * There are a few type of video URL formats.
 *  - http://www.youtube.com/watch?v=VIDEO_ID
 *  - http://youtu.be/VIDEO_ID
 *
 * @param {String} link
 * @return {String}
 */
exports.getVideoID = function(link) {
  var linkParsed = url.parse(link, true);
  var id = linkParsed.hostname === 'youtu.be' ?
    linkParsed.pathname.slice(1) : linkParsed.query.v;
  if (!id) {
    throw new Error('No video id found: ' + link);
  }
  return id;
};


/**
 * @param {Object} info
 * @return {Array.<Object>}
 */
exports.parseFormats = function(info) {
  var formats = [];
  if (info.url_encoded_fmt_stream_map) {
    formats = formats
      .concat(info.url_encoded_fmt_stream_map.split(','));
  }
  if (info.adaptive_fmts) {
    formats = formats.concat(info.adaptive_fmts.split(','));
  }

  formats = formats
    .map(function(format) {
      var data = qs.parse(format);
      if (data.conn && data.conn.indexOf('rtmp') === 0) {
        data.rtmp = true;
      }

      var meta = FORMATS[data.itag];
      if (!meta) {
        console.warn('No format metadata for itag ' + data.itag + ' found');
      }

      _.extend(data, meta);

      return data;
    });
  delete info.url_encoded_fmt_stream_map;
  delete info.adaptive_fmts;

  formats.sort(exports.sortFormats);
  return formats;
};
