const urllib      = require('url');
const querystring = require('querystring');
const sax         = require('sax');
const request     = require('miniget');
const util        = require('./util');
const sig         = require('./sig');
const FORMATS     = require('./formats');


const VIDEO_URL = 'https://www.youtube.com/watch?v=';
const EMBED_URL = 'https://www.youtube.com/embed/';
const VIDEO_EURL = 'https://youtube.googleapis.com/v/';
const INFO_HOST = 'www.youtube.com';
const INFO_PATH = '/get_video_info';
const KEYS_TO_SPLIT = [
  'keywords',
  'fmt_list',
  'fexp',
  'watermark'
];


/**
 * Gets info from a video.
 *
 * @param {String} link
 * @param {Object} options
 * @param {Function(Error, Object)} callback
 */
module.exports = function getInfo(link, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  } else if (!options) {
    options = {};
  }
  if (!callback) {
    return new Promise(function(resolve, reject) {
      getInfo(link, options, function(err, info) {
        if (err) return reject(err);
        resolve(info);
      });
    });
  }

  var id = util.getVideoID(link);
  if (id instanceof Error) return callback(id);

  // Try getting config from the video page first.
  var url = VIDEO_URL + id + '&hl=' + (options.lang || 'en');
  
  request(url, options.requestOptions, function(err, res, body) {
    if (err) return callback(err);

    // Check if there are any errors with this video page.
    var unavailableMsg = util.between(body, '<div id="player-unavailable"', '>');
    if (unavailableMsg && !/\bhid\b/.test(util.between(unavailableMsg, 'class="', '"'))) {
      // Ignore error about age restriction.
      if (body.indexOf('<div id="watch7-player-age-gate-content"') < 0) {
        return callback(new Error(util.between(body,
          '<h1 id="unavailable-message" class="message">', '</h1>').trim()));
      }
    }

    // Parse out some additional informations since we already load that page.
    var additional = {
      // Get informations about the author/uploader.
      author: util.getAuthor(body),

      // Get the day the vid was published.
      published: util.getPublished(body),

      // Get description from #eow-description.
      description: util.getVideoDescription(body),

      // Get related videos.
      related_videos: util.getRelatedVideos(body),

      // Give the canonical link to the video.
      video_url: url,
    };

    var jsonStr = util.between(body, 'ytplayer.config = ', '</script>');
    var config;
    if (jsonStr) {
      config = jsonStr.slice(0, jsonStr.lastIndexOf(';ytplayer.load'));
      gotConfig(id, options, additional, config, false, callback);

    } else {
      // If the video page doesn't work, maybe because it has mature content.
      // and requires an account logged into view, try the embed page.
      url = EMBED_URL + id + '?hl=' + (options.lang || 'en');
      
      request(url, options.requestOptions, function(err, res, body) {
        if (err) return callback(err);
        config = util.between(body, 't.setConfig({\'PLAYER_CONFIG\': ', '},\'');
        gotConfig(id, options, additional, config, true, callback);
      });
    }
  });
};


/**
 * @param {Object} id
 * @param {Object} options
 * @param {Object} additional
 * @param {Object} config
 * @param {Boolean} appendConfig
 * @param {Function(Error, Object)} callback
 */
