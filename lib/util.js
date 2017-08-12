const qs       = require('querystring');
const url      = require('url');
const Entities = require('html-entities').AllHtmlEntities;
const FORMATS  = require('./formats');


const VIDEO_URL = 'https://www.youtube.com/watch?v=';


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


// Use these to help sort formats, higher is better.
var audioEncodingRanks = {
  mp3: 1,
  vorbis: 2,
  aac: 3,
  opus: 4,
  flac: 5,
};
var videoEncodingRanks = {
  'Sorenson H.283': 1,
  'MPEG-4 Visual': 2,
  'VP8': 3,
  'VP9': 4,
  'H.264': 5,
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
  var afeats = ~~!!ares * 2 + ~~!!a.audioBitrate;
  var bfeats = ~~!!bres * 2 + ~~!!b.audioBitrate;

  function getBitrate(c) {
    if (c.bitrate) {
      var s = c.bitrate.split('-');
      return parseFloat(s[s.length - 1], 10);
    } else {
      return 0;
    }
  }

  function audioScore(c) {
    var abitrate = c.audioBitrate || 0;
    var aenc = audioEncodingRanks[c.audioEncoding] || 0;
    return abitrate + aenc / 10;
  }

  if (afeats === bfeats) {
    if (ares === bres) {
      var avbitrate = getBitrate(a);
      var bvbitrate = getBitrate(b);
      if (avbitrate === bvbitrate) {
        var aascore = audioScore(a);
        var bascore = audioScore(b);
        if (aascore === bascore) {
          var avenc = videoEncodingRanks[a.encoding] || 0;
          var bvenc = videoEncodingRanks[b.encoding] || 0;
          return bvenc - avenc;
        } else {
          return bascore - aascore;
        }
      } else {
        return bvbitrate - avbitrate;
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
      return new Error('No formats found with custom filter');
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
 *  - http://m.youtube.com/watch?v=VIDEO_ID
 *  - http://youtu.be/VIDEO_ID
 *  - http://www.youtube.com/v/VIDEO_ID
 *  - http://www.youtube.com/embed/VIDEO_ID
 *
 * @param {String} link
 * @return {String}
 */
var idRegex = /^[a-zA-Z0-9-_]{11}$/;
exports.getVideoID = function(link) {
  if (idRegex.test(link)) {
    return link;
  }
  var parsed = url.parse(link, true);
  var id = parsed.query.v;
  if (parsed.hostname === 'youtu.be' ||
     (parsed.hostname === 'youtube.com' ||
      parsed.hostname === 'www.youtube.com') && !id) {
    var s = parsed.pathname.split('/');
    id = s[s.length - 1];
  }
  if (!id) {
    return new Error('No video id found: ' + link);
  }
  id = id.substring(0, 11);
  if (!idRegex.test(id)) {
    return new Error('Video id (' + id + ') does not match expected format (' + idRegex.toString() + ')');
  }
  return id;
};


/**
 * checks wether the input string includes a valid id
 *
 * @param {String} string
 * return {boolean}
 */
exports.validateLink = function(string) {
  return !(exports.getVideoID(string) instanceof Error);
}


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
    .map(function(format) { return qs.parse(format); });
  delete info.url_encoded_fmt_stream_map;
  delete info.adaptive_fmts;

  return formats;
};


/**
 * @param {Object} format
 */
exports.addFormatMeta = function(format) {
  var meta = FORMATS[format.itag];
  for (var key in meta) {
    format[key] = meta[key];
  }

  if (/\/live\/1\//.test(format.url)) {
    format.live = true;
  }
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
    .replace(/<.*?>/gi, '')).trim() : ''
    ;
};


/**
 * Get video Owner from html.
 *
 * @param {String} body
 * @return {Object}
 */
var authorRegexp = /<a href="\/channel\/([\w-]+)"[^>]+>(.+?(?=<\/a>))/;
var aliasRegExp = /<a href="\/user\/([^"]+)/;
exports.getAuthor = function(body) {
  var ownerinfo = exports.between(body,
    '<div id="watch7-user-header" class=" spf-link ">',
    '<div id="watch8-action-buttons" class="watch-action-buttons clearfix">');
  if (ownerinfo === '') {
    return {};
  }
  ownerinfo = new Entities().decode(ownerinfo);
  var channelMatch = ownerinfo.match(authorRegexp);
  var userMatch = ownerinfo.match(aliasRegExp);
  return {
    id: channelMatch[1],
    name: channelMatch[2],
    avatar: url.resolve(VIDEO_URL, exports.between(ownerinfo, 'data-thumb="', '"')),
    user: userMatch ? userMatch[1] : null,
    channel_url: 'https://www.youtube.com/channel/' + channelMatch[1],
    user_url: userMatch ? 'https://www.youtube.com/user/' + userMatch[1] : null,
  };
};


