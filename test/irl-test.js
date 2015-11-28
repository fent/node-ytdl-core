var assert  = require('assert');
var https   = require('https');
var nock    = require('nock');
var ytdl    = require('..');


var videos = {
  'Regular video': 'http://www.youtube.com/watch?v=mgOS64BF2eU',
  'VEVO': 'http://www.youtube.com/watch?v=qQ31INpjXX0',
  'VEVO 2': 'http://www.youtube.com/watch?v=pJk0p-98Xzc',
  'Age restricted': 'https://www.youtube.com/watch?v=otfd2UTrP_Q',
};


describe('Try downloading videos without mocking', function() {
  before(function() {
    nock.restore();
    ytdl.cache = null;
  });

  for (var desc in videos) {
    var video = videos[desc];
    describe(desc, function() {
      it('Request status code is not 403 Forbidden', function(done) {
        ytdl.getInfo(video, {
          downloadURL: true,
          debug: false,
        }, function(err, info) {
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
  }
});
