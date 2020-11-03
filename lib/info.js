const urllib = require('url');
const querystring = require('querystring');
const sax = require('sax');
const miniget = require('miniget');
const utils = require('./utils');
const formatUtils = require('./format-utils');
const urlUtils = require('./url-utils');
const extras = require('./info-extras');
const sig = require('./sig');
const Cache = require('./cache');


const VIDEO_URL = 'https://www.youtube.com/watch?v=';
const EMBED_URL = 'https://www.youtube.com/embed/';
const VIDEO_EURL = 'https://youtube.googleapis.com/v/';
const INFO_HOST = 'www.youtube.com';
const INFO_PATH = '/get_video_info';


// Cached for storing basic/full info.
exports.cache = new Cache();
exports.cookieCache = new Cache(1000 * 60 * 60 * 24);
exports.watchPageCache = new Cache();


/**
 * Gets info from a video without getting additional formats.
 *
 * @param {string} id
 * @param {Object} options
 * @returns {Promise<Object>}
 */
exports.getBasicInfo = async(id, options) => {
  const retryOptions = Object.assign({}, miniget.Defaults, options.requestOptions);
  let info = await retryFn(getJSONWatchPage, [id, options], retryOptions);
  let player_response =
    (info.player && info.player.args && info.player.args.player_response) ||
    info.player_response || info.playerResponse;
  player_response = parseJSON('watch.json `player_response`', player_response);
  let html5player = info.player && info.player.assets && info.player.assets.js;

  let playErr = utils.playError(player_response, ['ERROR', 'UNPLAYABLE']);
  let privateErr = privateVideoError(player_response);
  if (playErr || privateErr) {
    throw playErr || privateErr;
  }

  let age_restricted = false;
  if (!player_response || (!player_response.streamingData && !isRental(player_response))) {
    // If the video page doesn't work, maybe because it has mature content.
    // and requires an account logged in to view, try the embed page.
    let [embedded_player_response, embedbody] = await retryFn(getEmbedPage, [id, options], retryOptions);
    playErr = utils.playError(player_response, ['LOGIN_REQUIRED']);
    player_response = embedded_player_response;
    html5player = html5player || getHTML5player(embedbody);
    age_restricted = true;
  }

  if (!player_response || (!player_response.streamingData && !isRental(player_response))) {
    player_response = await retryFn(getVideoInfoPage, [id, options, info], retryOptions);
  }

  Object.assign(info, {
    player_response,
    html5player,
    formats: parseFormats(player_response),
    related_videos: extras.getRelatedVideos(info),
  });

  // Add additional properties to info.
  let additional = {
    author: extras.getAuthor(info),
    media: extras.getMedia(info),
    likes: extras.getLikes(info),
    dislikes: extras.getDislikes(info),
    age_restricted,

    // Give the standard link to the video.
    video_url: VIDEO_URL + id,
  };

  info.videoDetails = Object.assign({},
    info.player_response.microformat.playerMicroformatRenderer,
    info.player_response.videoDetails, additional);

  return info;
};


const privateVideoError = player_response => {
  let playability = player_response.playabilityStatus;
  if (playability.status === 'LOGIN_REQUIRED' && playability.messages &&
    playability.messages.filter(m => /This is a private video/.test(m)).length) {
    return Error(playability.reason || (playability.messages && playability.messages[0]));
  } else {
    return null;
  }
};


const isRental = player_response => {
  let playability = player_response.playabilityStatus;
  return playability && playability.status === 'UNPLAYABLE' && /requires payment/.test(playability.reason);
};


const getWatchURL = (id, options) =>
  `${VIDEO_URL + id}&hl=${options.lang || 'en'}&bpctr=${Math.ceil(Date.now() / 1000)}`;
const getWatchPage = (id, options) => {
  const url = getWatchURL(id, options);
  return exports.watchPageCache.getOrSet(url, () => miniget(url, options.requestOptions).text());
};


