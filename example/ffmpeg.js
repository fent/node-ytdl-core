// Install fluent-ffmpeg before running this!
const readline = require('readline');
const path = require('path');
const fs = require('fs');
const ytdl = require('..');
const ffmpeg = require('fluent-ffmpeg');

const url = 'https://www.youtube.com/watch?v=TGbwL8kSpEk';
const audioOutput = path.resolve(__dirname, 'sound.mp4');
const mainOutput = path.resolve(__dirname, 'output.mp4');

const onProgress = (chunkLength, downloaded, total) => {
  const percent = downloaded / total;
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(`${(percent * 100).toFixed(2)}% downloaded `);
  process.stdout.write(`(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(total / 1024 / 1024).toFixed(2)}MB)`);
};

console.log('downloading audio track');

ytdl(url, {
  filter: format => format.container === 'mp4' && !format.qualityLabel,
}).on('error', console.error)
  .on('progress', onProgress)

  // Write audio to file since ffmpeg supports only one input stream.
  .pipe(fs.createWriteStream(audioOutput))
  .on('finish', () => {
    console.log('\ndownloading video');
    const video = ytdl(url, {
      filter: format => format.container === 'mp4' && !format.audioEncoding,
    });
    video.on('progress', onProgress);
    ffmpeg()
      .input(video)
      .videoCodec('copy')
      .input(audioOutput)
      .audioCodec('copy')
      .save(mainOutput)
      .on('error', console.error)
      .on('end', () => {
        fs.unlink(audioOutput, err => {
          if (err) console.error(err);
          else console.log(`\nfinished downloading, saved to ${mainOutput}`);
        });
      });
  });
