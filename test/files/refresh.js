/*
 * Run this file to update test files used to test specific types of videos.
 *
 *     node refresh.js [type] [no-request]
 *
 * Provide a `type` to only update the one video.
 *
 * Give `no-request` if you want to update `transform`'d files without making requests.
 *
 * If there are ever issues with a specific type of video, we can use this script
 * to update that type, investigate what changed, and run tests.
 */

const videos = [
  {
    id: '5qap5aO4i9A',
    type: 'live-now',
    saveInfo: true,
    transform: [
      {
        page: 'dash-manifest.xml',
        saveAs: 'transformed',
        fn: body => {
          const replaceBetweenTags = (tagName, content) => {
            const regex = new RegExp(`<${tagName}>(.+?)</${tagName}`, 'g');
            body = body.replace(regex, `<${tagName}>${content}</${tagName}`);
          };

          // Create a playlist file that has only 3 short segments
          // so we can easily mock these in tests.
          replaceBetweenTags('SegmentTimeline', `
            <S d="5000" /><S d="5000" /><S d="5000">
            `);
          replaceBetweenTags('BaseURL', 'https://googlevideo.com/videoplayback/');
          replaceBetweenTags('SegmentList', `
            <SegmentURL media="sq/video01.ts" />
            <SegmentURL media="sq/video02.ts" />
            <SegmentURL media="sq/video03.ts" />
            `);
          body = body.replace('type="dynamic"', '');
          return body;
        },
      },
    ],
  },
  {
    id: '21X5lGlDOfg',
    type: 'live-with-cc',
  },
  {
    id: 'VIBFo3Ti5vQ',
    type: 'live-future',
  },
  {
    id: 'nu5uzMXfuLc',
    type: 'live-past',
  },
  {
    id: 'SyKPsFRP_Oc',
    type: 'rental',
    basicInfo: true,
    saveInfo: true,
  },
  {
    id: '_HSylqgVYQI',
    type: 'regular',
    keep: ['video.flv', 'watch-reload-now.json', 'watch-reload-now-2.json', 'watch-empty.json'],
    saveInfo: true,
    transform: [
      {
        page: 'watch.json',
        saveAs: 'no-extras',
        fn: body => body.replace('playerMicroformatRenderer', ''),
      },
      {
        page: 'watch.html',
        saveAs: 'with-cookie',
        fn: body => `${body}\n{"ID_TOKEN":"abcd"}`,
      },
      {
        page: 'watch.json',
        saveAs: 'no-formats',
        fn: body => body.replace(/\b(formats|adaptiveFormats)\b/g, 'no'),
      },
      {
        page: 'expected-info.json',
        saveAs: 'no-rvs',
        fn: body => body.replace(/"relatedVideoArgs"/, '""'),
      },
      {
        page: 'expected-info.json',
        saveAs: 'no-results',
        fn: body => body.replace(/"secondaryResults"/, '""'),
      },
      {
        page: 'watch.json',
        saveAs: 'bad-details',
        fn: body => body.replace(/\\"shortBylineText\\"/g, '\\"___\\"'),
      },
      {
        page: 'watch.html',
        saveAs: 'no-html5player',
        fn: body => body.replace(/"player_ias\/base"/g, '""'),
      },
      {
        page: 'watch.html',
        saveAs: 'no-html5player-2',
        fn: body => body.replace(/"(player_ias\/base|jsUrl)"/g, '""'),
      },
    ],
  },
  {
    id: 'LuZu9N53Vd0',
    type: 'age-restricted',
    saveInfo: true,
    keep: ['embed-player-vars.html', 'watch-backup.html', 'watch-reload-now.json'],
    transform: [
      {
        page: 'embed.html',
        saveAs: 'no-config',
        fn: body => body.replace('PLAYER_CONFIG', ''),
      },
      {
        page: 'embed.html',
        saveAs: 'bad-config',
        fn: body => body.replace(/((["'])PLAYER_CONFIG\2:\s*){/, '$1{[}'),
      },
      {
        page: 'watch.json',
        saveAs: 'no-player-response',
        fn: body => body.replace(/player_response/g, 'no'),
      },
      {
        page: 'get_video_info',
        saveAs: 'no-player-response',
        fn: body => body.replace(/player_response/g, 'no'),
      },
      {
        page: 'watch.json',
        saveAs: 'bad-config',
        fn: body => body.replace('[', '{]'),
      },
    ],
  },
  {
    id: '99999999999',
    type: 'non-existent',
  },
  {
    id: 'XDNFAujgJb0',
    type: 'music',
    basicInfo: true,
    saveInfo: true,
    skip: ['watch.json', 'get_video_info'],
  },
  {
    id: 'xRu7qKijBso',
    type: 'game',
    basicInfo: true,
    saveInfo: true,
    skip: ['watch.json', 'get_video_info'],
  },
  {
    id: 'B3eAMGXFw1o',
    type: 'cipher',
  },
  {
    id: 'GFg8BP01F5Q',
    type: 'no-embed',
  },
  {
    id: 'KKzOh0MRuZE',
    type: 'no-likes-or-dislikes',
    skip: ['get_video_info', /player/],
  },
  {
    id: 'z2jeHsa0UG0',
    type: 'private',
  },
];


const fs = require('fs');
const path = require('path');
const urlParse = require('url').parse;
const mukRequire = require('muk-require');
const miniget = require('miniget');


// Tries to remove instances of your ip from saved test files.
const cleanBody = body => body
  // eslint-disable-next-line max-len
  .replace(/(ip(?:=|\\?\/|%3D|%253D|%2F))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/ig, '$10.0.0.0');

// Returns true if `filename` is found in `video.skip`.
// `video.skip` can be a regex.
const skipFile = (video, filename) => video.skip && video.skip.some(skip =>
  skip instanceof RegExp ? skip.test(filename) : filename.includes(skip),
);

const getTransformFilename = transform => {
  let [basename, ext] = transform.page.split('.');
  return `${basename}-${transform.saveAs}${ext ? `.${ext}` : ''}`;
};

const playerfile = /((?:html5)?player[-_][a-zA-Z0-9\-_.]+)(?:\.js|\/)/;

const refreshVideo = async(video, noRequests) => {
  console.log('refreshing video:', video.id, video.type);
  const folder = path.join(__dirname, `videos/${video.type}`);
  let existingFiles = {};
  try {
    fs.accessSync(folder);
    let files = fs.readdirSync(folder);
    for (let filename of files) {
      existingFiles[filename] = false;
    }
    if (video.keep) {
      for (let filename of video.keep || []) {
        existingFiles[filename] = true;
        for (let transform of video.transform.filter(t => t.page === filename) || []) {
          existingFiles[getTransformFilename(transform)] = true;
        }
      }
    }
  } catch (err) {
    console.log('creating folder:', folder);
    fs.mkdirSync(folder);
  }

  const writeFile = (filename, body) => {
    if (filename in existingFiles) {
      let oldBody = fs.readFileSync(path.join(folder, filename), 'utf8');
      if (oldBody === body) {
        existingFiles[filename] = true;
        return;
      }
      console.log('update file:', filename);
    } else {
      console.log('save file:', filename);
    }
    fs.writeFileSync(path.join(folder, filename), body);
    existingFiles[filename] = true;
  };

  const writeTransforms = (filename, body) => {
    for (let transform of video.transform || []) {
      if (transform.page === filename) {
        let tfilename = getTransformFilename(transform);
        writeFile(tfilename, transform.fn(body));
      }
    }
  };

  const minigetMock = (url, options) => {
    // Save contents to file.
    const saveContents = body => {
      let parsed = urlParse(url);
      let s = parsed.pathname.split('/');
      let filename =
        // Special case for livestream manifest files.
        /\/manifest\/dash\//.test(url) ? 'dash-manifest.xml' :
          /\/manifest\/hls_(variant|playlist)\//.test(url) ? 'hls-manifest.m3u8' :

          // Save the key of html5player file so we know if they've changed.
            playerfile.test(url) ? `${playerfile.exec(url)[1]}.js` :

            // Save watch and embed pages with .html extension.
              /^\/watch$/.test(parsed.pathname) ?
                /pbj=1/.test(parsed.search) ? 'watch.json' : 'watch.html' :
                /^\/embed\//.test(parsed.pathname) ? 'embed.html' :

                // Otherwise, use url path as filename.
                  s[s.length - 1];
      console.log('request:', url.length > 100 ? `${url.slice(0, 97)}...` : url);
      if ((!video.keep || video.keep.indexOf(filename) === -1) &&
          !skipFile(video, filename)) {
        body = cleanBody(body);
        writeFile(filename, body);
        writeTransforms(filename, body);
      }
    };

    let body = [];
    let stream = miniget(url, options);
    stream.on('data', chunk => { body.push(chunk); });
    stream.on('end', () => { saveContents(body.join('')); });
    return stream;
  };
  Object.assign(minigetMock, miniget);

  const getInfo = mukRequire('../../lib/info', { miniget: minigetMock });

  if (noRequests) {
    const nock = require('../nock');
    nock(video.id, video.type);
  }

  // Make the call to ytdl.
  try {
    let info;
    if (video.basicInfo) {
      info = await getInfo.getBasicInfo(video.id, video.options);
    } else {
      info = await getInfo.getInfo(video.id, video.options);
    }
    if (video.saveInfo) {
      let filename = 'expected-info.json';
      let body = cleanBody(JSON.stringify(info, null, 2));
      writeFile(filename, body);
      writeTransforms(filename, body);
    }
  } catch (err) {
    console.log('error retrieving video info:', err.message);
    console.log(err.stack);
  }

  // Delete any files no longer used from the `getInfo()` call.
  for (let file in existingFiles) {
    if (!existingFiles[file]) {
      console.log('removing file:', file);
      fs.unlinkSync(path.join(folder, file));
    }
  }

  console.log();
};

const refreshAll = async noRequests => {
  for (let video of videos) {
    // eslint-disable-next-line no-await-in-loop
    await refreshVideo(video, noRequests);
  }
};


// Accept only refreshing one video type.
let type = process.argv[2];
let noRequests = !!process.argv[3];
if (type) {
  let video = videos.find(video2 => video2.type === type);
  if (video) {
    refreshVideo(video, noRequests);
  } else {
    console.error('video type not found', type);
  }
} else {
  refreshAll(noRequests);
}
