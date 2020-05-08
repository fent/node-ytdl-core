const ytdl = require('..');
const path = require('path');
const fs = require('fs');
const url = require('url');
const nock = require('nock');

const YT_HOST = 'https://www.youtube.com';
const VIDEO_PATH = '/watch?v=';
const MANIFEST_HOST = 'https://manifest.googlevideo.com';
const M3U8_HOST = 'https://manifest.googlevideo.com';
const EMBED_PATH = '/embed/';
const INFO_PATH = '/get_video_info?';


before(() => { nock.disableNetConnect(); });
after(() => { nock.enableNetConnect(); });
afterEach(() => { nock.cleanAll(); });

afterEach(() => {
  ytdl.cache.sig.clear();
  ytdl.cache.info.clear();
});


exports = module.exports = (id, opts) => {
  opts = opts || {};
  let scopes = [];
  let dirpath = `files/videos/${id}${`-${opts.type}`}`;
  let watchType = opts.watch ? `-${opts.watch}` : '';
  let existingFiles = fs.readdirSync(path.join(__dirname, dirpath));

  scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
    .get(`${VIDEO_PATH + id}&hl=en&bpctr=${Math.ceil(Date.now() / 1000)}`)
    .replyWithFile(opts.statusCode || 200,
      path.join(__dirname, `${dirpath}/watch${watchType}.html`)));

  if (opts.dashmpd) {
    let file = buildFile(opts.dashmpd);
    scopes.push(nock(MANIFEST_HOST, { reqheaders: opts.headers })
      .filteringPath(() => '/api/manifest/dash/')
      .get('/api/manifest/dash/')
      .replyWithFile(opts.dashmpd[1] || 200,
        path.join(__dirname, `${dirpath}/dash-manifest${file}.xml`)));
  }

  if (opts.m3u8) {
    let file = buildFile(opts.m3u8);
    scopes.push(nock(M3U8_HOST, { reqheaders: opts.headers })
      .filteringPath(() => '/api/manifest/hls_variant/')
      .get('/api/manifest/hls_variant/')
      .replyWithFile(opts.m3u8[1] || 200,
        path.join(__dirname, `${dirpath}/hls-manifest${file}.m3u8`)));
  }

  if (opts.player) {
    let file = existingFiles.find(f => /(html5)?player/.test(f));
    if (!file) {
      throw Error('html5player file not found');
    }
    scopes.push(nock('https://www.youtube.com', { reqheaders: opts.headers })
      .filteringPath(/^(\/yts\/jsbin\/player.+|\/s\/player\/.+\/base\.js)$/g, '/yts/jsbin/player')
      .get('/yts/jsbin/player')
      .replyWithFile(opts.player[1] || 200,
        path.join(__dirname, `${dirpath}/${file}`)));
  }

  if (opts.embed) {
    let file = buildFile(opts.embed);
    scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
      .get(`${EMBED_PATH + id}?hl=en`)
      .replyWithFile(opts.embed[1] || 200,
        path.join(__dirname, `${dirpath}/embed${file}.html`)));
  }

  if (opts.get_video_info) {
    let file = buildFile(opts.get_video_info);
    scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
      .filteringPath(p => {
        let regexp = /\?video_id=([a-zA-Z0-9_-]+)&(.+)$/;
        return p.replace(regexp, (_, r) => `?video_id=${r}`);
      })
      .get(`${INFO_PATH}video_id=${id}`)
      .replyWithFile(opts.get_video_info[1] || 200,
        path.join(__dirname, `${dirpath}/get_video_info${file}`)));
  }

  return {
    done: () => {
      scopes.forEach(scope => {
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

const buildFile = a => Array.isArray(a) && a[2] ? `-${a[2]}` : '';

exports.filteringPath = (uri, filter1, filter2) => {
  let parsed = url.parse(uri);
  return nock(`${parsed.protocol}//${parsed.host}`)
    .filteringPath(filter1, filter2)
    .get(parsed.path);
};

exports.url = uri => {
  let parsed = url.parse(uri);
  return nock(`${parsed.protocol}//${parsed.host}`).get(parsed.path);
};

exports.cleanAll = nock.cleanAll;
