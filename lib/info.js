var url         = require('url');
var querystring = require('querystring');
var _           = require('underscore');
var JStream     = require('jstream');
var cheerio     = require('cheerio');
var crequest    = require('./crequest');
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
  var optsClone;
  if (typeof opts === 'function') {
    callback = opts;
    optsClone = {};
  } else {
    optsClone = _.clone(opts);
  }
  delete optsClone.downloadURL;
  delete optsClone.debug;

  var id = util.getVideoID(link);
  optsClone.url = VIDEO_URL + id;

  crequest(optsClone, function(err, body) {
    if (err) return callback(err);

    var $ = cheerio.load(body);
    var description = $('#eow-description').text();

    var jsonStr = util.between(body, 'ytplayer.config = ', '</script>');
    if (jsonStr) {
      parseJSON(jsonStr, function(err, config) {
        if (err) return callback(err);
        gotConfig(opts, description, config, callback);
      });
    } else {
      optsClone.url = EMBED_URL + id;
      crequest(optsClone, function(err, body) {
        if (err) return callback(err);

        jsonStr = util.between(body,
          'yt.setConfig(\'PLAYER_CONFIG\', ', '</script>');
        if (!jsonStr) {
          return callback(new Error('could not find `player config`'));
        }
        parseJSON(jsonStr, function(err, config) {
          if (err) return callback(err);

          optsClone.url = url.format({
            protocol: 'https',
            host: INFO_HOST,
            pathname: INFO_PATH,
            query: {
              video_id: id,
              eurl: VIDEO_EURL + id,
              sts: config.sts || '',
            },
          });
          crequest(optsClone, function(err, body) {
            if (err) return callback(err);
            config.args = querystring.parse(body);
            gotConfig(opts, description, config, callback);
          });
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
 * @param {Function(Error, Object)} callback
 */
function parseJSON(body, callback) {
  var jstream = new JStream();
  var ended = false;
  jstream.on('data', function(config) {
    ended = true;
    jstream.pause();
    callback(null, config);
  });

  jstream.on('error', function(err) {
    if (ended) { return; }
    callback(
      new Error('could not parse `ytplayer.config`: ' + err.message));
  });

  jstream.end(body);
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

  if (opts.downloadURL) {
    sig.get(info, config.assets.js, opts.debug, callback);
  } else {
    callback(null, info);
  }
}
