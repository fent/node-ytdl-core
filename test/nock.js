var path = require('path');
var url  = require('url');
var nock = require('nock');

var YT_HOST       = 'https://www.youtube.com';
var VIDEO_PATH    = '/watch?v=';
var MANIFEST_HOST = 'https://manifest.googlevideo.com';
var EMBED_PATH    = '/embed/';
var INFO_PATH     = '/get_video_info?';


module.exports = function(id, opts) {
  opts = opts || {};
  var scopes = [];
  scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
    .get(VIDEO_PATH + id)
    .replyWithFile(200,
      path.resolve(__dirname, 'files/' + id + '/watch.html')));

  if (opts.dashmpd) {
    scopes.push(nock(MANIFEST_HOST, { reqheaders: opts.headers })
      .filteringPath(function() { return '/api/manifest/dash/'; })
      .get('/api/manifest/dash/')
      .replyWithFile(200,
        path.resolve(__dirname, 'files/' + id + '/dashmpd.xml')));
  }

  if (opts.dashmpd2) {
    scopes.push(nock(MANIFEST_HOST, { reqheaders: opts.headers })
      .filteringPath(function() { return '/api/manifest/dash/'; })
      .get('/api/manifest/dash/')
      .replyWithFile(opts.dashmpd2[1] || 200,
        path.resolve(__dirname, 'files/' + id + '/dashmpd2.xml')));
  }

  if (opts.player) {
    scopes.push(nock('http://s.ytimg.com', { reqheaders: opts.headers })
      .get('/yts/jsbin/' + opts.player + '/' +
        (opts.player.indexOf('new-') > -1 ? 'html5player-new.js' : 'base.js'))
      .replyWithFile(200,
        path.resolve(__dirname, 'files/' + id + '/' + opts.player + '.js')));
  }

  if (opts.embed) {
    scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
      .get(EMBED_PATH + id)
      .replyWithFile(200,
        path.resolve(__dirname, 'files/' + id + '/embed.html')));
  }

  if (opts.get_video_info) {
    scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
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
    },
    urlReply: function(uri, statusCode, body, headers) {
      scopes.push(module.exports.url(uri).reply(statusCode, body, headers));
    },
    urlReplyWithFile: function(uri, statusCode, file) {
      scopes.push(module.exports.url(uri).replyWithFile(statusCode, file));
    },
  };
};


module.exports.url = function(uri) {
  var parsed = url.parse(uri);
  return nock(parsed.protocol + '//' + parsed.host).get(parsed.path);
};


module.exports.disableNetConnect = nock.disableNetConnect;
module.exports.enableNetConnect = nock.enableNetConnect;
