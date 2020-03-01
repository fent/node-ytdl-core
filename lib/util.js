const url      = require('url');
const FORMATS  = require('./formats');


// Use these to help sort formats, higher is better.
const audioEncodingRanks = [
  'mp4a',
  'mp3',
  'vorbis',
  'aac',
  'opus',
  'flac',
];
const videoEncodingRanks = [
  'mp4v',
  'avc1',
  'Sorenson H.283',
  'MPEG-4 Visual',
  'VP8',
  'VP9',
  'H.264',
];

const getBitrate = (format) => parseInt(format.bitrate) || 0;
const audioScore = (format) => {
  const abitrate = format.audioBitrate || 0;
  const aenc = audioEncodingRanks.findIndex(enc => format.codecs && format.codecs.includes(enc));
  return abitrate + aenc / 10;
};


/**
 * Sort formats from highest quality to lowest.
 * By resolution, then video bitrate, then audio bitrate.
 *
 * @param {Object} a
 * @param {Object} b
 */
exports.sortFormats = (a, b) => {
  const ares = a.qualityLabel ? parseInt(a.qualityLabel.slice(0, -1)) : 0;
  const bres = b.qualityLabel ? parseInt(b.qualityLabel.slice(0, -1)) : 0;
  const afeats = ~~!!ares * 2 + ~~!!a.audioBitrate;
  const bfeats = ~~!!bres * 2 + ~~!!b.audioBitrate;

  if (afeats === bfeats) {
    if (ares === bres) {
      let avbitrate = getBitrate(a);
      let bvbitrate = getBitrate(b);
      if (avbitrate === bvbitrate) {
        let aascore = audioScore(a);
        let bascore = audioScore(b);
        if (aascore === bascore) {
          const avenc = videoEncodingRanks.findIndex(enc => a.codecs && a.codecs.includes(enc));
          const bvenc = videoEncodingRanks.findIndex(enc => b.codecs && b.codecs.includes(enc));
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
 * @return {Object}
 * @throws {Error} when no format matches the filter/format rules
 */
exports.chooseFormat = (formats, options) => {
  if (typeof options.format === 'object') {
    return options.format;
  }

  if (options.filter) {
    formats = exports.filterFormats(formats, options.filter);
    if (formats.length === 0) {
      throw Error('No formats found with custom filter');
    }
  }

  let format;
  const quality = options.quality || 'highest';
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
          || audioScore(f) > audioScore(format))
          format = f;
      }
      break;

    case 'lowestaudio':
      formats = exports.filterFormats(formats, 'audio');
      format = null;
      for (let f of formats) {
        if (!format
          || audioScore(f) < audioScore(format))
          format = f;
      }
      break;

    case 'highestvideo':
      formats = exports.filterFormats(formats, 'video');
      format = null;
      for (let f of formats) {
        if (!format
          || getBitrate(f) > getBitrate(format))
          format = f;
      }
      break;

    case 'lowestvideo':
      formats = exports.filterFormats(formats, 'video');
      format = null;
      for (let f of formats) {
        if (!format
          || getBitrate(f) < getBitrate(format))
          format = f;
      }
      break;

    default: {
      let getFormat = (itag) => {
        return formats.find((format) => '' + format.itag === '' + itag);
      };
      if (Array.isArray(quality)) {
        quality.find((q) => format = getFormat(q));
      } else {
        format = getFormat(quality);
      }
    }

  }

  if (!format) {
    throw Error('No such format found: ' + quality);
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
  const hasVideo = format => !!format.qualityLabel;
  const hasAudio = format => !!format.audioBitrate;
  switch (filter) {
    case 'audioandvideo':
      fn = (format) => hasVideo(format) && hasAudio(format);
      break;

    case 'video':
      fn = hasVideo;
      break;

    case 'videoonly':
      fn = (format) => hasVideo(format) && !hasAudio(format);
      break;

    case 'audio':
      fn = hasAudio;
      break;

    case 'audioonly':
      fn = (format) => !hasVideo(format) && hasAudio(format);
      break;

    default:
      if (typeof filter === 'function') {
        fn = filter;
      } else {
        throw TypeError(`Given filter (${filter}) is not supported`);
      }
  }
  return formats.filter(fn);
};


/**
 * String#indexOf() that supports regex too.
 *
 * @param {string} haystack
 * @param {string|RegExp} needle
 * @return {number}
 */
const indexOf = (haystack, needle) => {
  return needle instanceof RegExp ?
    haystack.search(needle) : haystack.indexOf(needle);
};


/**
 * Extract string inbetween another.
 *
 * @param {string} haystack
 * @param {string} left
 * @param {string} right
 * @return {string}
 */
exports.between = (haystack, left, right) => {
  let pos = indexOf(haystack, left);
  if (pos === -1) { return ''; }
  haystack = haystack.slice(pos + left.length);
  pos = indexOf(haystack, right);
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
 * @param {string} link
 * @return {string}
 * @throws {Error} If unable to find a id
 * @throws {TypeError} If videoid doesn't match specs
 */
const validQueryDomains = new Set([
  'youtube.com',
  'www.youtube.com',
  'm.youtube.com',
  'music.youtube.com',
  'gaming.youtube.com',
]);
const validPathDomains = /^https?:\/\/(youtu\.be\/|(www\.)?youtube.com\/(embed|v)\/)/;
exports.getURLVideoID = (link) => {
  const parsed = url.parse(link, true);
  let id = parsed.query.v;
  if (validPathDomains.test(link) && !id) {
    const paths = parsed.pathname.split('/');
    id = paths[paths.length - 1];
  } else if (parsed.hostname && !validQueryDomains.has(parsed.hostname)) {
    throw Error('Not a YouTube domain');
  }
  if (!id) {
    throw Error('No video id found: ' + link);
  }
  id = id.substring(0, 11);
  if (!exports.validateID(id)) {
    throw TypeError(`Video id (${id}) does not match expected ` +
      `format (${idRegex.toString()})`);
  }
  return id;
};


/**
 * Gets video ID either from a url or by checking if the given string
 * matches the video ID format.
 *
 * @param {string} str
 * @return {string}
 * @throws {Error} If unable to find a id
 * @throws {TypeError} If videoid doesn't match specs
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
 * @param {string} id
 * @return {boolean}
 */
const idRegex = /^[a-zA-Z0-9-_]{11}$/;
exports.validateID = (id) => {
  return idRegex.test(id);
};


/**
 * Checks wether the input string includes a valid id.
 *
 * @param {string} string
 * @return {boolean}
 */
exports.validateURL = (string) => {
  try {
    exports.getURLVideoID(string);
    return true;
  } catch(e) {
    return false;
  }
};


/**
 * @param {Object} format
 * @return {Object}
 */
exports.addFormatMeta = (format) => {
  format = Object.assign({}, FORMATS[format.itag], format);
  format.container = format.mimeType ?
    format.mimeType.split(';')[0].split('/')[1] : null;
  format.codecs = format.mimeType ?
    exports.between(format.mimeType, 'codecs="', '"') : null;
  format.live = /\/source\/yt_live_broadcast\//.test(format.url);
  format.isHLS = /\/manifest\/hls_(variant|playlist)\//.test(format.url);
  format.isDashMPD = /\/manifest\/dash\//.test(format.url);
  return format;
};


/**
 * Get only the string from an HTML string.
 *
 * @param {string} html
 * @return {string}
 */
exports.stripHTML = (html) => {
  return html
    .replace(/[\n\r]/g, ' ')
    .replace(/\s*<\s*br\s*\/?\s*>\s*/gi, '\n')
    .replace(/<\s*\/\s*p\s*>\s*<\s*p[^>]*>/gi, '\n')
    .replace(/<.*?>/gi, '')
    .trim();
};
