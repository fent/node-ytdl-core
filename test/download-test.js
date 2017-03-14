const assert      = require('assert');
const path        = require('path');
const fs          = require('fs');
const streamEqual = require('stream-equal');
const nock        = require('./nock');
const ytdl        = require('..');


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
        });
        stream.on('response', function() {
          done(new Error('Should not emit `response`'));
        });
        stream.on('info', function() {
          scope.done();
          done();
        });
      });
    });

    describe('right after request is made', function() {
      after(function() { nock.cleanAll(); });
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
        stream.on('info', function(info, format) {
          nock.url(format.url).reply(200, 'aaaaaaaaaaaa');
        });
        stream.on('response', function() {
          throw new Error('Should not emit `response`');
        });
        stream.on('data', function() {
          throw new Error('Should not emit `data`');
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

  describe('With begin', function() {
    it('Begin added to download URL', function(done) {
      var stream = ytdl.downloadFromInfo(testInfo, { begin: '1m' });
      stream.on('info', function(info, format) {
        nock.url(format.url + '&begin=60000').reply(200, '');
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
