const ytdl   = require('..');
const assert = require('assert-diff');
const nock   = require('./nock');
const spy    = require('sinon').spy;
const muk    = require('muk-prop');


describe('ytdl.getInfo()', function() {
  beforeEach(function() {
    ytdl.cache.reset();
  });

  describe('From a regular video', function() {
    var id = 'pJk0p-98Xzc';
    var expectedInfo = require('./files/videos/' + id + '-vevo/expected_info.json');

    it('Retrieves correct metainfo', function(done) {
      var scope = nock(id, {
        type: 'vevo',
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

    describe('Pass request options', function() {
      it('Request gets called with more headers', function(done) {
        var scope = nock(id, {
          type: 'vevo',
          dashmpd: true,
          get_video_info: true,
          player: 'player-en_US-vflV3n15C',
          headers: { 'X-Hello': '42' }
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

    describe('Using the promise API', function() {
      it('Retrieves correct metainfo', function(done) {
        var scope = nock(id, {
          type: 'vevo',
          dashmpd: true,
          get_video_info: true,
          player: 'player-en_US-vflV3n15C',
        });

        ytdl.getInfo(id)
          .then(function(info) {
            scope.done();
            assert.ok(info.description.length);
            assert.equal(info.formats.length, expectedInfo.formats.length);
            done();
          })
          .catch(done);
      });

      describe('On a video that fails', function() {
        var id = 'unknown-vid';

        it('Error is catched', function(done) {
          var scope = nock(id);
          var p = ytdl.getInfo(id);
          p.catch(function(err) {
            scope.done();
            assert.ok(err);
            assert.equal(err.message, 'This video does not exist.');
            done();
          });
        });
      });
    });
  });

  describe('From a non-existant video', function() {
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

  describe('From an age restricted video', function() {
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

    describe('In any language', function() {
      it('Returns correct video metainfo', function(done) {
        var scope = nock(id, {
          type: 'age-restricted',
          watch: 'german',
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
  });

  describe('From a rental', function() {
    var id = 'SyKPsFRP_Oc';
    it('Returns an error about it', function(done) {
      var scope = nock(id, {
        type: 'rental',
        get_video_info: true,
      });
      ytdl.getInfo(id, function(err) {
        assert.ok(err);
        scope.done();
        assert.ok(/requires purchase/.test(err.message));
        done();
      });
    });
  });

  describe('From a video that is not yet available', function() {
    var id = 'iC9YT-5aUhI';
    it('Returns an error', function(done) {
      var scope = nock(id, {
        type: 'unavailable',
        get_video_info: true,
      });
      ytdl.getInfo(id, function(err) {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'This video is unavailable');
        done();
      });
    });
  });

  describe('With a bad video ID', function() {
    var id = 'bad';
    it('Returns an error', function(done) {
      ytdl.getInfo(id, function(err) {
        assert.ok(err);
        assert.equal(err.message, 'No video id found: bad');
        done();
      });
    });
  });

  describe('When there is an error requesting one of the pages', function() {
    it('Fails gracefully when unable to get watch page', function(done) {
      var id = '_HSylqgVYQI';
      var scope = nock(id, {
        type: 'regular',
        statusCode: 500,
      });
      ytdl.getInfo(id, function(err) {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'Status code: 500');
        done();
      });
    });

    it('Fails gracefully when unable to find config', function(done) {
      var id = '_HSylqgVYQI';
      var scope = nock(id, {
        type: 'regular',
        watch: 'no-config',
      });
      ytdl.getInfo(id, function(err) {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'Could not find player config');
        done();
      });
    });

    it('Fails gracefully when unable to parse config', function(done) {
      var id = '_HSylqgVYQI';
      var scope = nock(id, {
        type: 'regular',
        watch: 'bad-config',
      });
      ytdl.getInfo(id, function(err) {
        scope.done();
        assert.ok(err);
        assert.ok(/Error parsing config:/.test(err.message));
        done();
      });
    });

    it('Fails gracefully when unable to get embed page', function(done) {
      var id = 'rIqCiJKWx9I';
      var scope = nock(id, {
        type: 'age-restricted',
        embed: [true, 500]
      });
      ytdl.getInfo(id, function(err) {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'Status code: 500');
        done();
      });
    });

    it('Fails gracefully when unable to get video info page', function(done) {
      var id = '_HSylqgVYQI';
      var scope = nock(id, {
        type: 'regular',
        get_video_info: [true, 500]
      });
      ytdl.getInfo(id, function(err) {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'Status code: 500');
        done();
      });
    });

    it('Fails gracefully when unable to get html5player tokens', function(done) {
      var id = '_HSylqgVYQI';
      var scope = nock(id, {
        type: 'regular',
        get_video_info: true,
        player: [true, 500, 'player-vflppxuSE'],
      });
      ytdl.getInfo(id, function(err) {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'Status code: 500');
        done();
      });
    });

    it('Fails gracefully when unable to get m3u8 playlist', function(done) {
      var id = 'N4bU1i-XAxE';
      var scope = nock(id, {
        type: 'live',
        m3u8: [true, 500],
        get_video_info: true,
        player: 'player-en_US-vfl5-0t5t',
      });
      ytdl.getInfo(id, function(err) {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'Status code: 500');
        done();
      });
    });

    it('Fails gracefully when no formats are found', function(done) {
      var id = 'pJk0p-98Xzc';
      var scope = nock(id, {
        type: 'vevo',
        watch: 'no-formats',
        dashmpd: [true, 200, 'no-formats'],
        get_video_info: [true, 200, 'no-formats'],
        player: 'player-en_US-vflV3n15C',
      });
      ytdl.getInfo(id, function(err) {
        scope.done();
        assert.ok(err);
        assert.equal(err.message, 'No formats found');
        done();
      });
    });

    it('Fails gracefully when unable to parse player_response', function(done) {
      var id = '_HSylqgVYQI';
      var scope = nock(id, {
        type: 'regular',
        watch: 'bad-player-response',
        get_video_info: true,
      });
      ytdl.getInfo(id, function(err) {
        scope.done();
        assert.ok(err);
        assert.ok(/Error parsing `player_response`:/.test(err.message));
        done();
      });
    });
  });

  describe('When encountering a format not yet known with debug', function() {
    it('Warns the console', function(done) {
      var warn = spy();
      muk(console, 'warn', warn);
      after(muk.restore);

      var id = '_HSylqgVYQI';
      var scope = nock(id, {
        type: 'regular',
        dashmpd: true,
        get_video_info: [true, 200, 'unknown-format'],
        player: 'player-vflppxuSE',
      });
      ytdl.getInfo(id, { debug: true}, function(err, info) {
        assert.ifError(err);
        scope.done();
        assert.ok(warn.called);
        assert.equal(warn.getCall(0).args[0],
          'No format metadata for itag 9999 found');
        assert.ok(info);
        done();
      });
    });
  });
});
