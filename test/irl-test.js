var assert  = require('assert');
var https   = require('https');
var nock    = require('nock');
var ytdl    = require('..');


var videos = [
  'http://www.youtube.com/watch?v=qQ31INpjXX0',
  'http://www.youtube.com/watch?v=pJk0p-98Xzc',
  'http://www.youtube.com/watch?v=mgOS64BF2eU',
  'http://www.youtube.com/watch?v=qQ31INpjXX0',
  'http://www.youtube.com/watch?v=mvuqS0nxFvA',
  'https://www.youtube.com/watch?v=otfd2UTrP_Q', // age restriction
];


describe('Try downloading videos without mocking', function() {
  before(function() {
    nock.restore();
    ytdl.cache = null;
  });

  videos.forEach(function(video) {
    describe(video, function() {
      it('Request status code is not 403 Forbidden', function(done) {
        ytdl.getInfo(video, { downloadURL: true }, function(err, info) {
          if (err) return done(err);

          var url = info.formats[0].url;
          var req = https.get(url);
          req.on('response', function(res) {
            assert.notEqual(res.statusCode, 403);
            req.abort();
            done();
          });
          req.on('error', done);
        });
      });
    });
  });
});
