var path = require('path');
var url  = require('url');
var nock = require('nock');

var YT_HOST       = 'https://www.youtube.com';
var VIDEO_PATH    = '/watch?v=';
var MANIFEST_HOST = 'https://manifest.googlevideo.com';
var EMBED_PATH = '/embed/';
var INFO_PATH = '/get_video_info?';


module.exports = function(id, opts) {
  opts = opts || {};
  var scopes = [];
  scopes.push(nock(YT_HOST)
    .get(VIDEO_PATH + id)
    .replyWithFile(200,
      path.resolve(__dirname, 'files/' + id + '/watch.html')));

  if (opts.dashmpd) {
    scopes.push(nock(MANIFEST_HOST)
      .filteringPath(function() { return '/api/manifest/dash/'; })
      .get('/api/manifest/dash/')
      .replyWithFile(200,
        path.resolve(__dirname, 'files/' + id + '/dashmpd.xml')));
  }

  if (opts.player) {
    scopes.push(nock('http://s.ytimg.com')
      .get('/yts/jsbin/html5player-' + opts.player +
        (opts.player.indexOf('new-') > -1 ? '/html5player-new.js' : '.js'))
      .replyWithFile(200,
        path.resolve(__dirname, 'files/html5player/' + opts.player + '.js')));
  }

  if (opts.embed) {
    scopes.push(nock(YT_HOST)
      .get(EMBED_PATH + id)
      .replyWithFile(200,
        path.resolve(__dirname, 'files/' + id + '/embed.html')));
  }

  if (opts.get_video_info) {
    scopes.push(nock(YT_HOST)
      .filteringPath(function(path) {
        var regexp = /\?video_id=([a-zA-Z0-9_-]+)&(.+)$/;
        return path.replace(regexp, function(_, r) {
          return '?video_id=' + r;
        });
      })
      .get(INFO_PATH + 'video_id=' + id)
      .replyWithFile(200,
        path.resolve(__dirname, 'files/' + id + '/get_video_info')));
  }

  return {
    done: function() {
      scopes.forEach(function(scope) {
        scope.done();
      });
    }
  };
};


module.exports.url = function(uri) {
  var parsed = url.parse(uri);
  return nock(parsed.protocol + '//' + parsed.host)
    .get(parsed.path);
};
