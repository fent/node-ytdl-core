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
    id: 'hHW1oY26kxQ',
    type: 'live',
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
    id: 'SyKPsFRP_Oc',
    type: 'rental',
  },
  {
    id: '_HSylqgVYQI',
    type: 'regular',
    keep: ['video.flv'],
    transform: [
      {
        page: 'get_video_info',
        saveAs: 'unknown-format',
        fn: body => body.replace(/(%26itag%3D)(?:\d+)(%26)/g, '$1unknown$2'),
      },
      {
        page: 'watch.html',
        saveAs: 'bad-config',
        fn: body => body.replace('ytplayer.config = {', 'ytplayer.config = {[}'),
      },
      {
        page: 'watch.html',
        saveAs: 'bad-player-response',
        fn: body => body.replace('"player_response":"{', '"player_response":"'),
      },
      {
        page: 'watch.html',
        saveAs: 'no-extras',
        fn: body => {
          body = body.replace('id="watch7-user-header"', '');
          body = body.replace('id="eow-description"', '');
          body = body.replace('{"rvs":', '{"rvs":}');
          return body;
        },
      },
      {
        page: 'watch.html',
        saveAs: 'multiline-description',
        fn: body => {
          const regex = /(<p.*?id="eow-description".*?>).+?(<\/p>)/;
          body = body.replace(regex, '$1Some Title<br>' +
            'Line 1<br>' +
            '"Line 2"<br>' +
            '1  First Song  5:30<br>' +
            '2  Second Song  5:42' +
            '$2',
          );
          return body;
        },
      },
    ],
  },
  {
    id: 'nu5uzMXfuLc',
    type: 'streamed',
  },
  {
    id: 'pJk0p-98Xzc',
    type: 'vevo',
    saveInfo: true,
    keep: ['get_video_info-error'],
    transform: [
      {
        page: 'dash-manifest.xml',
        saveAs: 'no-formats',
        fn: body => body.replace(/<Representation>([\S\s]+)<\/Representation>/g, ''),
      },
      {
        page: 'get_video_info',
        saveAs: 'no-formats',
        fn: body => body.replace(/streamingData/g, 'no'),
      },
      {
        page: 'watch.html',
        saveAs: 'no-formats',
        fn: body => body.replace(/streamingData/g, 'no'),
      },
    ],
  },
  {
    id: 'rIqCiJKWx9I',
    type: 'age-restricted',
    saveInfo: true,
    transform: [
      {
        page: 'watch.html',
        saveAs: 'german',
        fn: body => body,
      },
      {
        page: 'embed.html',
        saveAs: 'no-config',
        fn: body => body.replace('t.setConfig({\'PLAYER_CONFIG\': ', ''),
      },
    ],
  },
  {
    id: '99999999999',
    type: 'nonexistent',
  },
  {
    id: 'OYXswyLkek4',
    type: 'game-image',
    basicInfo: true,
    skip: ['get_video_info'],
  },
  {
    id: 'xRu7qKijBso',
    type: 'game',
    basicInfo: true,
    skip: ['get_video_info'],
  },
  {
    id: '3IqtmUscE_U',
    type: 'related',
    skip: ['get_video_info', /player/],
    transform: [
      {
        page: 'watch.html',
        saveAs: 'no-rvs',
        fn: body => body.replace(/"rvs":"[^"]+"/, '"rvs":""'),
      },
      {
        page: 'watch.html',
        saveAs: 'bad-details',
        fn: body => body.replace(/\\"shortBylineText\\"/g, '\\"___\\"'),
      },
    ],
  },
  {
    id: 'wYgaarivXv4',
    type: 'related2',
    skip: ['get_video_info', /player/],
  },
  {
    id: 'GFg8BP01F5Q',
    type: 'noembed',
  },
  {
    id: 'KKzOh0MRuZE',
    type: 'no-likes-or-dislikes',
    skip: ['get_video_info', /player/],
  },
];


const fs = require('fs');
const path = require('path');
const urlParse = require('url').parse;
const mukRequire = require('muk-require');
const miniget = require('miniget');


// Tries to remove instances of your ip from saved test files.
const cleanBody = body => body
  .replace(/(ip(?:=|\\?\/|%3D|%253D|%2F))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/ig, '$10.0.0.0'); // eslint-disable-line max-len