function gotConfig(id, options, additional, config, appendConfig, callback) {
  if (!config) {
    return callback(new Error('Could not find player config'));
  }
  try {
    config = JSON.parse(config + (appendConfig ? '}' : ''));
  } catch (err) {
    return callback(new Error('Error parsing config: ' + err.message));
  }
  var url = urllib.format({
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
      el: 'info',
    },
  });
  request(url, options.requestOptions, function(err, res, body) {
    if (err) return callback(err);
    var info = querystring.parse(body);
    if (info.requires_purchase === '1') {
      return callback(new Error('Video requires purchase'));
    } 

    // Split some keys by commas.
    KEYS_TO_SPLIT.forEach(function(key) {
      if (!info[key]) return;
      info[key] = info[key]
        .split(',')
        .filter(function(v) { return v !== ''; });
    });

    if (config.args.player_response) {
      try {
        info.player_response = JSON.parse(config.args.player_response);
      } catch (err) {
        return callback(
          new Error('Error parsing `player_response`: ' + err.message));
      }
    }

    info.fmt_list = info.fmt_list ?
      info.fmt_list.map(function(format) {
        return format.split('/');
      }) : [];

    info.formats = util.parseFormats(info);

    // Add additional properties to info.
    info = util.objectAssign(info, additional, false);

    if (info.formats.length ||
        config.args.dashmpd || info.dashmpd || info.hlsvp) {
      var html5playerfile = urllib.resolve(VIDEO_URL, config.assets.js);
      sig.getTokens(html5playerfile, options, function(err, tokens) {
        if (err) return callback(err);

        sig.decipherFormats(info.formats, tokens, options.debug);

        var funcs = [];
        var dashmpd;

        if (config.args.dashmpd) {
          dashmpd = decipherURL(config.args.dashmpd, tokens);
          funcs.push(getDashManifest.bind(null, dashmpd, options));
        }

        if (info.dashmpd && info.dashmpd !== config.args.dashmpd) {
          dashmpd = decipherURL(info.dashmpd, tokens);
          funcs.push(getDashManifest.bind(null, dashmpd, options));
        }

        if (info.hlsvp) {
          info.hlsvp = decipherURL(info.hlsvp, tokens);
          funcs.push(getM3U8.bind(null, info.hlsvp, options));
        }

        util.parallel(funcs, function(err, results) {
          if (err) return callback(err);
          if (results[0]) { mergeFormats(info, results[0]); }
          if (results[1]) { mergeFormats(info, results[1]); }
          if (results[2]) { mergeFormats(info, results[2]); }
          if (!info.formats.length) {
            callback(new Error('No formats found'));
            return;
          }
          gotFormats();
        });
      });
    } else {
      callback(new Error('This video is unavailable'));
    }

    function gotFormats() {
      if (options.debug) {
        info.formats.forEach(function(format) {
          var itag = format.itag;
          if (!FORMATS[itag]) {
            console.warn('No format metadata for itag ' + itag + ' found');
          }
        });
      }
      info.formats.forEach(util.addFormatMeta);
      info.formats.sort(util.sortFormats);
      callback(null, info);
    }
  });
}


/**
 * @param {String} url
 * @param {Array.<String>} tokens
 */
function decipherURL(url, tokens) {
  return url.replace(/\/s\/([a-fA-F0-9\.]+)/, function(_, s) {
    return '/signature/' + sig.decipher(tokens, s);
  });
}


/**
 * Merges formats from DASH or M3U8 with formats from video info page.
 *
 * @param {Object} info
 * @param {Object} formatsMap
 */
function mergeFormats(info, formatsMap) {
  info.formats.forEach(function(f) {
    var cf = formatsMap[f.itag];
    if (cf) {
      for (var key in f) { cf[key] = f[key]; }
    } else {
      formatsMap[f.itag] = f;
    }
  });
  info.formats = [];
  for (var itag in formatsMap) { info.formats.push(formatsMap[itag]); }
}


/**
 * Gets additional DASH formats.
 *
 * @param {String} url
 * @param {Object} options
 * @param {Function(!Error, Array.<Object>)} callback
 */
function getDashManifest(url, options, callback) {
  var formats = {};
  var currentFormat = null;
  var expectUrl = false;

  var parser = sax.parser(false);
  parser.onerror = callback;
  parser.onopentag = function(node) {
    if (node.name === 'REPRESENTATION') {
      var itag = node.attributes.ID;
      currentFormat = { itag: itag };
      formats[itag] = currentFormat;
    }
    expectUrl = node.name === 'BASEURL';
  };
  parser.ontext = function(text) {
    if (expectUrl) {
      currentFormat.url = text;
    }
  };
  parser.onend = function() { callback(null, formats); };

  var req = request(urllib.resolve(VIDEO_URL, url), options.requestOptions);
  req.setEncoding('utf8');
  req.on('error', callback);
  req.on('data', function(chunk) { parser.write(chunk); });
  req.on('end', parser.close.bind(parser));
}


/**
 * Gets additional formats.
 *
 * @param {String} url
 * @param {Object} options
 * @param {Function(!Error, Array.<Object>)} callback
 */
function getM3U8(url, options, callback) {
  url = urllib.resolve(VIDEO_URL, url);
  request(url, options.requestOptions, function(err, res, body) {
    if (err) return callback(err);

    var formats = {};
    body
      .split('\n')
      .filter(function(line) {
        return /https?:\/\//.test(line);
      })
      .forEach(function(line) {
        var itag = line.match(/\/itag\/(\d+)\//)[1];
        formats[itag] = { itag: itag, url: line };
      });
    callback(null, formats);
  });
}
