const ytdl = require('..');
const path = require('path');
const fs = require('fs');


// To get your YouTube cookie
// - navigate to YouTube in a web browser
// - open up dev tools (opt+cmd+j on mac)
// - go to the network tab
// - click on a request on the left
// - scroll down to "Request Headers"
// - find the "cookie" header and copy its entire contents
const COOKIE = 'key1=value1; key2=value2; key3=value3';
const videoID = 'aqz-KE-bpKQ';

const outputName = 'video.mp4';
const outputPath = path.resolve(__dirname, outputName);
const video = ytdl(videoID, {
  requestOptions: {
    headers: {
      cookie: COOKIE,
      // Optional. If not given, ytdl-core will try to find it.
      // You can find this by going to a video's watch page, viewing the source,
      // and searching for "ID_TOKEN".
      // 'x-youtube-identity-token': 1324,
    },
  },
});

video.on('info', info => {
  console.log('title:', info.videoDetails.title);
  console.log('rating:', info.player_response.videoDetails.averageRating);
  console.log('uploaded by:', info.videoDetails.author.name);
});

video.on('progress', (chunkLength, downloaded, total) => {
  const percent = downloaded / total;
  console.log('downloading', `${(percent * 100).toFixed(1)}%`);
});

video.on('end', () => {
  console.log('saved to', outputName);
});

video.pipe(fs.createWriteStream(outputPath));