// Returns true if `filename` is found in `video.skip`.
// `video.skipcan be a regex.
const skipFile = (video, filename) => video.skip && video.skip.some(skip =>
  skip instanceof RegExp ? skip.test(filename) : filename.includes(skip),
);

const getTransformFilename = transform => {
  let [basename, ext] = transform.page.split('.');
  return `${basename}-${transform.saveAs}${ext ? `.${ext}` : ''}`;
};

const refreshVideo = async(video, noRequests) => {
  console.log('refreshing video:', video.id, video.type);
  const folder = path.join(__dirname, `videos/${video.id}-${video.type}`);
  let existingFiles = {};
  try {
    fs.accessSync(folder);
    let files = fs.readdirSync(folder);
    for (let filename of files) {
      existingFiles[filename] = false;
    }
    if (video.keep) {
      for (let filename of video.keep) {
        existingFiles[filename] = true;
      }
    }
  } catch (err) {
    console.log('creating folder:', folder);
    fs.mkdirSync(folder);
  }

  const writeFile = (filename, body, compare) => {
    if (filename in existingFiles) {
      if (compare) {
        let oldBody = fs.readFileSync(path.join(folder, filename), 'utf8');
        if (oldBody === body) {
          existingFiles[filename] = true;
          return;
        }
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

  const minigetMock = (url, options, callback) => {
    if (typeof options === 'function') {
      callback = options;
    }

    // Save contents to file.
    const saveContents = body => {
      let parsed = urlParse(url);
      let s = parsed.pathname.split('/');
      let playerfile = /((?:html5)?player[-_][a-zA-Z0-9\-_.]+)(?:\.js|\/)/;
      let filename =
        // Special case for livestream manifest files.
        /\/manifest\/dash\//.test(url) ? 'dash-manifest.xml' :
          /\/manifest\/hls_(variant|playlist)\//.test(url) ? 'hls-manifest.m3u8' :

          // Save the key of html5player file so we know if they've changed.
            playerfile.test(url) ? `${playerfile.exec(url)[1]}.js` :

            // Save watch and embed pages with .html extension.
              /^\/watch$/.test(parsed.pathname) ? 'watch.html' :
                /^\/embed\//.test(parsed.pathname) ? 'embed.html' :

                // Otherwise, use url path as filename.
                  s[s.length - 1];
      console.log('request:', url.length > 100 ? `${url.slice(0, 97)}...` : url);
      if ((!video.keep || video.keep.indexOf(filename) === -1) &&
          !skipFile(video, filename)) {
        body = cleanBody(body);
        writeFile(filename, body, playerfile.test(url));
        writeTransforms(filename, body);
      }
    };

    if (callback) {
      return miniget(url, options, (err, res, body) => {
        if (err) return callback(err);
        saveContents(body);
        return callback(err, res, body);
      });
    } else {
      let body = [];
      let stream = miniget(url, options);
      stream.on('data', chunk => { body.push(chunk); });
      stream.on('end', () => { saveContents(body.join('')); });
      return stream;
    }
  };
  minigetMock.promise = (url, options) => new Promise((resolve, reject) => {
    minigetMock(url, options, (err, res, body) => {
      if (err) return reject(err);
      return resolve([res, body]);
    });
  });

  const getInfo = mukRequire('../../lib/info', { miniget: minigetMock });

  if (noRequests) {
    for (let filename in existingFiles) {
      // Ignore existing transformed files.
      if (
        (video.transform && video.transform.some(t => filename === getTransformFilename(t))) ||
        skipFile(video, filename)
      ) {
        continue;
      }
      console.log('using local copy:', filename);
      let body = fs.readFileSync(path.join(folder, filename), 'utf8');
      existingFiles[filename] = true;
      writeTransforms(filename, body);
    }
  } else {
  // Make the call to ytdl.
    try {
      let info;
      if (video.basicInfo) {
        info = await getInfo.getBasicInfo(video.id);
      } else {
        info = await getInfo.getFullInfo(video.id);
      }
      if (video.saveInfo) {
        writeFile('expected-info.json', cleanBody(JSON.stringify(info, null, 2)));
      }
    } catch (err) {
      console.log('error retreiveing video info:', err.message);
    }
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
    await refreshVideo(video, noRequests); // eslint-disable-line no-await-in-loop
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
