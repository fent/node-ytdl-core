const urllib = require('url');
const querystring = require('querystring');
const sax = require('sax');
const miniget = require('miniget');
const util = require('./util');
const extras = require('./info-extras');
const sig = require('./sig');
const Cache = require('./cache');


const VIDEO_URL = 'https://www.youtube.com/watch?v=';
const EMBED_URL = 'https://www.youtube.com/embed/';
const VIDEO_EURL = 'https://youtube.googleapis.com/v/';
const INFO_HOST = 'www.youtube.com';
const INFO_PATH = '/get_video_info';


/**
 * Gets info from a video without getting additional formats.
 *
 * @param {string} id
 * @param {Object} options
 * @returns {Promise<Object>}
 */
exports.getBasicInfo = async(id, options) => {
  // Try getting config from the video page first.
  const params = `hl=${options.lang || 'en'}`;
  let url = `${VIDEO_URL + id}&${params}&bpctr=${Math.ceil(Date.now() / 1000)}&pbj=1`;

  // Remove header from watch page request.
  // Otherwise, it'll use a different framework for rendering content.
  const reqOptions = Object.assign({}, options.requestOptions);
  reqOptions.headers = Object.assign({}, reqOptions.headers, {
    'x-youtube-client-name': '1',
    'x-youtube-client-version': '2.20191008.04.01',
  });

  let [, body] = await miniget.promise(url, reqOptions);
  let info;
  try {
    info = JSON.parse(body).reduce((part, curr) => Object.assign(curr, part), {});
  } catch (err) {
    throw Error(`Error parsing info: ${err.message}`);
  }

  let playErr = util.playError(info, 'ERROR');
  if (playErr) {
    throw playErr;
  }

  if (!info.player) {
    // If the video page doesn't work, maybe because it has mature content.
    // and requires an account logged in to view, try the embed page.
    let embedUrl = `${EMBED_URL + id}?${params}`;
    [, body] = await miniget.promise(embedUrl, options.requestOptions);
    let jsonStr = util.between(body, 't.setConfig({\'PLAYER_CONFIG\': ', '</script>');
    let config;
    if (!jsonStr) {
      throw Error('Could not find player config');
    }
    try {
      config = JSON.parse(util.cutAfterJSON(jsonStr));
    } catch (err) {
      throw Error(`Error parsing config: ${err.message}`);
    }
    playErr = util.playError(info, 'LOGIN_REQUIRED');
    if (!config.args.player_response && !config.args.embedded_player_response && playErr) {
      throw playErr;
    }
    info.player = config;
  }
  return gotConfig(id, options, info, body);
};


/**
 * @param {Object} info
 * @returns {Array.<Object>}
 */
const parseFormats = info => {
  let formats = [];
  if (info.player_response.streamingData) {
    if (info.player_response.streamingData.formats) {
      formats = formats.concat(info.player_response.streamingData.formats);
    }
    if (info.player_response.streamingData.adaptiveFormats) {
      formats = formats.concat(info.player_response.streamingData.adaptiveFormats);
    }
  }
  return formats;
};


/**
 * @param {Object} id
 * @param {Object} options
 * @param {Object} info
 * @param {string} body
 * @returns {Promise<Object>}
 */
const gotConfig = async(id, options, info, body) => {
  const url = urllib.format({
    protocol: 'https',
    host: INFO_HOST,
    pathname: INFO_PATH,
    query: {
      video_id: id,
      eurl: VIDEO_EURL + id,
      ps: 'default',
      gl: 'US',
      hl: options.lang || 'en',
      sts: info.sts,
    },
  });
  let [, morebody] = await miniget.promise(url, options.requestOptions);
  let moreinfo = querystring.parse(morebody);
  const player_response =
    (info.player && info.player.args && info.player.args.player_response) ||
    moreinfo.player_response ||
    info.playerResponse;

  if (moreinfo.status === 'fail') {
    throw Error(`Code ${moreinfo.errorcode}: ${util.stripHTML(moreinfo.reason)}`);
  } else if (typeof player_response === 'object') {
    info.player_response = player_response;
  } else {
    try {
      info.player_response = JSON.parse(player_response);
    } catch (err) {
      throw Error(`Error parsing \`player_response\`: ${err.message}`);
    }
  }

  info.formats = parseFormats(info);

  // Add additional properties to info.
  // TODO: Clean up some of these properties that would be better accessed
  // directly through `videoDetails`.
  let videoDetails = info.player_response.videoDetails;
  Object.assign(info, {
    // Get the author/uploader.
    author: extras.getAuthor(info),

    // Get the day the vid was published.
    published: Date.parse(
      info.player_response.microformat.playerMicroformatRenderer.publishDate),

    // Get description.
    description: videoDetails.shortDescription,

    // Get media info.
    media: extras.getMedia(body),

    // Get related videos.
    related_videos: extras.getRelatedVideos(info),

    // Get likes.
    likes: extras.getLikes(body),

    // Get dislikes.
    dislikes: extras.getDislikes(body),

    video_id: videoDetails.videoId,

    // Give the standard link to the video.
    video_url: VIDEO_URL + videoDetails.videoId,

    title: videoDetails.title,
    length_seconds: videoDetails.lengthSeconds,

    age_restricted: !!(info.player.args && info.player.args.is_embed),
    html5player: info.player && info.player.assets && info.player.assets.js,
  });

  return info;
};