const getHTML5player = body => {
  let html5playerRes =
    /<script\s+src="([^"]+)"(?:\s+type="text\/javascript")?\s+name="player_ias\/base"\s*>|"jsUrl":"([^"]+)"/
      .exec(body);
  return html5playerRes ? html5playerRes[1] || html5playerRes[2] : null;
};


const getIdentityToken = (id, options, key, throwIfNotFound) =>
  exports.cookieCache.getOrSet(key, async() => {
    let page = await getWatchPage(id, options);
    let match = page.match(/(["'])ID_TOKEN\1[:,]\s?"([^"]+)"/);
    if (!match && throwIfNotFound) {
      throw Error('Cookie header used in request, but unable to find YouTube identity token');
    }
    return match && match[2];
  });


const retryFn = async(fn, args, options) => {
  let currentTry = 0, result;
  while (currentTry <= options.maxRetries) {
    try {
      result = await fn(...args);
      break;
    } catch (err) {
      if (err instanceof miniget.MinigetError || currentTry >= options.maxRetries) {
        throw err;
      }
      let wait = Math.min(++currentTry * options.backoff.inc, options.backoff.max);
      await new Promise(resolve => setTimeout(resolve, wait));
    }
  }
  return result;
};


const jsonClosingChars = /^[)\]}'\s]+/;
const parseJSON = (source, json) => {
  if (!json) {
    return null;
  } else if (typeof json === 'object') {
    return json;
  } else {
    try {
      json = json.replace(jsonClosingChars, '');
      return JSON.parse(json);
    } catch (err) {
      throw Error(`Error parsing ${source}: ${err.message}`);
    }
  }
};


const getWatchJSONURL = (id, options) => `${getWatchURL(id, options)}&pbj=1`;
const getJSONWatchPage = async(id, options) => {
  const reqOptions = Object.assign({ headers: {} }, options.requestOptions);
  let cookie = reqOptions.headers.Cookie || reqOptions.headers.cookie;
  reqOptions.headers = Object.assign({}, {
    'x-youtube-client-name': '1',
    'x-youtube-client-version': '2.20200701.03.01',
    'x-youtube-identity-token': exports.cookieCache.get(cookie || 'browser') || '',
  }, reqOptions.headers);

  const setIdentityToken = async(key, throwIfNotFound) => {
    if (reqOptions.headers['x-youtube-identity-token']) { return; }
    reqOptions.headers['x-youtube-identity-token'] = await getIdentityToken(id, options, key, throwIfNotFound);
  };

  if (cookie) {
    await setIdentityToken(cookie, true);
  }

  const jsonUrl = getWatchJSONURL(id, options);
  let body = await miniget(jsonUrl, reqOptions).text();
  let parsedBody;
  parsedBody = parseJSON('watch.json', body);
  if (parsedBody.reload === 'now') {
    await setIdentityToken('browser', false);
  }
  if (parsedBody.reload === 'now' || !Array.isArray(parsedBody)) {
    throw Error('Unable to retrieve video metadata');
  }
  let info = parsedBody.reduce((part, curr) => Object.assign(curr, part), {});
  return info;
};

const getEmbedURL = (id, options) => `${EMBED_URL + id}?hl=${options.lang || 'en'}`;
const getEmbedPage = async(id, options) => {
  const embedUrl = getEmbedURL(id, options);
  let body = await miniget(embedUrl, options.requestOptions).text();
  let jsonStr = utils.between(body, /(['"])PLAYER_(CONFIG|VARS)\1:\s?/, '</script>');
  let config;
  if (!jsonStr) {
    throw Error('Could not find player config');
  }
  config = parseJSON('embed config', utils.cutAfterJSON(jsonStr));
  let player_response = (config.args && (config.args.player_response || config.args.embedded_player_response)) ||
    config.embedded_player_response;
  return [parseJSON('embed `player_response`', player_response), body];
};


const getVideoInfoPage = async(id, options, info) => {
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
  let morebody = await miniget(url, options.requestOptions).text();
  let moreinfo = querystring.parse(morebody);
  return parseJSON('get_video_info `player_response`', moreinfo.player_response || info.playerResponse);
};


/**
 * @param {Object} player_response
 * @returns {Array.<Object>}
 */
const parseFormats = player_response => {
  let formats = [];
  if (player_response.streamingData) {
    formats = formats
      .concat(player_response.streamingData.formats || [])
      .concat(player_response.streamingData.adaptiveFormats || []);
  }
  return formats;
};


/**
 * Gets info from a video additional formats and deciphered URLs.
 *
 * @param {string} id
 * @param {Object} options
 * @returns {Promise<Object>}
 */
exports.getInfo = async(id, options) => {
  let info = await exports.getBasicInfo(id, options);
  const hasManifest =
    info.player_response && info.player_response.streamingData && (
      info.player_response.streamingData.dashManifestUrl ||
      info.player_response.streamingData.hlsManifestUrl
    );
  let funcs = [];
  if (info.formats.length) {
    info.html5player = info.html5player || getHTML5player(await getWatchPage(id, options));
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
  info.formats = info.formats.map(formatUtils.addFormatMeta);
  info.formats.sort(formatUtils.sortFormats);
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
  let adaptationSet;
  parser.onopentag = node => {
    if (node.name === 'ADAPTATIONSET') {
      adaptationSet = node.attributes;
    } else if (node.name === 'REPRESENTATION') {
      const itag = parseInt(node.attributes.ID);
      if (!isNaN(itag)) {
        formats[url] = Object.assign({
          itag, url,
          bitrate: parseInt(node.attributes.BANDWIDTH),
          mimeType: `${adaptationSet.MIMETYPE}; codecs="${node.attributes.CODECS}"`,
        }, node.attributes.HEIGHT ? {
          width: parseInt(node.attributes.WIDTH),
          height: parseInt(node.attributes.HEIGHT),
          fps: parseInt(node.attributes.FRAMERATE),
        } : {
          audioSampleRate: node.attributes.AUDIOSAMPLINGRATE,
        });
      }
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
  let body = await miniget(url, options.requestOptions).text();
  let formats = {};
  body
    .split('\n')
    .filter(line => /^https?:\/\//.test(line))
    .forEach(line => {
      const itag = parseInt(line.match(/\/itag\/(\d+)\//)[1]);
      formats[line] = { itag, url: line };
    });
  return formats;
};


// Cache get info functions.
// In case a user wants to get a video's info before downloading.
for (let fnName of ['getBasicInfo', 'getInfo']) {
  /**
   * @param {string} link
   * @param {Object} options
   * @returns {Promise<Object>}
   */
  const fn = exports[fnName];
  exports[fnName] = (link, options = {}) => {
    let id = urlUtils.getVideoID(link);
    const key = [fnName, id, options.lang].join('-');
    return exports.cache.getOrSet(key, () => fn(id, options));
  };
}


// Export a few helpers.
exports.validateID = urlUtils.validateID;
exports.validateURL = urlUtils.validateURL;
exports.getURLVideoID = urlUtils.getURLVideoID;
exports.getVideoID = urlUtils.getVideoID;
