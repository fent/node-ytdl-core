const bin = require('ffmpeg-binaries').ffmpegPath();
const cp = require('child_process');
const ytdl = require('..');

const takeScreenshot = (url, outFile, position) => new Promise((resolve, reject) => {
  ytdl.getInfo(url).then(info => {
    let format = info.formats[0];
    cp.exec(`"${bin}" -i "${format.url}"${!format.live && position ? ` -ss ${position}` : ''} -vframes 1 -an -y ${outFile}`, (error, stdout, stderr) => {
      if(error) return reject({error, stdout, stderr});
      resolve(outFile);
    });
  }).catch(reject);
});

// Usage:
takeScreenshot('https://www.youtube.com/watch?v=livestream', 'stream.png').then(() => console.log('finished screenshot stream')).catch(console.error);
takeScreenshot('https://www.youtube.com/watch?v=regularVideo', 'video.png', '4:20').then(() => console.log('finished screenshot video')).catch(console.error)
