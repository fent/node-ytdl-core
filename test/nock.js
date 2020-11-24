const ytdl = require('..');
const path = require('path');
const fs = require('fs');
const url = require('url');
const nock = require('nock');

const YT_HOST = 'https://www.youtube.com';
const MANIFEST_HOST = 'https://manifest.googlevideo.com';
const M3U8_HOST = 'https://manifest.googlevideo.com';
const EMBED_PATH = '/embed/';
const INFO_PATH = '/get_video_info?';
process.env.YTDL_NO_UPDATE = 'true';


if (global.it) {
  before(() => nock.disableNetConnect());
  after(() => nock.enableNetConnect());
  afterEach(() => nock.cleanAll());
  afterEach(() => {
    ytdl.cache.sig.clear();
    ytdl.cache.info.clear();
    ytdl.cache.cookie.clear();
    ytdl.cache.watch.clear();
  });
}


exports = module.exports = (id, type, opts = {}) => {
  let scopes = [];
  let folder = `files/videos/${type}`;
  let existingFiles = fs.readdirSync(path.join(__dirname, folder));
  let existingFilesSet = new Set(existingFiles);
  const playerfile = /((?:html5)?player[-_][a-zA-Z0-9\-_.]+)(?:\.js|\/)/;

  opts = Object.assign({
    watchJson: existingFilesSet.has('watch.json'),
    watchHtml: existingFilesSet.has('watch.html'),
    dashmpd: existingFilesSet.has('dash-manifest.xml'),
    m3u8: existingFilesSet.has('hls-manifest.m3u8'),
    player: existingFiles.filter(key => playerfile.test(key)).length > 0,
    embed: existingFilesSet.has('embed.html'),
    get_video_info: existingFilesSet.has('get_video_info'),
  }, opts);

  if (opts.watchJson) {
    let file = buildFile(opts.watchJson);
    scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
      .filteringPath(/\/watch\?v=.+&pbj=1$/, '/watch?v=XXX&pbj=1')
      .get('/watch?v=XXX&pbj=1')
      .replyWithFile(opts.watchJson[1] || 200,
        path.join(__dirname, `${folder}/watch${file}.json`)));
  }

  if (opts.watchHtml) {
    let file = buildFile(opts.watchHtml);
    scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
      .filteringPath(/\/watch\?v=.+&hl=en$/, '/watch?v=XXX')
      .get('/watch?v=XXX')
      .replyWithFile(opts.watchHtml[1] || 200,
        path.join(__dirname, `${folder}/watch${file}.html`)));
  }

  if (opts.dashmpd) {
    let file = buildFile(opts.dashmpd);
    scopes.push(nock(MANIFEST_HOST, { reqheaders: opts.headers })
      .filteringPath(() => '/api/manifest/dash/')
      .get('/api/manifest/dash/')
      .replyWithFile(opts.dashmpd[1] || 200,
        path.join(__dirname, `${folder}/dash-manifest${file}.xml`)));
  }

  if (opts.m3u8) {
    let file = buildFile(opts.m3u8);
    scopes.push(nock(M3U8_HOST, { reqheaders: opts.headers })
      .filteringPath(() => '/api/manifest/hls_variant/')
      .get('/api/manifest/hls_variant/')
      .replyWithFile(opts.m3u8[1] || 200,
        path.join(__dirname, `${folder}/hls-manifest${file}.m3u8`)));
  }

  if (opts.player) {
    let file = existingFiles.find(f => /(html5)?player.+\.js$/.test(f));
    if (!file) {
      throw Error('html5player file not found');
    }
    scopes.push(nock('https://www.youtube.com', { reqheaders: opts.headers })
      .filteringPath(/\/player.+$/, '/player.js')
      .get('/s/player.js')
      .replyWithFile(opts.player[1] || 200,
        path.join(__dirname, `${folder}/${file}`)));
  }

  if (opts.embed) {
    let file = buildFile(opts.embed);
    scopes.push(nock(YT_HOST, { reqheaders: opts.headers })
      .get(`${EMBED_PATH + id}?hl=en`)
      .replyWithFile(opts.embed[1] || 200,
        path.join(__dirname, `${folder}/embed${file}.html`)));
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
        path.join(__dirname, `${folder}/get_video_info${file}`)));
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
