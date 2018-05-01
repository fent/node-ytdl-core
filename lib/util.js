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
exports.parseTime = (time) => {
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
exports.sortFormats = (a, b) => {
  var ares = a.resolution ? parseInt(a.resolution.slice(0, -1), 10) : 0;
  var bres = b.resolution ? parseInt(b.resolution.slice(0, -1), 10) : 0;
  var afeats = ~~!!ares * 2 + ~~!!a.audioBitrate;
  var bfeats = ~~!!bres * 2 + ~~!!b.audioBitrate;

  function getBitrate(c) {
    if (c.bitrate) {
      let s = c.bitrate.split('-');
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
      let avbitrate = getBitrate(a);
      let bvbitrate = getBitrate(b);
      if (avbitrate === bvbitrate) {
        let aascore = audioScore(a);
        let bascore = audioScore(b);
        if (aascore === bascore) {
          let avenc = videoEncodingRanks[a.encoding] || 0;
          let bvenc = videoEncodingRanks[b.encoding] || 0;
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
exports.chooseFormat = (formats, options) => {
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
  function getBitrate(f) {
    let s = f.bitrate.split('-');
    return parseFloat(s[s.length - 1], 10);
  }
  switch (quality) {
    case 'highest':
      format = formats[0];
      break;

    case 'lowest':
      format = formats[formats.length - 1];
      break;

    case 'highestaudio':
      formats = exports.filterFormats(formats, 'audio');
      format = null;
      for (let f of formats) {
        if (!format
          || f.audioBitrate > format.audioBitrate
          || (f.audioBitrate === format.audioBitrate && format.encoding && !f.encoding))
            format = f;
      }
      break;

    case 'highestvideo':
      formats = exports.filterFormats(formats, 'video');
      format = null;
      for (let f of formats) {
        if (!format
          || getBitrate(f) > getBitrate(format)
          || (getBitrate(f) === getBitrate(format) && format.audioEncoding && !f.audioEncoding))
            format = f;
      }
      break;

    default: {
      let getFormat = (itag) => {
        return formats.find((format) => format.itag === '' + itag);
      };
      if (Array.isArray(quality)) {
        quality.find((q) => format = getFormat(q));
      } else {
        format = getFormat(quality);
      }
    }

  }

  if (!format) {
    return new Error('No such format found: ' + quality);
  }
  return format;
};


/**
 * @param {Array.<Object>} formats
 * @param {Function} filter
 * @return {Array.<Object>}
 */
exports.filterFormats = (formats, filter) => {
  var fn;
  switch (filter) {
    case 'audioandvideo':
      fn = (format) => format.bitrate && format.audioBitrate;
      break;

    case 'video':
      fn = (format) => format.bitrate;
      break;

    case 'videoonly':
      fn = (format) => format.bitrate && !format.audioBitrate;
      break;

    case 'audio':
      fn = (format) => format.audioBitrate;
      break;

    case 'audioonly':
      fn = (format) => !format.bitrate && format.audioBitrate;
      break;

    default:
      if (typeof filter === 'function') {
        fn = filter;
      } else {
        throw new TypeError(`Given filter (${filter}) is not supported`);
      }
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
exports.between = (haystack, left, right) => {
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
 * @return {String|Error}
 */
exports.getURLVideoID = function(link) {
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
  if (!exports.validateID(id)) {
    return new TypeError(`Video id (${id}) does not match expected ` +
      `format (${idRegex.toString()})`);
  }
  return id;
};


/**
 * Gets video ID either from a url or by checking if the given string
 * matches the video ID format.
 *
 * @param {String} str
 * @return {String|Error}
 */
exports.getVideoID = (str) => {
  if (exports.validateID(str)) {
    return str;
  } else {
    return exports.getURLVideoID(str);
  }
};


/**
 * Returns true if given id satifies YouTube's id format.
 *
 * @param {String} id
 * @return {Boolean}
 */
var idRegex = /^[a-zA-Z0-9-_]{11}$/;
exports.validateID = (id) => {
  return idRegex.test(id);
};


/**
 * Checks wether the input string includes a valid id.
 *
 * @param {String} string
 * @return {Boolean}
 */
exports.validateURL = (string) => {
  return !(exports.getURLVideoID(string) instanceof Error);
};


/**
 * @param {Object} info
 * @return {Array.<Object>}
 */
exports.parseFormats = (info) => {
  var formats = [];
  if (info.url_encoded_fmt_stream_map) {
    formats = formats
      .concat(info.url_encoded_fmt_stream_map.split(','));
  }
  if (info.adaptive_fmts) {
    formats = formats.concat(info.adaptive_fmts.split(','));
  }

  formats = formats.map((format) => qs.parse(format));
  delete info.url_encoded_fmt_stream_map;
  delete info.adaptive_fmts;

  return formats;
};


/**
 * @param {Object} format
 */
exports.addFormatMeta = (format) => {
  var meta = FORMATS[format.itag];
  for (let key in meta) {
    format[key] = meta[key];
  }

  if (/\/live\/1\//.test(format.url)) {
    format.live = true;
  }
};


/**
 * Get only the string from an HTML string.
 *
 * @param {String} html
 * @return {String}
 */
exports.stripHTML = (html) => {
  return html
    .replace(/\n/g, ' ')
    .replace(/\s*<\s*br\s*\/?\s*>\s*/gi, '\n')
    .replace(/<\s*\/\s*p\s*>\s*<\s*p[^>]*>/gi, '\n')
    .replace(/<.*?>/gi, '')
    .trim();
};


/**
 * Get video description from html
 *
 * @param {String} html
 * @return {String}
 */
exports.getVideoDescription = (html) => {
  var regex = /<p.*?id="eow-description".*?>(.+?)<\/p>[\n\r\s]*?<\/div>/im;
  var description = html.match(regex);
  return description ?
    new Entities().decode(exports.stripHTML(description[1])) : '';
};


/**
 * Get video Owner from html.
 *
 * @param {String} body
 * @return {Object}
 */
var authorRegexp = /<a href="\/channel\/([\w-]+)"[^>]+>(.+?(?=<\/a>))/;
var aliasRegExp = /<a href="\/user\/([^"]+)/;
exports.getAuthor = (body) => {
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
    avatar: url.resolve(VIDEO_URL, exports.between(ownerinfo,
      'data-thumb="', '"')),
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
exports.getPublished = (body) => {
  return Date.parse(exports.between(body,
    '<meta itemprop="datePublished" content="', '">'));
};


/**
 * Get video published at from html.
 * Credits to https://github.com/paixaop.
 *
 * @param {String} body
 * @return {Array.<Object>}
 */
exports.getRelatedVideos = (body) => {
  var jsonStr = exports.between(body, '\'RELATED_PLAYER_ARGS\': {"rvs":', '},');
  try {
    jsonStr = JSON.parse(jsonStr);
  } catch (err) {
    return [];
  }
  return jsonStr.split(',').map((link) => qs.parse(link));
};


/**
 * @param {Array.<Function>} funcs
 * @param {Function(!Error, Array.<Object>)} callback
 */
exports.parallel = (funcs, callback) => {
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
    funcs.forEach((f, i) => { f(checkDone.bind(null, i)); });
  } else {
    callback(null, results);
  }
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
exports.fromHumanTime = (time) => {
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
