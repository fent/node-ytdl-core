const path = require('path');
const url  = require('url');
const nock = require('nock');

const YT_HOST       = 'https://www.youtube.com';
const VIDEO_PATH    = '/watch?v=';
const MANIFEST_HOST = 'https://manifest.googlevideo.com';
const M3U8_HOST     = 'https://manifest.googlevideo.com';
const EMBED_PATH    = '/embed/';
const INFO_PATH     = '/get_video_info?';


before(() => { nock.disableNetConnect(); });
after(() => { nock.enableNetConnect(); });

exports = module.exports = (id, opts) => {
  opts = opts || {};
  var scopes = [];
  var dirpath = `files/videos/${id}${(opts.type ? '-' + opts.type : '')}`;
  var watchType = opts.watch ? '-' + opts.watch : '';

  scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
    .get(VIDEO_PATH + id + '&hl=en')
    .replyWithFile(opts.statusCode || 200,
      path.resolve(__dirname, `${dirpath}/watch${watchType}.html`)));

  if (opts.dashmpd) {
    var dashmpdfile = Array.isArray(opts.dashmpd) && opts.dashmpd[2] ?
      '-' + opts.dashmpd[2] : '';
    scopes.push(nock(MANIFEST_HOST, { reqheaders: opts.headers })
      .filteringPath(() => '/api/manifest/dash/')
      .get('/api/manifest/dash/')
      .replyWithFile(opts.dashmpd[1] || 200,
        path.resolve(__dirname, `${dirpath}/dashmpd${dashmpdfile}.xml`)));
  }

  if (opts.dashmpd2) {
    var dashmpd2file = Array.isArray(opts.dashmpd2) && opts.dashmpd2[2] ?
      '-' + opts.dashmpd2[2] : '';
    scopes.push(nock(MANIFEST_HOST, { reqheaders: opts.headers })
      .filteringPath(() => '/api/manifest/dash/')
      .get('/api/manifest/dash/')
      .replyWithFile(opts.dashmpd2[1] || 200,
        path.resolve(__dirname, `${dirpath}/dashmpd2${dashmpd2file}.xml`)));
  }

  if (opts.m3u8) {
    var m3u8file = Array.isArray(opts.m3u8) && opts.m3u8[2] ?
      '-' + opts.m3u8[2] : '';
    scopes.push(nock(M3U8_HOST, { reqheaders: opts.headers  })
      .filteringPath(() => '/api/manifest/hls_variant/')
      .get('/api/manifest/hls_variant/')
      .replyWithFile(opts.m3u8[1] || 200,
        path.resolve(__dirname, `${dirpath}/playlist${m3u8file}.m3u8`)));
  }

  if (opts.player) {
    var playerfile = Array.isArray(opts.player) && opts.player[2] ?
      opts.player[2] : opts.player;
    scopes.push(nock('https://www.youtube.com', { reqheaders: opts.headers })
      .filteringPath(/\/yts\/jsbin\/player.+$/g, '/yts/jsbin/player')
      .get('/yts/jsbin/player')
      .replyWithFile(opts.player[1] || 200,
        path.resolve(__dirname, `${dirpath}/${playerfile}.js`)));
  }

  if (opts.embed) {
    var embedfile = Array.isArray(opts.embed) && opts.embed[2] ?
      '-' + opts.embed[2] : '';
    scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
      .get(EMBED_PATH + id + '?hl=en')
      .replyWithFile(opts.embed[1] || 200,
        path.resolve(__dirname,
          `${dirpath}/embed${embedfile}.html`)));
  }

  if (opts.get_video_info) {
    var infofile = Array.isArray(opts.get_video_info) && opts.get_video_info[2] ?
      '-' + opts.get_video_info[2] : '';
    scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
      .filteringPath((path) => {
        var regexp = /\?video_id=([a-zA-Z0-9_-]+)&(.+)$/;
        return path.replace(regexp, (_, r) => '?video_id=' + r);
      })
      .get(INFO_PATH + 'video_id=' + id)
      .replyWithFile(opts.get_video_info[1] || 200,
        path.resolve(__dirname, `${dirpath}/get_video_info${infofile}`)));
  }

  return {
    done: () => {
      scopes.forEach((scope) => {
        scope.done();
      });
    },
    urlReply: (uri, statusCode, body, headers) => {
      scopes.push(exports.url(uri).reply(statusCode, body, headers));
    },
    urlReplyWithFile: (uri, statusCode, file, headers) => {
      scopes.push(exports.url(uri).replyWithFile(statusCode, file, headers));
    },
  };
};

exports.filteringPath = (uri, filter1, filter2) => {
  var parsed = url.parse(uri);
  return nock(parsed.protocol + '//' + parsed.host)
    .filteringPath(filter1, filter2)
    .get(parsed.path);
};

exports.url = (uri) => {
  var parsed = url.parse(uri);
  return nock(parsed.protocol + '//' + parsed.host).get(parsed.path);
};

exports.cleanAll = nock.cleanAll;
