const qs       = require('querystring');
const url      = require('url');
const FORMATS  = require('./formats');


/**
 * Parses a string representation of amount of milliseconds.
 *
 * @param {String} time
 * @return {Number}
 */
const timeRegexp = /(?:(\d+)h)?(?:(\d+)m(?!s))?(?:(\d+)s)?(?:(\d+)(?:ms)?)?/;
exports.parseTime = (time) => {
  const result = timeRegexp.exec(time.toString());
  const hours  = result[1] || 0;
  const mins   = result[2] || 0;
  const secs   = result[3] || 0;
  const ms     = result[4] || 0;

  return hours * 3600000 + mins * 60000 + secs * 1000 + parseInt(ms, 10);
};


// Use these to help sort formats, higher is better.
const audioEncodingRanks = {
  mp3: 1,
  vorbis: 2,
  aac: 3,
  opus: 4,
  flac: 5,
};
const videoEncodingRanks = {
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
  const ares = a.resolution ? parseInt(a.resolution.slice(0, -1), 10) : 0;
  const bres = b.resolution ? parseInt(b.resolution.slice(0, -1), 10) : 0;
  const afeats = ~~!!ares * 2 + ~~!!a.audioBitrate;
  const bfeats = ~~!!bres * 2 + ~~!!b.audioBitrate;

  function getBitrate(c) {
    if (c.bitrate) {
      let s = c.bitrate.split('-');
      return parseFloat(s[s.length - 1], 10);
    } else {
      return 0;
    }
  }

  function audioScore(c) {
    const abitrate = c.audioBitrate || 0;
    const aenc = audioEncodingRanks[c.audioEncoding] || 0;
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

  let format;
  const quality = options.quality || 'highest';
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
  let fn;
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
  let pos = haystack.indexOf(left);
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
 *  - https://www.youtube.com/watch?v=VIDEO_ID
 *  - https://m.youtube.com/watch?v=VIDEO_ID
 *  - https://youtu.be/VIDEO_ID
 *  - https://www.youtube.com/v/VIDEO_ID
 *  - https://www.youtube.com/embed/VIDEO_ID
 *  - https://music.youtube.com/watch?v=VIDEO_ID
 *  - https://gaming.youtube.com/watch?v=VIDEO_ID
 *
 * @param {String} link
 * @return {String|Error}
 */
const validQueryDomains = new Set([
  'youtube.com',
  'www.youtube.com',
  'm.youtube.com',
  'music.youtube.com',
  'gaming.youtube.com',
]);
const validPathDomains = new Set([
  'youtu.be',
  'youtube.com',
  'www.youtube.com',
]);
exports.getURLVideoID = function(link) {
  const parsed = url.parse(link, true);
  let id = parsed.query.v;
  if (validPathDomains.has(parsed.hostname) && !id) {
    const paths = parsed.pathname.split('/');
    id = paths[paths.length - 1];
  } else if (parsed.hostname && !validQueryDomains.has(parsed.hostname)) {
    return new Error('Not a YouTube domain');
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
const idRegex = /^[a-zA-Z0-9-_]{11}$/;
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
  let formats = [];
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
  const meta = FORMATS[format.itag];
  for (let key in meta) {
    format[key] = meta[key];
  }

  format.live = /\/source\/yt_live_broadcast\//.test(format.url);
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
 * @param {Array.<Function>} funcs
 * @param {Function(!Error, Array.<Object>)} callback
 */
exports.parallel = (funcs, callback) => {
  let funcsDone = 0;
  let errGiven = false;
  let results = [];
  const len = funcs.length;

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
