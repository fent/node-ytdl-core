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
    nock(id, {
      dashmpd: true,
      dashmpd2: true,
      get_video_info: true,
    });
    var stream = ytdl(link, { filter: filter });

    var infoEmitted = false;
    stream.on('info', function(info, format) {
      infoEmitted = true;
      var scope = nock.url(format.url)
        .replyWithFile(200, video);
      after(scope.done);
    });

    var filestream = fs.createReadStream(video);
    streamEqual(filestream, stream, function(err, equal) {
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

      nock(id, {
        dashmpd: true,
        dashmpd2: true,
        get_video_info: true,
      });
      var stream = ytdl(link, { filter: filter });

      stream.on('info', function(info, format) {
        var scope1 = nock.url(format.url)
          .reply(302, '', { Location: 'http://somehost.com/somefile.mp4' });
        var scope2 = nock.url('http://somehost.com/somefile.mp4')
          .replyWithFile(200, video);
        after(function() {
          scope1.done();
          scope2.done();
        });
      });

      var filestream = fs.createReadStream(video);
      streamEqual(filestream, stream, function(err, equal) {
        if (err) return done(err);
        assert.ok(equal);
        done();
      });
    });
  });
});
