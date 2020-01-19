const urllib      = require('url');
const querystring = require('querystring');
const sax         = require('sax');
const request     = require('miniget');
const util        = require('./util');
const extras      = require('./info-extras');
const sig         = require('./sig');
const Cache       = require('./cache');


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
 * @param {Function(Error, Object)} callback
 */
exports.getBasicInfo = (id, options, callback) => {
  // Try getting config from the video page first.
  const params = 'hl=' + (options.lang || 'en');
  let url = VIDEO_URL + id + '&' + params +
    '&bpctr=' + Math.ceil(Date.now() / 1000);

  // Remove header from watch page request.
  // Otherwise, it'll use a different framework for rendering content.
  const reqOptions = Object.assign({}, options.requestOptions);
  reqOptions.headers = Object.assign({}, reqOptions.headers, {
    'User-Agent': '',
  });

  request(url, reqOptions, (err, res, body) => {
    if (err) return callback(err);

    // Check if there are any errors with this video page.
    const unavailableMsg = util.between(body, '<div id="player-unavailable"', '>');
    if (unavailableMsg &&
        !/\bhid\b/.test(util.between(unavailableMsg, 'class="', '"'))) {
      // Ignore error about age restriction.
      if (!body.includes('<div id="watch7-player-age-gate-content"')) {
        return callback(Error(util.between(body,
          '<h1 id="unavailable-message" class="message">', '</h1>').trim()));
      }
    }

    // Parse out additional metadata from this page.
    const additional = {
      // Get the author/uploader.
      author: extras.getAuthor(body),

      // Get the day the vid was published.
      published: extras.getPublished(body),

      // Get description.
      description: extras.getVideoDescription(body),

      // Get media info.
      media: extras.getVideoMedia(body),

      // Get related videos.
      related_videos: extras.getRelatedVideos(body),
    };

    const jsonStr = util.between(body, 'ytplayer.config = ', '</script>');
    let config;
    if (jsonStr) {
      config = jsonStr.slice(0, jsonStr.lastIndexOf(';ytplayer.load'));
      gotConfig(id, options, additional, config, false, callback);

    } else {
      // If the video page doesn't work, maybe because it has mature content.
      // and requires an account logged in to view, try the embed page.
      url = EMBED_URL + id + '?' + params;
      request(url, options.requestOptions, (err, res, body) => {
        if (err) return callback(err);
        config = util.between(body, 't.setConfig({\'PLAYER_CONFIG\': ', /\}(,'|\}\);)/);
        gotConfig(id, options, additional, config, true, callback);
      });
    }
  });
};


/**
 * @param {Object} info
 * @return {Array.<Object>}
 */
const parseFormats = (info) => {
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
 * @param {Object} additional
 * @param {Object} config
 * @param {boolean} fromEmbed
 * @param {Function(Error, Object)} callback
 */
const gotConfig = (id, options, additional, config, fromEmbed, callback) => {
  if (!config) {
    return callback(Error('Could not find player config'));
  }
  try {
    config = JSON.parse(config + (fromEmbed ? '}' : ''));
  } catch (err) {
    return callback(Error('Error parsing config: ' + err.message));
  }
  const url = urllib.format({
    protocol: 'https',
    host: INFO_HOST,
    pathname: INFO_PATH,
    query: {
      video_id: id,
      eurl: VIDEO_EURL + id,
      ps: 'default',
      gl: 'US',
      hl: (options.lang || 'en'),
      sts: config.sts,
    },
  });
  request(url, options.requestOptions, (err, res, body) => {
    if (err) return callback(err);
    let info = querystring.parse(body);
    const player_response = config.args.player_response || info.player_response;

    if (info.status === 'fail') {
      return callback(
        Error(`Code ${info.errorcode}: ${util.stripHTML(info.reason)}`));
    } else try {
      info.player_response = JSON.parse(player_response);
    } catch (err) {
      return callback(
        Error('Error parsing `player_response`: ' + err.message));
    }

    let playability = info.player_response.playabilityStatus;
    if (playability && playability.status === 'UNPLAYABLE') {
      return callback(Error(util.stripHTML(playability.reason)));
    }

    info.formats = parseFormats(info);

    // Add additional properties to info.
    Object.assign(info, additional, {
      video_id: id,

      // Give the standard link to the video.
      video_url: VIDEO_URL + id,

      // Copy over a few props from `player_response.videoDetails`
      // for backwards compatibility.
      title: info.player_response.videoDetails && info.player_response.videoDetails.title,
      length_seconds: info.player_response.videoDetails && info.player_response.videoDetails.lengthSeconds,
    });

    info.age_restricted = fromEmbed;
    info.html5player = config.assets.js;

    callback(null, info);
  });
};


/**
 * Gets info from a video additional formats and deciphered URLs.
 *
 * @param {string} id
 * @param {Object} options
 * @param {Function(Error, Object)} callback
 */
exports.getFullInfo = (id, options, callback) => {
  return exports.getBasicInfo(id, options, (err, info) => {
    if (err) return callback(err);
    const hasManifest =
      info.player_response && info.player_response.streamingData && (
        info.player_response.streamingData.dashManifestUrl ||
        info.player_response.streamingData.hlsManifestUrl
      );
    if (info.formats.length || hasManifest) {
      const html5playerfile = urllib.resolve(VIDEO_URL, info.html5player);
      sig.getTokens(html5playerfile, options, (err, tokens) => {
        if (err) return callback(err);

        sig.decipherFormats(info.formats, tokens, options.debug);
        let funcs = [];
        if (hasManifest && info.player_response.streamingData.dashManifestUrl) {
          let url = info.player_response.streamingData.dashManifestUrl;
          funcs.push(getDashManifest.bind(null, url, options));
        }
        if (hasManifest && info.player_response.streamingData.hlsManifestUrl) {
          let url = info.player_response.streamingData.hlsManifestUrl;
          funcs.push(getM3U8.bind(null, url, options));
        }

        util.parallel(funcs, (err, results) => {
          if (err) return callback(err);
          if (results[0]) { mergeFormats(info, results[0]); }
          if (results[1]) { mergeFormats(info, results[1]); }

          info.formats = info.formats.map(util.addFormatMeta);
          info.formats.sort(util.sortFormats);
          info.full = true;
          callback(null, info);
        });
      });
    } else {
      callback(Error('This video is unavailable'));
    }
  });
};


/**
 * Merges formats from DASH or M3U8 with formats from video info page.
 *
 * @param {Object} info
 * @param {Object} formatsMap
 */
const mergeFormats = (info, formatsMap) => {
  info.formats.forEach((f) => {
    formatsMap[f.itag] = formatsMap[f.itag] || f;
  });
  info.formats = Object.values(formatsMap);
};


/**
 * Gets additional DASH formats.
 *
 * @param {string} url
 * @param {Object} options
 * @param {Function(!Error, Array.<Object>)} callback
 */
const getDashManifest = (url, options, callback) => {
  let formats = {};

  const parser = sax.parser(false);
  parser.onerror = callback;
  parser.onopentag = (node) => {
    if (node.name === 'REPRESENTATION') {
      const itag = node.attributes.ID;
      formats[itag] = { itag, url };
    }
  };
  parser.onend = () => { callback(null, formats); };

  const req = request(urllib.resolve(VIDEO_URL, url), options.requestOptions);
  req.setEncoding('utf8');
  req.on('error', callback);
  req.on('data', (chunk) => { parser.write(chunk); });
  req.on('end', parser.close.bind(parser));
};


/**
 * Gets additional formats.
 *
 * @param {string} url
 * @param {Object} options
 * @param {Function(!Error, Array.<Object>)} callback
 */
const getM3U8 = (url, options, callback) => {
  url = urllib.resolve(VIDEO_URL, url);
  request(url, options.requestOptions, (err, res, body) => {
    if (err) return callback(err);

    let formats = {};
    body
      .split('\n')
      .filter((line) => /https?:\/\//.test(line))
      .forEach((line) => {
        const itag = line.match(/\/itag\/(\d+)\//)[1];
        formats[itag] = { itag: itag, url: line };
      });
    callback(null, formats);
  });
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
   */
  const fn = exports[fnName];
  exports[fnName] = (link, options, callback) => {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    } else if (!options) {
      options = {};
    }

    if (!callback) {
      return new Promise((resolve, reject) => {
        exports[fnName](link, options, (err, info) => {
          if (err) return reject(err);
          resolve(info);
        });
      });
    }

    const id = util.getVideoID(link);
    if (id instanceof Error) return callback(id);

    const key = [fnName, id, options.lang].join('-');
    if (exports.cache.get(key)) {
      process.nextTick(() => callback(null, exports.cache.get(key)));
    } else {
      fn(id, options, (err, info) => {
        if (err) return callback(err);
        exports.cache.set(key, info);
        callback(null, info);
      });
    }
  };
}


// Export a few helpers.
exports.validateID = util.validateID;
exports.validateURL = util.validateURL;
exports.getURLVideoID = util.getURLVideoID;
exports.getVideoID = util.getVideoID;
