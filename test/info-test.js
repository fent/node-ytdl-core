var assert = require('assert-diff');
var nock   = require('./nock');
var ytdl   = require('..');

var VIDEO_BASE = 'https://www.youtube.com/watch?v=';


describe('ytdl.getInfo()', function() {
  beforeEach(function() {
    ytdl.cache.reset();
  });

  describe('from a video', function() {
    var id = 'pJk0p-98Xzc';
    var url = VIDEO_BASE + id;
    var expectedInfo = require('./files/' + id + '/info.json');

    it('Retrieves correct metainfo', function(done) {
      var scope = nock(id, {
        dashmpd: true,
        get_video_info: true,
        player: 'player-en_US-vflV3n15C',
      });

      ytdl.getInfo(url, function(err, info) {
        assert.ifError(err);
        scope.done();
        assert.ok(info.description.length);
        assert.equal(info.formats.length, expectedInfo.formats.length);
        done();
      });
    });

    describe('use `ytdl.downloadFromInfo()`', function() {
      it('Retrives video file', function(done) {
        var stream = ytdl.downloadFromInfo(expectedInfo);
        var scope;
        stream.on('info', function(info, format) {
          scope = nock.url(format.url)
            .reply(200);
        });
        stream.resume();
        stream.on('error', done);
        stream.on('end', function() {
          scope.done();
          done();
        });
      });
    });

    describe('Using a custom request function', function() {
      it('Calls that function instead', function(done) {
        var scope = nock(id, {
          dashmpd: true,
          get_video_info: true,
          player: 'player-en_US-vflV3n15C',
        });

        var originalRequest = require('../lib/request');
        var called = 0;
        ytdl.getInfo(url, {
          request: function(url, options, callback) {
            called++;
            return originalRequest(url, options, callback);
          }
        }, function(err) {
          assert.ifError(err);
          scope.done();
          assert.equal(called, 4);
          done();
        });
      });
    });

    describe('Pass request options', function() {
      it('Request gets called with more headers', function(done) {
        var scope = nock(id, {
          dashmpd: true,
          get_video_info: true,
          player: 'player-en_US-vflV3n15C',
          headers: { 'X-Hello': /^42$/ }
        });

        ytdl.getInfo(url, {
          requestOptions: { headers: { 'X-Hello': '42' }}
        }, function(err) {
          assert.ifError(err);
          scope.done();
          done();
        });
      });
    });
  });

  describe('from a non-existant video', function() {
    var id = 'unknown-vid';
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
        player: 'player-en_US-vflV3n15C',
        get_video_info: true,
      });
      ytdl.getInfo(url, function(err, info) {
        assert.ifError(err);
        scope.done();
        assert.equal(info.formats.length, expectedInfo.formats.length);
        done();
      });
    });
  });
});
