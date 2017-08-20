const assert = require('assert');
const nock   = require('nock');
const ytdl   = require('..');


var videos = {
  'Regular video'           : 'mgOS64BF2eU',
  'VEVO'                    : 'qQ31INpjXX0',
  'VEVO 2'                  : 'pJk0p-98Xzc',
  'Age restricted VEVO'     : 'B3eAMGXFw1o',
  'Age restricted'          : 'otfd2UTrP_Q',
  'Age restricted 2'        : 'Tzuvfy4jFwE',
  'Embed domain restricted' : 'B3eAMGXFw1o',
  'No embed allowed'        : 'GFg8BP01F5Q',
};


describe('Try downloading videos without mocking', function() {
  beforeEach(function() {
    nock.cleanAll();
    nock.enableNetConnect();
    ytdl.cache.reset();
  });

  Object.keys(videos).forEach(function(desc) {
    var video = videos[desc];
    describe(desc, function() {
      it('Request status code is not 403 Forbidden', function(done) {
        var stream = ytdl(video, { debug: false });
        stream.once('response', function(res) {
          assert.notEqual(res.statusCode, 403);
          res.destroy();
          done();
        });
      });
    });
  });
});
