var assert = require('assert');
var nock   = require('nock');
var ytdl   = require('..');


var videos = {
  'Regular video'  : 'http://www.youtube.com/watch?v=mgOS64BF2eU',
  'VEVO'           : 'http://www.youtube.com/watch?v=qQ31INpjXX0',
  'VEVO 2'         : 'http://www.youtube.com/watch?v=pJk0p-98Xzc',
  'Age restricted' : 'http://www.youtube.com/watch?v=otfd2UTrP_Q',
};


describe('Try downloading videos without mocking', function() {
  beforeEach(function() {
    nock.cleanAll();
    ytdl.cache = null;
  });

  Object.keys(videos).forEach(function(desc) {
    var video = videos[desc];
    describe(desc, function() {
      it('Request status code is not 403 Forbidden', function(done) {
        var stream = ytdl(video, { debug: false });
        stream.on('response', function(res) {
          assert.notEqual(res.statusCode, 403);
          res.destroy();
          done();
        });
      });
    });
  });
});
