var qs       = require('querystring');
var url      = require('url');
var Entities = require('html-entities').AllHtmlEntities;
var FORMATS  = require('./formats');


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
  var aabitrate = a.audioBitrate || 0;
  var babitrate = b.audioBitrate || 0;
  var afeats = ~~!!ares * 2 + ~~!!aabitrate;
  var bfeats = ~~!!bres * 2 + ~~!!babitrate;

  if (afeats === bfeats) {
    if (ares === bres) {
      var abitrate, bbitrate, s;
      if (a.bitrate) {
        s = a.bitrate.split('-');
        abitrate = parseFloat(s[s.length - 1], 10);
      } else {
        abitrate = 0;
      }
      if (b.bitrate) {
        s = b.bitrate.split('-');
        bbitrate = parseFloat(s[s.length - 1], 10);
      } else {
        bbitrate = 0;
      }
      if (abitrate === bbitrate) {
        return babitrate - aabitrate;
      } else {
        return bbitrate - abitrate;
      }
    } else {
      return bres - ares;
    }
  } else {
    return bfeats - afeats;
  }
};


/**
 * Choose a format depending on the given options.
 *
 * @param {Array.<Object>} formats
 * @param {Object} options
 * @return {Object|Error}
 */
exports.chooseFormat = function(formats, options) {

  if (typeof options.format === 'object') {
    return options.format;
  }

  if (options.filter) {
    formats = exports.filterFormats(formats, options.filter);
    if (formats.length === 0) {
      return new Error('no formats found with custom filter');
    }
  }

  var format;
  var quality = options.quality || 'highest';
  switch (quality) {
    case 'highest':
      format = formats[0];
      break;

    case 'lowest':
      format = formats[formats.length - 1];
      break;

    default:
      var getFormat = function(itag) {
        for (var i = 0, len = formats.length; i < len; i++) {
          if (formats[i].itag === '' + itag) {
            return formats[i];
          }
        }
        return null;
      };
      if (Array.isArray(quality)) {
        for (var i = 0, len = quality.length; i < len; i++) {
          format = getFormat(quality[i]);
          if (format) { break; }
        }
      } else {
        format = getFormat(quality);
      }

  }

  if (!format) {
    return new Error('No such format found: ' + quality);
  } else if (format.rtmp) {
    return new Error('rtmp protocol not supported');
  }
  return format;
};


/**
 * @param {Array.<Object>} formats
 * @param {Function} filter
 * @return {Array.<Object>}
 */
exports.filterFormats = function(formats, filter) {
  var fn;
  switch (filter) {
    case 'video':
      fn = function(format) { return format.bitrate; };
      break;

    case 'videoonly':
      fn = function(format) { return format.bitrate && !format.audioBitrate; };
      break;

    case 'audio':
      fn = function(format) { return format.audioBitrate; };
      break;

    case 'audioonly':
      fn = function(format) { return !format.bitrate && format.audioBitrate; };
      break;

    default:
      fn = filter;
  }
  return formats.filter(fn);
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
 * @param {Boolean} debug
 * @return {Array.<Object>}
 */
exports.parseFormats = function(info, debug) {
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
      if (!meta && debug) {
        console.warn('No format metadata for itag ' + data.itag + ' found');
      }

      for (var key in meta) {
        data[key] = meta[key];
      }

      return data;
    });
  delete info.url_encoded_fmt_stream_map;
  delete info.adaptive_fmts;

  return formats;
};


/**
 * Get video description from html
 *
 * @param {String} html
 * @return {String}
 */
exports.getVideoDescription = function(html) {
  var regex = /<p.*?id="eow-description".*?>(.+?)<\/p>[\n\r\s]*?<\/div>/im;
  var description = html.match(regex);
  return description ? new Entities().decode(description[1]
    .replace(/\n/g, ' ')
    .replace(/\s*<\s*br\s*\/?\s*>\s*/gi, '\n')
    .replace(/<\s*\/\s*p\s*>\s*<\s*p[^>]*>/gi, '\n')
    .replace(/<.*?>/gi, '')).trim() : '';
};
