var urlParse = require('url').parse;
var http = require('http');
var ytdl = require('..');

var stream = ytdl('https://www.youtube.com/watch?v=2UBFIhS1YBk', {
  request: function(url, options, callback) {
    var parsed = urlParse(url);
    return http.get({
      host: '127.0.0.1',
      port: 8888,
      path: url,
      headers: { Host: parsed.host },
    }, function(res) {
      if (!callback) { return; }
      res.setEncoding('utf8');
      var body = '';
      res.on('error', callback);
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {
        callback(null, body);
      });
    });
  }
});

console.log('Starting Download');

stream.on('data', function(chunk) {
  console.log('downloaded', chunk.length);
});

stream.on('end', function() {
  console.log('Finished');
});
