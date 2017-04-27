const path = require('path');
const url  = require('url');
const nock = require('nock');

const YT_HOST       = 'https://www.youtube.com';
const VIDEO_PATH    = '/watch?v=';
const MANIFEST_HOST = 'https://manifest.googlevideo.com';
const M3U8_HOST     = 'https://manifest.googlevideo.com';
const EMBED_PATH    = '/embed/';
const INFO_PATH     = '/get_video_info?';


before(function() { nock.disableNetConnect(); });
after(function() { nock.enableNetConnect(); });

exports = module.exports = function(id, opts) {
  opts = opts || {};
  var scopes = [];
  var dirpath = 'files/videos/' + id + (opts.type ? '-' + opts.type : '');
  var watchType = opts.watch ? '-' + opts.watch : '';

  scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
    .get(VIDEO_PATH + id)
    .replyWithFile(opts.statusCode || 200,
      path.resolve(__dirname, dirpath + '/watch' + watchType + '.html')));

  if (opts.dashmpd) {
    scopes.push(nock(MANIFEST_HOST, { reqheaders: opts.headers })
      .filteringPath(function() { return '/api/manifest/dash/'; })
      .get('/api/manifest/dash/')
      .replyWithFile(opts.dashmpd[1] || 200,
        path.resolve(__dirname,
        dirpath + '/dashmpd' + (opts.dashmpd[2] || '') + '.xml')));
  }

  if (opts.dashmpd2) {
    scopes.push(nock(MANIFEST_HOST, { reqheaders: opts.headers })
      .filteringPath(function() { return '/api/manifest/dash/'; })
      .get('/api/manifest/dash/')
      .replyWithFile(opts.dashmpd2[1] || 200,
        path.resolve(__dirname,
        dirpath + '/dashmpd2' + (opts.dashmpd2[2] || '') + '.xml')));
  }

  if (opts.m3u8) {
    scopes.push(nock(M3U8_HOST, { reqheaders: opts.headers  })
      .filteringPath(function() { return '/api/manifest/hls_variant/'; })
      .get('/api/manifest/hls_variant/')
      .replyWithFile(opts.m3u8[1] || 200,
        path.resolve(__dirname,
        dirpath + '/playlist' + (opts.m3u8[2] || '') + '.m3u8')));
  }

  if (opts.player) {
    scopes.push(nock('https://www.youtube.com', { reqheaders: opts.headers })
      .filteringPath(/\/yts\/jsbin\/player.+$/g, '/yts/jsbin/player')
      .get('/yts/jsbin/player')
      .replyWithFile(opts.player[1] || 200,
        path.resolve(__dirname, dirpath + '/' + opts.player + '.js')));
  }

  if (opts.embed) {
    scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
      .get(EMBED_PATH + id)
      .replyWithFile(opts.embed[1] || 200,
        path.resolve(__dirname,
        dirpath + '/embed' + (opts.embed[2] || '') + '.html')));
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
      .replyWithFile(opts.get_video_info[1] || 200,
        path.resolve(__dirname,
        dirpath + '/get_video_info' + (opts.get_video_info[2] || ''))));
  }

  return {
    done: function() {
      scopes.forEach(function(scope) {
        scope.done();
      });
    },
    urlReply: function(uri, statusCode, body, headers) {
      scopes.push(exports.url(uri).reply(statusCode, body, headers));
    },
    urlReplyWithFile: function(uri, statusCode, file, headers) {
      scopes.push(exports.url(uri).replyWithFile(statusCode, file, headers));
    },
    urlReplyFn: function(uri, fn) {
      scopes.push(exports.url(uri).reply(fn));
    },
  };
};


exports.url = function(uri) {
  var parsed = url.parse(uri);
  return nock(parsed.protocol + '//' + parsed.host).get(parsed.path);
};

exports.cleanAll = nock.cleanAll;
