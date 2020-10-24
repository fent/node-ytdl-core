const path = require('path');
const fs = require('fs');
const ytdl = require('..');

const url = 'https://www.youtube.com/watch?v=aqz-KE-bpKQ';
const output = path.resolve(__dirname, 'video.mp4');

const video = ytdl(url, { range: { start: 0, end: 1000 } });
video.pipe(fs.createWriteStream(output));

video.on('end', () => {
  ytdl(url, { range: { start: 1001 } })
    .pipe(fs.createWriteStream(output, { flags: 'a' }));
});
