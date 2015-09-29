var format      = require('url').format;
var querystring = require('querystring');
var JStream     = require('jstream');
var request     = require('./request');
var util        = require('./util');
var sig         = require('./sig');


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
 * @param {Object} opts
 * @param {Function(Error, Object)} callback
 */
module.exports = function getInfo(link, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  } else if (!opts) {
    opts = {};
  }

  var id = util.getVideoID(link);
  var url = VIDEO_URL + id;
  request(url, function(err, body) {
    if (err) return callback(err);

    // get description from #eow-description
    var description = util.getVideoDescription(body);

    var jsonStr = util.between(body, 'ytplayer.config = ', '</script>');
    if (jsonStr) {
      var config = parseJSON(jsonStr);
      if (!config) {
        return callback(new Error('could not parse video page config'));
      }
      gotConfig(opts, description, config, callback);
    } else {
      url = EMBED_URL + id;
      request(url, function(err, body) {
        if (err) return callback(err);

        jsonStr = util.between(body,
          'yt.setConfig(\'PLAYER_CONFIG\', ', '</script>');
        if (!jsonStr) {
          return callback(new Error('could not find `player config`'));
        }

        var config = parseJSON(jsonStr);
        if (!config) {
          return callback(new Error('could not parse embed page config'));
        }

        url = format({
          protocol: 'https',
          host: INFO_HOST,
          pathname: INFO_PATH,
          query: {
            video_id: id,
            eurl: VIDEO_EURL + id,
            sts: config.sts || '',
          },
        });
        request(url, function(err, body) {
          if (err) return callback(err);
          config.args = querystring.parse(body);
          gotConfig(opts, description, config, callback);
        });
      });
    }
  });
};


/**
 * JStream is used because we know when the JSON string begins,
 * but not when it ends. So a string that contains it, and that may
 * contain a bunch of other things, is read until the first object
 * is completely parsed.
 *
 * @param {String} body
 * @return {Object}
 */
function parseJSON(body) {
  var jstream = new JStream();
  var config = null;

  jstream.on('data', function(data) {
    config = data;
    jstream.pause();
  });

  // Suppress errors. If there is one, `config` won't be defined,
  // which is already checked.
  jstream.on('error', function() {});

  jstream.end(body);
  return config;
}


/**
 * @param {Object} opts
 * @param {String} description
 * @param {Object} config
 * @param {Function(Error, Object)} callback
 */
function gotConfig(opts, description, config, callback) {
  var info = config.args;

  if (info.status === 'fail') {
    callback(new Error('Error ' + info.errorcode + ': ' + info.reason));
    return;
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

  if (info.video_verticals) {
    info.video_verticals = info.video_verticals
    .slice(1, -1)
    .split(', ')
    .filter(function(val) { return val !== ''; })
    .map(function(val) { return parseInt(val, 10); })
    ;
  }

  info.formats = util.parseFormats(info);
  info.description = description;

  if (info.dashmpd) {
    sig.getTokens(config.assets.js, opts.debug, function(err, tokens) {
      if (err) return callback(err);

      info.dashmpd = info.dashmpd
        .replace(/\/s\/([a-fA-F0-9\.]+)/, function(_, s) {
          return '/s/' + sig.decipher(tokens, s);
        });
      request(info.dashmpd, function(err, data) {
        console.log(err);
        console.log(data);
      });
    });
  }

  if (opts.downloadURL) {
    sig.get(info, config.assets.js, opts.debug, callback);
  } else {
    callback(null, info);
  }
}
