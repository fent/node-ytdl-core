var assert = require('assert-diff');
var nock   = require('./nock');
var ytdl   = require('..');


describe('ytdl.getInfo()', function() {
  beforeEach(function() {
    ytdl.cache.reset();
  });

  describe('from a video', function() {
    var id = 'pJk0p-98Xzc';
    var expectedInfo = require('./files/videos/' + id + '/expected_info.json');

    it('Retrieves correct metainfo', function(done) {
      var scope = nock(id, {
        dashmpd: true,
        get_video_info: true,
        player: 'player-en_US-vflV3n15C',
      });

      ytdl.getInfo(id, function(err, info) {
        assert.ifError(err);
        scope.done();
        assert.ok(info.description.length);
        assert.equal(info.formats.length, expectedInfo.formats.length);
        done();
      });
    });

    describe('Use `ytdl.downloadFromInfo()`', function() {
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
        ytdl.getInfo(id, {
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

        ytdl.getInfo(id, {
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

    it('Should give an error', function(done) {
      var scope = nock(id);
      ytdl.getInfo(id, function(err) {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'This video does not exist.');
        done();
      });
    });
  });

  describe('from an age restricted video', function() {
    var id = 'rIqCiJKWx9I';
    var expectedInfo = require('./files/videos/' + id + '-age-restricted/expected_info.json');

    it('Returns correct video metainfo', function(done) {
      var scope = nock(id, {
        type: 'age-restricted',
        dashmpd: true,
        embed: true,
        player: 'player-en_US-vflV3n15C',
        get_video_info: true,
      });
      ytdl.getInfo(id, function(err, info) {
        assert.ifError(err);
        scope.done();
        assert.equal(info.formats.length, expectedInfo.formats.length);
        done();
      });
    });
  });

  describe('from a rental', function() {
    var id = 'SyKPsFRP_Oc';
    it('Returns a detailed error about it', function(done) {
      var scope = nock(id, {
        type: 'rental',
        get_video_info: true,
      });
      ytdl.getInfo(id, function(err) {
        assert.ok(err);
        scope.done();
        assert.ok(/requires payment/.test(err.message));
        done();
      });
    });
  });
});
