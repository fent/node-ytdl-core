var assert = require('assert');
var http   = require('http');
var nock   = require('nock');
var ytdl   = require('..');


var videos = [
  'http://www.youtube.com/watch?v=qQ31INpjXX0',
  'http://www.youtube.com/watch?v=pJk0p-98Xzc',
  'http://www.youtube.com/watch?v=mgOS64BF2eU',
  'http://www.youtube.com/watch?v=qQ31INpjXX0',
  'http://www.youtube.com/watch?v=mvuqS0nxFvA'
];


describe('Try downloading videos without mocking', function() {
  before(function() {
    nock.restore();
  });

  videos.forEach(function(video) {
    describe(video, function() {
      it('Request status code is 200', function(done) {
        ytdl.getInfo(video, { downloadURL: true }, function(err, info) {
          if (err) return done(err);

          var url = info.formats[0].url;
          var req = http.get(url, function(res) {
            assert.equal(res.statusCode, 200);
            res.on('error', done);
            req.abort();
            done();
          });
          req.on('error', done);
        });
      });
    });
  });
});
