var assert      = require('assert');
var path        = require('path');
var fs          = require('fs');
var streamEqual = require('stream-equal');
var nock        = require('./nock');
var ytdl        = require('..');

var VIDEO_BASE = 'https://www.youtube.com/watch?v=';


describe('Download video', function() {
  var id = '_HSylqgVYQI';
  var link = VIDEO_BASE + id;
  var video = path.resolve(__dirname, 'files/' + id + '/video.flv');
  var filter = function(format) { return format.container === 'mp4'; };

  it('Should be pipeable and data equal to stored file', function(done) {
    var scope1 = nock(id, { dashmpd: true });
    var stream = ytdl(link, { filter: filter });

    var infoEmitted = false;
    var scope2;
    stream.on('info', function(info, format) {
      infoEmitted = true;
      scope2 = nock.url(format.url)
        .replyWithFile(200, video);
    });

    var filestream = fs.createReadStream(video);
    streamEqual(filestream, stream, function(err, equal) {
      scope1.done();
      scope2.done();
      if (err) return done(err);

      assert.ok(infoEmitted);
      assert.ok(equal);
      done();
    });
  });

  describe('that redirects', function() {
    it('Should download file after redirect', function(done) {
      var id = '_HSylqgVYQI';
      var link = VIDEO_BASE + id;
      var video = path.resolve(__dirname, 'files/' + id + '/video.flv');
      var filter = function(format) { return format.container === 'mp4'; };

      var scope1 = nock(id, { dashmpd: true });
      var stream = ytdl(link, { filter: filter });

      var scope2, scope3;
      stream.on('info', function(info, format) {
        scope2 = nock.url(format.url)
          .reply(302, '', { Location: 'http://somehost.com/somefile.mp4' });
        scope3 = nock.url('http://somehost.com/somefile.mp4')
          .replyWithFile(200, video);
      });

      var filestream = fs.createReadStream(video);
      streamEqual(filestream, stream, function(err, equal) {
        scope1.done();
        scope2.done();
        scope3.done();
        if (err) return done(err);

        assert.ok(equal);
        done();
      });
    });
  });
});
