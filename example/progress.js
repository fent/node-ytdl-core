var path = require('path');
var fs   = require('fs');
var ytdl = require('..');

var url = 'https://www.youtube.com/watch?v=WhXefyLs-uw';
var output = path.resolve(__dirname, 'video.mp4');

var video = ytdl(url);
video.pipe(fs.createWriteStream(output));
video.on('response', function(res) {
  var totalSize = res.headers['content-length'];
  var dataRead = 0;
  res.on('data', function(data) {
    dataRead += data.length;
    var percent = dataRead / totalSize;
    process.stdout.cursorTo(0);
    process.stdout.clearLine(1);
    process.stdout.write((percent * 100).toFixed(2) + '% ');
  });
  res.on('end', function() {
    process.stdout.write('\n');
  });
});
