var assert      = require('assert');
var path        = require('path');
var fs          = require('fs');
var streamEqual = require('stream-equal');
var nock        = require('./nock');
var ytdl        = require('..');


describe('Download video', function() {
  var id = '_HSylqgVYQI';
  var video = path.resolve(__dirname, 'files/videos/' + id + '/video.flv');
  var filter = function(format) { return format.container === 'mp4'; };
  var testInfo = require('./files/videos/pJk0p-98Xzc/expected_info.json');

  beforeEach(function() {
    ytdl.cache.reset();
  });

  it('Should be pipeable and data equal to stored file', function(done) {
    var scope = nock(id, {
      dashmpd: true,
      get_video_info: true,
      player: 'player-en_US-vflV3n15C',
    });
    var stream = ytdl(id, { filter: filter });

    stream.on('info', function(info, format) {
      scope.urlReplyWithFile(format.url, 200, video);
    });

    var filestream = fs.createReadStream(video);
    streamEqual(filestream, stream, function(err, equal) {
      assert.ifError(err);
      scope.done();
      assert.ok(equal);
      done();
    });
  });

  describe('that redirects', function() {
    it('Should download file after redirect', function(done) {
      var scope = nock(id, {
        dashmpd: true,
        get_video_info: true,
        player: 'player-en_US-vflV3n15C',
      });
      var stream = ytdl(id, { filter: filter });

      stream.on('info', function(info, format) {
        scope.urlReply(format.url, 302, '', {
          Location: 'http://somehost.com/somefile.mp4'
        });
        scope.urlReplyWithFile('http://somehost.com/somefile.mp4', 200, video);
      });

      var filestream = fs.createReadStream(video);
      streamEqual(filestream, stream, function(err, equal) {
        assert.ifError(err);
        scope.done();
        assert.ok(equal);
        done();
      });
    });

    describe('too many times', function() {
      it('Emits error after 3 retries', function(done) {
        var id = '_HSylqgVYQI';
        var scope = nock(id, {
          dashmpd: true,
          get_video_info: true,
          player: 'player-en_US-vflV3n15C',
        });
        var stream = ytdl(id);
        stream.on('info', function(info, format) {
          scope.urlReply(format.url, 302, '', {
            Location: 'http://somehost.com/redirect1.mp4'
          });
          scope.urlReply('http://somehost.com/redirect1.mp4', 302, '', {
            Location: 'http://somehost.com/redirect2.mp4'
          });
          scope.urlReply('http://somehost.com/redirect2.mp4', 302, '', {
            Location: 'http://somehost.com/redirect3.mp4'
          });
        });

        stream.on('error', function(err) {
          assert.ok(err);
          scope.done();
          assert.equal(err.message, 'Too many redirects');
          done();
        });
      });
    });
  });

  describe('destroy stream', function() {
    describe('immediately', function() {
      it('Doesn\'t start the download', function(done) {
        var scope = nock(id, {
          dashmpd: true,
          get_video_info: true,
          player: 'player-en_US-vflV3n15C',
        });
        var stream = ytdl(id, { filter: filter });
        stream.destroy();

        stream.on('request', function() {
          done(new Error('Should not emit `request`'));
        stream.on('response', function() {
        });
          done(new Error('Should not emit `response`'));
        });
        stream.on('info', function() {
          scope.done();
          done();
        });
      });
    });

    describe('right after request is made', function() {
      it('Doesn\'t start the download', function(done) {
        var scope = nock(id, {
          dashmpd: true,
          get_video_info: true,
          player: 'player-en_US-vflV3n15C',
        });
        var stream = ytdl(id, { filter: filter });

        stream.on('request', function() {
          stream.destroy();
          scope.done();
          done();
        });
        stream.on('response', function() {
          done(new Error('Should not emit `response`'));
        });
      });
    });

    describe('after download has started', function() {
      it('Download is incomplete', function(done) {
        var scope = nock(id, {
          dashmpd: true,
          get_video_info: true,
          player: 'player-en_US-vflV3n15C',
        });
        var stream = ytdl(id, { filter: filter });

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

  describe('With range', function() {
    it('Range added to download URL', function(done) {
      var stream = ytdl.downloadFromInfo(testInfo, { range: '500-1000' });
      stream.on('info', function(info, format) {
        nock.url(format.url + '&range=500-1000').reply(200, '');
      });
      stream.resume();
      stream.on('error', done);
      stream.on('end', done);
    });
  });

  describe('With a bad filter', function() {
    it('Emits error', function(done) {
      var stream = ytdl.downloadFromInfo(testInfo, {
        filter: function() {}
      });
      stream.on('error', function(err) {
        assert.ok(err);
        assert.ok(/No formats found/.test(err.message));
        done();
      });
    });
  });
});
