const path = require('path');
const fs   = require('fs');
const ytdl = require('..');

const url = 'https://www.youtube.com/watch?v=WhXefyLs-uw';
const output = path.resolve(__dirname, 'video.mp4');

const video = ytdl(url);
let starttime;
video.pipe(fs.createWriteStream(output));
video.once('response', () => {
  starttime = Date.now();
})
video.on('progress', (chunkLength, downloaded, total) => {
  const float_downloaded = downloaded / total;
  const downloaded_min = (Date.now() - starttime) / 1000 / 60;
  process.stdout.cursorTo(0);
  process.stdout.clearLine(1);
  process.stdout.write(`${(float_downloaded * 100).toFixed(2)}% downloaded`);
  process.stdout.write(`(${downloaded / 1024 / 1025}MB of ${total / 1024 / 1024}MB)`);
  process.stdout.write(`, running for: ${downloaded_min.toFixed(2)}minutes`);
  process.stdout.write(`, estimated time left: ${(downloaded_min / float_downloaded - downloaded_min).toFixed(2)}minutes`);
});
video.on('end', () => {
  process.stdout.write('\n');
});