var _        = require('underscore');
var JStream  = require('jstream');
var cheerio  = require('cheerio');
var crequest = require('./crequest');
var util     = require('./util');
var sig      = require('./sig');


var VIDEO_URL = 'http://www.youtube.com/watch?v=';
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
 * @param {Object} requestOptions
 * @param {Function(Error, Object)} callback
 */
module.exports = function getInfo(link, requestOptions, callback) {
  if (typeof requestOptions === 'function') {
    callback = requestOptions;
    requestOptions = {};
  } else {
    requestOptions = _.clone(requestOptions);
  }

  var id = util.getVideoID(link);
  requestOptions.url = VIDEO_URL + id;
  var downloadURL = requestOptions.downloadURL;
  var debug = requestOptions.debug;
  delete requestOptions.downloadURL;
  delete requestOptions.debug;

  crequest(requestOptions, function(err, body) {
    if (err) return callback(err);

    var jsonStr = util.between(body, 'ytplayer.config = ', '</script>');
    if (!jsonStr) {
      return callback(new Error('could not find `ytplayer.config`'));
    }

    var jstream = new JStream();
    var ended = false;
    jstream.on('data', function(config) {
      ended = true;
      jstream.pause();
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

      var $ = cheerio.load(body);
      info.description = $('#eow-description').text();

      if (downloadURL) {
        sig.get(info, config.assets.js, debug, callback);
      } else {
        callback(null, info);
      }
    });

    jstream.on('error', function(err) {
      if (ended) { return; }
      callback(
        new Error('could not parse `ytplayer.config`: ' + err.message));
    });

    jstream.end(jsonStr);
  });
};
