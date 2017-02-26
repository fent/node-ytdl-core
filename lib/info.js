var urllib      = require('url');
var querystring = require('querystring');
var sax         = require('sax');
var request     = require('./request');
var util        = require('./util');
var sig         = require('./sig');
var FORMATS     = require('./formats');


var VIDEO_URL = 'https://www.youtube.com/watch?v=';
var EMBED_URL = 'https://www.youtube.com/embed/';
var VIDEO_EURL = 'https://youtube.googleapis.com/v/';
var INFO_HOST = 'www.youtube.com';
var INFO_PATH = '/get_video_info';
var KEYS_TO_SPLIT = [
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

  var myrequest = options.request || request;
  var id = util.getVideoID(link);

  // Try getting config from the video page first.
  var url = VIDEO_URL + id;
  myrequest(url, options.requestOptions, function(err, body) {
    if (err) return callback(err);

    // Check if this video exists.
    var unavailableMsg = util.between(body, '<div id="player-unavailable"', '>');
    if (!/\bhid\b/.test(util.between(unavailableMsg, 'class="', '"'))) {
      unavailableMsg = util.between(body, '<h1 id="unavailable-message" class="message">', '</h1>').trim();
      // Getting around age restricted videos.
      if (unavailableMsg !== 'Content Warning') {
        return callback(new Error(unavailableMsg));
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
      relatedVideos: util.getRelatedVideos(body),
      // Give the canonical link to the video.
      video_url: url,
    };

    var jsonStr = util.between(body, 'ytplayer.config = ', '</script>');
    if (jsonStr) {
      jsonStr = jsonStr.slice(0, jsonStr.lastIndexOf(';ytplayer.load'));
      var config;
      try {
        config = JSON.parse(jsonStr);
      } catch (err) {
        return callback(new Error('Error parsing config: ' + err.message));
      }
      if (!config) {
        return callback(new Error('Could not parse video page config'));
      }
      gotConfig(id, options, additional, config, callback);

    } else {
      // If the video page doesn't work, maybe because it has mature content.
      // and requires an account logged into view, try the embed page.
      url = EMBED_URL + id;
      myrequest(url, options.requestOptions, function(err, body) {
        if (err) return callback(err);

        config = util.between(body, 't.setConfig({\'PLAYER_CONFIG\': ', '},\'');
        if (!config) {
          return callback(new Error('Could not find `player config`'));
        }
        try {
          config = JSON.parse(config + '}');
        } catch (err) {
          return callback(new Error('Error parsing config: ' + err.message));
        }
        gotConfig(id, options, additional, config, callback);
      });
    }
  });
};


/**
 * @param {Object} id
 * @param {Object} options
 * @param {Object} additional
 * @param {Object} config
 * @param {Function(Error, Object)} callback
 */
function gotConfig(id, options, additional, config, callback) {
  if (config.status === 'fail') {
    return new Error(config.errorcode && config.reason ?
      'Code ' + config.errorcode + ': ' + config.reason : 'Video not found');
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
      hl: 'en',
      sts: config.sts,
    },
  });
  var myrequest = options.request || request;
  myrequest(url, options.requestOptions, function(err, body) {
    if (err) return callback(err);
    var info = querystring.parse(body);
    if (info.status === 'fail') {
      info = config.args;
    } else if (info.requires_purchase === '1') {
      return callback(new Error(info.ypc_video_rental_bar_text));
    }

    // Split some keys by commas.
    KEYS_TO_SPLIT.forEach(function(key) {
      if (!info[key]) return;
      info[key] = info[key]
      .split(',')
      .filter(function(v) { return v !== ''; });
    });

    info.fmt_list = info.fmt_list ?
      info.fmt_list.map(function(format) {
        return format.split('/');
      }) : [];

    info.formats = util.parseFormats(info);

    // Add additional properties to info.
    info = util.objectAssign(info, additional, false);

    if (info.formats.some(function(f) { return !!f.s; }) ||
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
          if (options.debug) {
            info.formats.forEach(function(format) {
              var itag = format.itag;
              if (!FORMATS[itag]) {
                console.warn('No format metadata for itag ' + itag + ' found');
              }
            });
          }
          info.formats.sort(util.sortFormats);
          callback(null, info);
        });
      });
    } else {
      if (!info.formats.length) {
        callback(new Error('Video does not contain any available formats'));
        return;
      }
      sig.decipherFormats(info.formats, null, options.debug);
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
  var myrequest = options.request || request;
  var formats = {};
  var currentFormat = null;
  var expectUrl = false;

  var parser = sax.parser(false);
  parser.onerror = callback;
  parser.onopentag = function(node) {
    if (node.name === 'REPRESENTATION') {
      var itag = node.attributes.ID;
      var meta = FORMATS[itag];
      currentFormat = { itag: itag };
      for (var key in meta) {
        currentFormat[key] = meta[key];
      }
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

  var req = myrequest(urllib.resolve(VIDEO_URL, url), options.requestOptions);
  req.on('error', callback);
  req.on('response', function(res) {
    // Support for Streaming 206 status videos.
    if (res.statusCode !== 200 && res.statusCode !== 206) {
      // Ignore errors on manifest.
      return parser.close();
    }
    res.setEncoding('utf8');
    res.on('error', callback);
    res.on('data', function(chunk) { parser.write(chunk); });
    res.on('end', parser.close.bind(parser));
  });
}


/**
 * Gets additional formats.
 *
 * @param {String} url
 * @param {Object} options
 * @param {Function(!Error, Array.<Object>)} callback
 */
function getM3U8(url, options, callback) {
  var myrequest = options.request || request;
  myrequest(urllib.resolve(VIDEO_URL, url), options.requestOptions, function(err, body) {
    if (err) return callback(err);

    var formats = {};
    body
      .split('\n')
      .filter(function(line) {
        return line.trim().length && line[0] !== '#';
      })
      .forEach(function(line) {
        var itag = line.match(/\/itag\/(\d+)\//)[1];
        if (!itag) {
          if (options.debug) {
            console.warn('No itag found in url ' + line);
          }
          return;
        }
        var meta = FORMATS[itag];
        var format = { itag: itag, url: line };
        for (var key in meta) {
          format[key] = meta[key];
        }
        formats[itag] = format;
      });
    callback(null, formats);
  });
}
