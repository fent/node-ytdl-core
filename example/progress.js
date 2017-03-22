var path = require('path');
var fs   = require('fs');
var ytdl = require('..');

var url = 'https://www.youtube.com/watch?v=WhXefyLs-uw';
var output = path.resolve(__dirname, 'video.mp4');

var video = ytdl(url);
video.pipe(fs.createWriteStream(output));
video.on('progress', function(chunkLength, totalDownloaded, totalDownloadLength) {
  process.stdout.write((totalDownloaded / totalDownloadLength * 100).toFixed(2) + '% ');
});
