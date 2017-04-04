var path = require('path');
var fs   = require('fs');
var ytdl = require('..');

var url = 'https://www.youtube.com/watch?v=WhXefyLs-uw';
var output = path.resolve(__dirname, 'video.mp4');

var video = ytdl(url);
video.pipe(fs.createWriteStream(output));
video.on('progress', function(chunkLength, downloaded, total) {
  process.stdout.cursorTo(0);
  process.stdout.clearLine(1);
  process.stdout.write((downloaded / total * 100).toFixed(2) + '% ');
});
video.on('end', function() {
  process.stdout.write('\n');
});
