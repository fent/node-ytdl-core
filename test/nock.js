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

  const addScope = (host, testOptions, nockOptions) => {
    if (Array.isArray(testOptions) && Array.isArray(testOptions[0])) {
      testOptions.forEach(testOption => addScope(host, testOption, nockOptions));
      return;
    }
    let scope = nock(host, { reqheaders: opts.headers });
    if (nockOptions.filteringPath) {
      scope = scope.filteringPath(...nockOptions.filteringPath);
    }
    scope = scope.get(nockOptions.get);
    let statusCode = (Array.isArray(testOptions) && testOptions[1]) || 200;
    let filepath = path.join(__dirname, `${folder}/${nockOptions.file}`);
    let reply = testOptions[2];
    if (!reply || testOptions === true) {
      scope = scope.replyWithFile(statusCode, filepath);
    } else if (typeof reply === 'string') {
      scope = scope.reply(200, reply);
    } else if (typeof reply === 'function') {
      scope = scope.reply(200, (uri, requestBody, callback) => {
        fs.readFile(filepath, 'utf8', (err, body) => {
          if (err) return callback(err);
          callback(null, testOptions[2](body));
        });
      });
    }
    scopes.push(scope);
  };

  if (opts.watchJson) {
    addScope(YT_HOST, opts.watchJson, {
      filteringPath: [/\/watch\?v=.+&pbj=1$/, '/watch?v=XXX&pbj=1'],
      get: '/watch?v=XXX&pbj=1',
      file: 'watch.json',
    });
  }

  if (opts.watchHtml) {
    addScope(YT_HOST, opts.watchHtml, {
      filteringPath: [/\/watch\?v=.+&hl=en$/, '/watch?v=XXX'],
      get: '/watch?v=XXX',
      file: 'watch.html',
    });
  }

  if (opts.dashmpd) {
    addScope(MANIFEST_HOST, opts.dashmpd, {
      filteringPath: [() => '/api/manifest/dash/'],
      get: '/api/manifest/dash/',
      file: 'dash-manifest.xml',
    });
  }

  if (opts.m3u8) {
    addScope(M3U8_HOST, opts.m3u8, {
      filteringPath: [() => '/api/manifest/hls_variant/'],
      get: '/api/manifest/hls_variant/',
      file: 'hls-manifest.m3u8',
    });
  }

  if (opts.player) {
    addScope(YT_HOST, opts.player, {
      filteringPath: [/\/player.+$/, '/player.js'],
      get: '/s/player.js',
      file: existingFiles.find(f => /(html5)?player.+\.js$/.test(f)),
    });
  }

  if (opts.embed) {
    addScope(YT_HOST, opts.embed, {
      get: `${EMBED_PATH + id}?hl=en`,
      file: 'embed.html',
    });
  }

  if (opts.get_video_info) {
    addScope(YT_HOST, opts.get_video_info, {
      filteringPath: [p => {
        let regexp = /\?video_id=([a-zA-Z0-9_-]+)&(.+)$/;
        return p.replace(regexp, (_, r) => `?video_id=${r}`);
      }],
      get: `${INFO_PATH}video_id=${id}`,
      file: 'get_video_info',
    });
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
