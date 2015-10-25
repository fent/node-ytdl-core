var assert = require('assert-diff');
var nock   = require('./nock');
var ytdl   = require('..');

var VIDEO_PATH = '/watch?v=';
var VIDEO_BASE = 'https://www.youtube.com' + VIDEO_PATH;


describe('ytdl.getInfo()', function() {
  describe('from a video', function() {
    var id = 'pJk0p-98Xzc';
    var url = VIDEO_BASE + id;
    var expectedInfo = require('./files/' + id + '/info.json');

    it('Retrieves correct metainfo', function(done) {
      var scope = nock(id, {
        dashmpd: true,
        player: 'new-en_US-vflIUNjzZ',
      });

      ytdl.getInfo(url, function(err, info) {
        scope.done();
        if (err) return done(err);
        assert.deepEqual(info, expectedInfo);
        done();
      });
    });

    describe('hit the same video twice', function() {
      it('Gets html5player tokens from cache', function(done) {
        var scope = nock(id, { dashmpd: true });
        ytdl.getInfo(url, function(err, info) {
          scope.done();
          if (err) return done(err);
          assert.ok(info);
          done();
        });
      });
    });

    describe('use `ytdl.downloadFromInfo()`', function() {
      it('Retrives video file', function(done) {
        var stream = ytdl.downloadFromInfo(expectedInfo);
        stream.on('info', function(info, format) {
          nock.url(format.url)
            .reply(200);
        });
        stream.resume();
        stream.on('error', done);
        stream.on('end', done);
      });
    });
  });

  describe('from a non-existant video', function() {
    var id = 'not-found';
    var url = VIDEO_BASE + id;

    it('Should give an error', function(done) {
      var scope = nock(id);
      ytdl.getInfo(url, function(err) {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'Video not found');
        done();
      });
    });
  });

  describe('from an age restricted video', function() {
    var id = 'rIqCiJKWx9I';
    var url = VIDEO_BASE + id;
    var expectedInfo = require('./files/' + id + '/info.json');

    it('Returns correct video metainfo', function(done) {
      var scope = nock(id, {
        dashmpd: true,
        embed: true,
        get_video_info: true,
      });
      ytdl.getInfo(url, function(err, info) {
        scope.done();
        if (err) return done(err);
        assert.deepEqual(info, expectedInfo);
        done();
      });
    });
  });
});
