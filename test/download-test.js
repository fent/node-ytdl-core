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
    var scope = nock(id, {
      dashmpd: true,
      dashmpd2: true,
      get_video_info: true,
    });
    var stream = ytdl(link, { filter: filter });

    var infoEmitted = false;
    stream.on('info', function(info, format) {
      infoEmitted = true;
      scope.urlReplyWithFile(format.url, 200, video);
    });

    var filestream = fs.createReadStream(video);
    streamEqual(filestream, stream, function(err, equal) {
      if (err) return done(err);
      scope.done();
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

      var scope = nock(id, {
        dashmpd: true,
        dashmpd2: true,
        get_video_info: true,
      });
      var stream = ytdl(link, { filter: filter });

      stream.on('info', function(info, format) {
        scope.urlReply(format.url, 302, '', {
          Location: 'http://somehost.com/somefile.mp4'
        });
        scope.urlReplyWithFile('http://somehost.com/somefile.mp4', 200, video);
      });

      var filestream = fs.createReadStream(video);
      streamEqual(filestream, stream, function(err, equal) {
        if (err) return done(err);
        scope.done();
        assert.ok(equal);
        done();
      });
    });
  });

  describe('destroy stream', function() {
    describe('immediately', function() {
      it('Doesn\'t start the download', function(done) {
        var scope = nock(id, {
          dashmpd: true,
          dashmpd2: true,
          get_video_info: true,
        });
        var stream = ytdl(link, { filter: filter });
        stream.destroy();

        stream.on('response', function() {
          done(new Error('Should not emit `response`'));
        });
        stream.on('info', function() {
          scope.done();
          done();
        });
      });
    });

    describe('after download has started', function() {
      it('Download is incomplete', function(done) {
        var scope = nock(id, {
          dashmpd: true,
          dashmpd2: true,
          get_video_info: true,
        });
        var stream = ytdl(link, { filter: filter });

        stream.on('info', function(info, format) {
          scope.urlReplyWithFile(format.url, 200, video);
        });

        stream.on('response', function(res) {
          stream.destroy();
          res.on('data', function() {
            done(new Error('Should not emit `data`'));
          });
        });

        stream.on('abort', done);
      });
    });
  });
});
