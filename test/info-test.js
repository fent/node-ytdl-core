var assert = require('assert-diff');
var nock   = require('./nock');
var ytdl   = require('..');

var VIDEO_BASE = 'https://www.youtube.com/watch?v=';


describe('ytdl.getInfo()', function() {
  describe('from a video', function() {
    var id = 'pJk0p-98Xzc';
    var url = VIDEO_BASE + id;
    var expectedInfo = require('./files/' + id + '/info.json');

    it('Retrieves correct metainfo', function(done) {
      nock(id, {
        dashmpd: true,
        dashmpd2: [true, 403],
        player: 'new-en_US-vflIUNjzZ',
        get_video_info: true,
      });

      ytdl.getInfo(url, function(err, info) {
        if (err) return done(err);
        assert.ok(info.description.length);
        assert.equal(info.formats.length, expectedInfo.formats.length);
        done();
      });
    });

    describe('use `ytdl.downloadFromInfo()`', function() {
      it('Retrives video file', function(done) {
        var stream = ytdl.downloadFromInfo(expectedInfo);
        stream.on('info', function(info, format) {
          var scope = nock.url(format.url)
            .reply(200);
          after(scope.done);
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
      nock(id, { get_video_info: true });
      ytdl.getInfo(url, function(err) {
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
      nock(id, {
        dashmpd: true,
        embed: true,
        get_video_info: true,
      });
      ytdl.getInfo(url, function(err, info) {
        if (err) return done(err);
        assert.deepEqual(info, expectedInfo);
        done();
      });
    });
  });
});