/**
 * Get video published at from html.
 *
 * @param {String} body
 * @return {String}
 */
exports.getPublished = function(body) {
  return Date.parse(exports.between(body, '<meta itemprop="datePublished" content="', '">'));
};


/**
 * Get video published at from html.
 * Credits to https://github.com/paixaop.
 *
 * @param {String} body
 * @return {Array.<Object>}
 */
exports.getRelatedVideos = function(body) {
  var jsonStr = exports.between(body, '\'RELATED_PLAYER_ARGS\': {"rvs":', '},');
  try {
    jsonStr = JSON.parse(jsonStr);
  }
  catch (err) {
    return [];
  }
  return jsonStr.split(',').map(function(link) {
    return qs.parse(link);
  });
};


/**
 * @param {Array.<Function>} funcs
 * @param {Function(!Error, Array.<Object>)} callback
 */
exports.parallel = function(funcs, callback) {
  var funcsDone = 0;
  var len = funcs.length;
  var errGiven = false;
  var results = [];

  function checkDone(index, err, result) {
    if (errGiven) { return; }
    if (err) {
      errGiven = true;
      callback(err);
      return;
    }
    results[index] = result;
    if (++funcsDone === len) {
      callback(null, results);
    }
  }

  if (len > 0) {
    for (var i = 0; i < len; i++) {
      funcs[i](checkDone.bind(null, i));
    }
  } else {
    callback(null, results);
  }
};


/**
 * (Deep) assign object to another.
 *
 * @param {Object} target
 * @param {Object} source
 * @param {boolean} deep
 */
exports.objectAssign = function(target, source, deep) {
  for (var key in source) {
    if (deep && typeof source[key] === 'object' && source[key] != null &&
        target[key]) {
      exports.objectAssign(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
};


/**
 * Converts human friendly time to milliseconds. Supports the format
 * 00:00:00.000 for hours, minutes, seconds, and milliseconds respectively.
 * And 0ms, 0s, 0m, 0h, and together 1m1s.
 *
 * @param {String|Number} time
 * @return {Number}
 */
var numberFormat = /^\d+$/;
var timeFormat = /^(?:(?:(\d+):)?(\d{1,2}):)?(\d{1,2})(?:\.(\d{3}))?$/;
var timeUnits = {
  ms: 1,
  s: 1000,
  m: 60000,
  h: 3600000,
};
exports.fromHumanTime = function(time) {
  if (typeof time === 'number') { return time; }
  if (numberFormat.test(time)) { return +time; }
  var firstFormat = timeFormat.exec(time);
  if (firstFormat) {
    return +(firstFormat[1] || 0) * timeUnits.h +
      +(firstFormat[2] || 0) * timeUnits.m +
      +firstFormat[3] * timeUnits.s +
      +(firstFormat[4] || 0);
  } else {
    var total = 0;
    var r = /(\d+)(ms|s|m|h)/g;
    var rs;
    while ((rs = r.exec(time)) != null) {
      total += +rs[1] * timeUnits[rs[2]];
    }
    return total;
  }
};
