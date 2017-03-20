var path = require('path');
var fs   = require('fs');
var ytdl = require('..');

var url = 'https://www.youtube.com/watch?v=WhXefyLs-uw';
var output = path.resolve(__dirname, 'video.mp4');

var video = ytdl(url);
video.pipe(fs.createWriteStream(output));
video.on('progress', function(percentage, start, end, totalDownloaded, chunkLength) {
  process.stdout.write((percentage * 100).toFixed(2) + '% ');
});
