const ytdl   = require('..');
const path  = require('path');
const url   = require('url');
const nock  = require('nock');

const YT_HOST       = 'https://www.youtube.com';
const VIDEO_PATH    = '/watch?v=';
const MANIFEST_HOST = 'https://manifest.googlevideo.com';
const M3U8_HOST     = 'https://manifest.googlevideo.com';
const EMBED_PATH    = '/embed/';
const INFO_PATH     = '/get_video_info?';


before(() => { nock.disableNetConnect(); });
after(() => { nock.enableNetConnect(); });
afterEach(() => { nock.cleanAll(); });

beforeEach(() => {
  ytdl.cache.sig.clear();
  ytdl.cache.info.clear();
});


exports = module.exports = (id, opts) => {
  opts = opts || {};
  let scopes = [];
  let dirpath = `files/videos/${id}${(opts.type ? '-' + opts.type : '')}`;
  let watchType = opts.watch ? '-' + opts.watch : '';

  scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
    .get(VIDEO_PATH + id + '&hl=en&bpctr=' + Math.ceil(Date.now() / 1000))
    .replyWithFile(opts.statusCode || 200,
      path.resolve(__dirname, `${dirpath}/watch${watchType}.html`)));

  if (opts.dashmpd) {
    let file = Array.isArray(opts.dashmpd) && opts.dashmpd[2] ?
      '-' + opts.dashmpd[2] : '';
    scopes.push(nock(MANIFEST_HOST, { reqheaders: opts.headers })
      .filteringPath(() => '/api/manifest/dash/')
      .get('/api/manifest/dash/')
      .replyWithFile(opts.dashmpd[1] || 200,
        path.resolve(__dirname, `${dirpath}/dashmpd${file}.xml`)));
  }

  if (opts.dashmpd2) {
    let file = Array.isArray(opts.dashmpd2) && opts.dashmpd2[2] ?
      '-' + opts.dashmpd2[2] : '';
    scopes.push(nock(MANIFEST_HOST, { reqheaders: opts.headers })
      .filteringPath(() => '/api/manifest/dash/')
      .get('/api/manifest/dash/')
      .replyWithFile(opts.dashmpd2[1] || 200,
        path.resolve(__dirname, `${dirpath}/dashmpd2${file}.xml`)));
  }

  if (opts.m3u8) {
    let file = Array.isArray(opts.m3u8) && opts.m3u8[2] ?
      '-' + opts.m3u8[2] : '';
    scopes.push(nock(M3U8_HOST, { reqheaders: opts.headers  })
      .filteringPath(() => '/api/manifest/hls_variant/')
      .get('/api/manifest/hls_variant/')
      .replyWithFile(opts.m3u8[1] || 200,
        path.resolve(__dirname, `${dirpath}/playlist${file}.m3u8`)));
  }

  if (opts.player) {
    let file = Array.isArray(opts.player) && opts.player[2] ?
      opts.player[2] : opts.player;
    scopes.push(nock('https://www.youtube.com', { reqheaders: opts.headers })
      .filteringPath(/\/yts\/jsbin\/player.+$/g, '/yts/jsbin/player')
      .get('/yts/jsbin/player')
      .replyWithFile(opts.player[1] || 200,
        path.resolve(__dirname, `${dirpath}/${file}.js`)));
  }

  if (opts.embed) {
    let file = Array.isArray(opts.embed) && opts.embed[2] ?
      '-' + opts.embed[2] : '';
    scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
      .get(EMBED_PATH + id + '?hl=en')
      .replyWithFile(opts.embed[1] || 200,
        path.resolve(__dirname,
          `${dirpath}/embed${file}.html`)));
  }

  if (opts.get_video_info) {
    let file = Array.isArray(opts.get_video_info) && opts.get_video_info[2] ?
      '-' + opts.get_video_info[2] : '';
    scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
      .filteringPath((path) => {
        let regexp = /\?video_id=([a-zA-Z0-9_-]+)&(.+)$/;
        return path.replace(regexp, (_, r) => '?video_id=' + r);
      })
      .get(INFO_PATH + 'video_id=' + id)
      .replyWithFile(opts.get_video_info[1] || 200,
        path.resolve(__dirname, `${dirpath}/get_video_info${file}`)));
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
  let parsed = url.parse(uri);
  return nock(parsed.protocol + '//' + parsed.host)
    .filteringPath(filter1, filter2)
    .get(parsed.path);
};

exports.url = (uri) => {
  let parsed = url.parse(uri);
  return nock(parsed.protocol + '//' + parsed.host).get(parsed.path);
};

exports.cleanAll = nock.cleanAll;
