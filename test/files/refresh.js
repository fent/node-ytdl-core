/*
 * Run this file to update test files used to test specific types of videos.
 *
 *     node refresh.js [type] [no-request]
 *
 * Provide a `type` to only update the one video.
 *
 * Give `no-request` if you want to run with mocked requests using nock.
 *
 * If there are ever issues with a specific type of video, we can use this script
 * to update that type, investigate what changed, and run tests.
 */

const videos = [
  {
    id: '5qap5aO4i9A',
    type: 'live-now',
    saveInfo: true,
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
    basicInfo: true,
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
    keep: ['video.flv'],
    saveInfo: true,
  },
  {
    id: 'LuZu9N53Vd0',
    type: 'age-restricted',
    basicInfo: true,
    saveInfo: true,
  },
  {
    id: 'aqz-KE-bpKQ',
    type: 'use-backups',
    saveInfo: true,
    mock: {
      'watch.html': '<html></html>',
      'watch.json': '[]',
    },
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
    id: 'YQHsXMglC9A',
    type: 'cipher',
  },
  {
    id: 'GFg8BP01F5Q',
    type: 'no-embed',
    basicInfo: true,
  },
  {
    id: 'KKzOh0MRuZE',
    type: 'no-likes-or-dislikes',
    skip: ['get_video_info', /player/],
  },
  {
    id: '_HSylqgVYQI',
    type: 'rich-thumbnails',
    basicInfo: true,
    saveInfo: true,
    skip: ['watch.html', /player/],
  },
  {
    id: 'z2jeHsa0UG0',
    type: 'private',
  },
  {
    id: '_HSylqgVYQI',
    type: 'related-topics',
    needCookie: true,
    basicInfo: true,
    saveInfo: true,
  },
  {
    id: 'TceijYjxdrQ',
    type: 'longest-upload',
    basicInfo: true,
  },
];


const fs = require('fs');
const path = require('path');
const urlParse = require('url').parse;
const { PassThrough } = require('stream');
const mukRequire = require('muk-require');
const miniget = require('miniget');


// Don't check for update, otherwise, it'll get saved as part of a video request.
process.env.YTDL_NO_UPDATE = 'true';


// Tries to remove instances of your ip from saved test files.
const cleanBody = body => body
  // eslint-disable-next-line max-len
  .replace(/(ip(?:=|\\?\/|%3D|%253D|%2F))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/ig, '$10.0.0.0');

// Returns true if `filename` is found in `video.skip`.
// `video.skip` can be a regex.
const skipFile = (video, filename) => video.skip && video.skip.some(skip =>
  skip instanceof RegExp ? skip.test(filename) : filename.includes(skip),
);

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

  const getFilenameFromURL = url => {
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
    return filename;
  };

  const minigetMock = (url, options) => {
    let filename = getFilenameFromURL(url);
    console.log('request:', url.length > 100 ? `${url.slice(0, 97)}...` : url);

    // Save contents to file.
    const saveContents = body => {
      if ((!video.keep || video.keep.indexOf(filename) === -1) &&
          !skipFile(video, filename)) {
        body = cleanBody(body);
        writeFile(filename, body);
      }
    };

    let stream = miniget(url, options);
    let body = [];
    let resolveEnd;
    let streamEnd = new Promise(resolve => resolveEnd = resolve);
    stream.on('data', chunk => { body.push(chunk); });
    stream.on('end', () => {
      resolveEnd(true);
      saveContents(body.join(''));
    });
    if (video.mock && video.mock[filename] !== undefined) {
      const text = video.mock[filename];
      stream.resume();
      stream = new PassThrough();
      stream.text = () => streamEnd.then(() => text);
      setImmediate(() => {
        streamEnd.then(() => stream.end(text));
      });
    }
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
    let options = { requestOptions: { maxRetries: 0 } };
    // Not implemented yet
    if (video.needCookie) return console.log('Need cookies to refresh this.');
    if (video.basicInfo) {
      info = await getInfo.getBasicInfo(video.id, options);
    } else {
      info = await getInfo.getInfo(video.id, options);
    }
    if (video.saveInfo) {
      let filename = 'expected-info.json';
      let body = cleanBody(JSON.stringify(info, null, 2));
      writeFile(filename, body);
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