/**
 * Gets info from a video additional formats and deciphered URLs.
 *
 * @param {string} id
 * @param {Object} options
 * @returns {Promise<Object>}
 */
exports.getFullInfo = async(id, options) => {
  let info = await exports.getBasicInfo(id, options);
  const hasManifest =
    info.player_response && info.player_response.streamingData && (
      info.player_response.streamingData.dashManifestUrl ||
      info.player_response.streamingData.hlsManifestUrl
    );
  let funcs = [];
  if (info.formats.length) {
    const html5player = urllib.resolve(VIDEO_URL, info.html5player);
    funcs.push(sig.decipherFormats(info.formats, html5player, options));
  }
  if (hasManifest && info.player_response.streamingData.dashManifestUrl) {
    let url = info.player_response.streamingData.dashManifestUrl;
    funcs.push(getDashManifest(url, options));
  }
  if (hasManifest && info.player_response.streamingData.hlsManifestUrl) {
    let url = info.player_response.streamingData.hlsManifestUrl;
    funcs.push(getM3U8(url, options));
  }

  let results = await Promise.all(funcs);
  info.formats = Object.values(Object.assign({}, ...results));
  info.formats = info.formats.map(util.addFormatMeta);
  info.formats.sort(util.sortFormats);
  info.full = true;
  return info;
};


/**
 * Gets additional DASH formats.
 *
 * @param {string} url
 * @param {Object} options
 * @returns {Promise<Array.<Object>>}
 */
const getDashManifest = (url, options) => new Promise((resolve, reject) => {
  let formats = {};
  const parser = sax.parser(false);
  parser.onerror = reject;
  parser.onopentag = node => {
    if (node.name === 'REPRESENTATION') {
      const itag = parseInt(node.attributes.ID);
      formats[itag] = { itag, url };
    }
  };
  parser.onend = () => { resolve(formats); };
  const req = miniget(urllib.resolve(VIDEO_URL, url), options.requestOptions);
  req.setEncoding('utf8');
  req.on('error', reject);
  req.on('data', chunk => { parser.write(chunk); });
  req.on('end', parser.close.bind(parser));
});


/**
 * Gets additional formats.
 *
 * @param {string} url
 * @param {Object} options
 * @returns {Promise<Array.<Object>>}
 */
const getM3U8 = async(url, options) => {
  url = urllib.resolve(VIDEO_URL, url);
  let [, body] = await miniget.promise(url, options.requestOptions);
  let formats = {};
  body
    .split('\n')
    .filter(line => /https?:\/\//.test(line))
    .forEach(line => {
      const itag = parseInt(line.match(/\/itag\/(\d+)\//)[1]);
      formats[itag] = { itag: itag, url: line };
    });
  return formats;
};


// Cached for getting basic/full info.
exports.cache = new Cache();


// Cache get info functions.
// In case a user wants to get a video's info before downloading.
for (let fnName of ['getBasicInfo', 'getFullInfo']) {
  /**
   * @param {string} link
   * @param {Object} options
   * @param {Function(Error, Object)} callback
   * @returns {Object}
   */
  const fn = exports[fnName];
  exports[fnName] = async(link, options, callback) => {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    } else if (!options) {
      options = {};
    }

    if (callback) {
      return exports[fnName](link, options)
        .then(info => callback(null, info), callback);
    }

    let id = util.getVideoID(link);
    const key = [fnName, id, options.lang].join('-');
    if (exports.cache.get(key)) {
      return exports.cache.get(key);
    } else {
      let info = await fn(id, options);
      exports.cache.set(key, info);
      return info;
    }
  };
}


// Export a few helpers.
exports.validateID = util.validateID;
exports.validateURL = util.validateURL;
exports.getURLVideoID = util.getURLVideoID;
exports.getVideoID = util.getVideoID;
