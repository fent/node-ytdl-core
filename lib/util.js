const url = require('url');
const FORMATS = require('./formats');


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

const getBitrate = format => parseInt(format.bitrate) || 0;
const audioScore = format => {
  const abitrate = format.audioBitrate || 0;
  const aenc = audioEncodingRanks.findIndex(enc => format.codecs && format.codecs.includes(enc));
  return abitrate + (aenc / 10);
};


/**
 * Sort formats from highest quality to lowest.
 * By resolution, then video bitrate, then audio bitrate.
 *
 * @param {Object} a
 * @param {Object} b
 * @returns {number}
 */
exports.sortFormats = (a, b) => {
  const getResolution = format => {
    const result = /(\d+)p/.exec(format.qualityLabel);
    return result ? parseInt(result[1]) : 0;
  };
  const ares = getResolution(a);
  const bres = getResolution(b);
  const afeats = (~~!!ares * 2) + ~~!!a.audioBitrate;
  const bfeats = (~~!!bres * 2) + ~~!!b.audioBitrate;

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
 * @returns {Object}
 * @throws {Error} when no format matches the filter/format rules
 */
exports.chooseFormat = (formats, options) => {
  if (typeof options.format === 'object') {
    return options.format;
  }

  if (options.filter) {
    formats = exports.filterFormats(formats, options.filter);
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
      sortFormatsSimple(formats, true);
      format = formats[0];
      break;

    case 'lowestaudio':
      formats = exports.filterFormats(formats, 'audio');
      sortFormatsSimple(formats, true);
      format = formats[formats.length - 1];
      break;

    case 'highestvideo':
      formats = exports.filterFormats(formats, 'video');
      sortFormatsSimple(formats);
      format = formats[0];
      break;

    case 'lowestvideo':
      formats = exports.filterFormats(formats, 'video');
      sortFormatsSimple(formats);
      format = formats[formats.length - 1];
      break;

    default:
      format = getFormatByQuality(quality, formats);
      break;
  }

  if (!format) {
    throw Error(`No such format found: ${quality}`);
  }
  return format;
};

/**
 * Gets a format based on quality or array of quality's
 *
 * @param {string|[string]} quality
 * @param {[Object]} formats
 * @returns {Object}
 */
const getFormatByQuality = (quality, formats) => {
  let getFormat = itag => formats.find(format => `${format.itag}` === `${itag}`);
  if (Array.isArray(quality)) {
    return getFormat(quality.find(q => getFormat(q)));
  } else {
    return getFormat(quality);
  }
};

/**
 * Sort's the provided formats - highest bitrate first
 *
 * @param {[Object]} formats
 * @param {boolean} audioOnly look at audio score instead of video bitrate
 * @returns {[Object]}
 */
const sortFormatsSimple = (formats, audioOnly = false) => formats.sort((a, b) => {
  if (audioOnly) return audioScore(b) - audioScore(a);
  return getBitrate(b) - getBitrate(a);
});


/**
 * @param {Array.<Object>} formats
 * @param {Function} filter
 * @returns {Array.<Object>}
 */
exports.filterFormats = (formats, filter) => {
  let fn;
  const hasVideo = format => !!format.qualityLabel;
  const hasAudio = format => !!format.audioBitrate;
  switch (filter) {
    case 'audioandvideo':
      fn = format => hasVideo(format) && hasAudio(format);
      break;

    case 'video':
      fn = hasVideo;
      break;

    case 'videoonly':
      fn = format => hasVideo(format) && !hasAudio(format);
      break;

    case 'audio':
      fn = hasAudio;
      break;

    case 'audioonly':
      fn = format => !hasVideo(format) && hasAudio(format);
      break;

    default:
      if (typeof filter === 'function') {
        fn = filter;
      } else {
        throw TypeError(`Given filter (${filter}) is not supported`);
      }
  }
  return formats.filter(format => !!format.url && fn(format));
};


/**
 * Extract string inbetween another.
 *
 * @param {string} haystack
 * @param {string} left
 * @param {string} right
 * @returns {string}
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
exports.getURLVideoID = link => {
  const parsed = url.parse(link, true);
  let id = parsed.query.v;
  if (validPathDomains.test(link) && !id) {
    const paths = parsed.pathname.split('/');
    id = paths[paths.length - 1];
  } else if (parsed.hostname && !validQueryDomains.has(parsed.hostname)) {
    throw Error('Not a YouTube domain');
  }
  if (!id) {
    throw Error(`No video id found: ${link}`);
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
 * @returns {string}
 * @throws {Error} If unable to find a id
 * @throws {TypeError} If videoid doesn't match specs
 */
exports.getVideoID = str => {
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
exports.validateID = id => idRegex.test(id);


/**
 * Checks wether the input string includes a valid id.
 *
 * @param {string} string
 * @returns {boolean}
 */
exports.validateURL = string => {
  try {
    exports.getURLVideoID(string);
    return true;
  } catch (e) {
    return false;
  }
};


/**
 * @param {Object} format
 * @returns {Object}
 */
exports.addFormatMeta = format => {
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
 * @returns {string}
 */
exports.stripHTML = html => html
  .replace(/[\n\r]/g, ' ')
  .replace(/\s*<\s*br\s*\/?\s*>\s*/gi, '\n')
  .replace(/<\s*\/\s*p\s*>\s*<\s*p[^>]*>/gi, '\n')
  .replace(/<a\s+(?:[^>]*?\s+)?href=(?:["'])\/redirect.*?q=(.*?)(?:[&'"]).*?<\/a>/gi,
    (_, p1) => decodeURIComponent(p1))
  .replace(/<a\s+(?:[^>]*?\s+)?href=(?:["'])((?:https?|\/).*?)(?:['"]).*?<\/a>/gi,
    (_, p1) => url.resolve('https://youtube.com/', p1))
  .replace(/<.*?>/gi, '')
  .trim();


/**
 * Get a number from an abbreviated number string.
 *
 * @param {string} string
 * @returns {number}
 */
exports.parseAbbreviatedNumber = string => {
  const match = string
    .replace(',', '.')
    .replace(' ', '')
    .match(/([\d,.]+)([MK]?)/);
  if (match) {
    let [, num, multi] = match;
    num = parseFloat(num);
    return multi === 'M' ? num * 1000000 :
      multi === 'K' ? num * 1000 : num;
  }
  return null;
};


/**
 * Match begin and end braces of input JSON, return only json
 *
 * @param {string} mixedJson
 * @returns {string}
*/
exports.cutAfterJSON = mixedJson => {
  let open, close;
  if (mixedJson[0] === '[') {
    open = '[';
    close = ']';
  } else if (mixedJson[0] === '{') {
    open = '{';
    close = '}';
  }

  if (!open) {
    throw new Error(`Can't cut unsupported JSON (need to begin with [ or { ) but got: ${mixedJson[0]}`);
  }

  // States if the loop is currently in a string
  let isString = false;

  // Current open brackets to be closed
  let counter = 0;

  let i;
  for (i = 0; i < mixedJson.length; i++) {
    // Toggle the isString boolean when leaving/entering string
    if (mixedJson[i] === '"' && mixedJson[i - 1] !== '\\') {
      isString = !isString;
      continue;
    }
    if (isString) continue;

    if (mixedJson[i] === open) {
      counter++;
    } else if (mixedJson[i] === close) {
      counter--;
    }

    // All brackets have been closed, thus end of JSON is reached
    if (counter === 0) {
      // Return the cut JSON
      return mixedJson.substr(0, i + 1);
    }
  }

  // We ran through the whole string and ended up with an unclosed bracket
  throw Error("Can't cut unsupported JSON (no matching closing bracket found)");
};


/**
 * Checks if there is a playability error.
 *
 * @param {Object} info
 * @param {string} status
 * @returns {!Error}
 */
exports.playError = (info, status) => {
  let playability = info.playerResponse.playabilityStatus;
  if (playability && playability.status === status) {
    return Error(playability.reason || (playability.messages && playability.messages[0]));
  }
  return null;
};
