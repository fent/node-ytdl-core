// Install fluent-ffmpeg before running this!
const path   = require('path');
const fs     = require('fs');
const ytdl   = require('..');
const ffmpeg = require('fluent-ffmpeg');

const url = 'https://www.youtube.com/watch?v=TGbwL8kSpEk';
const audioOutput = path.resolve(__dirname, 'sound.mp4');
const mainOutput = path.resolve(__dirname, 'output.mp4');

ytdl(url, { filter: format => {
  return format.container === 'm4a' && !format.encoding; } })
  // Write audio to file since ffmpeg supports only one input stream.
  .pipe(fs.createWriteStream(audioOutput))
  .on('finish', () => {
    ffmpeg()
      .input(ytdl(url, { filter: format => {
        return format.container === 'mp4' && !format.audioEncoding; } }))
      .videoCodec('copy')
      .input(audioOutput)
      .audioCodec('copy')
      .save(mainOutput)
      .on('error', console.error)
      .on('progress', progress => {
        process.stdout.cursorTo(0);
        process.stdout.clearLine(1);
        process.stdout.write(progress.timemark);
      }).on('end', () => {
        fs.unlink(audioOutput, err => {
          if(err) console.error(err);
          else console.log('\nfinished downloading');
        });
      });
  });