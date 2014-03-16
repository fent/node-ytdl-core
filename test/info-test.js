var assert = require('assert');
var path   = require('path');
var nock   = require('nock');
var ytdl   = require('..');

var INFO_HOST = 'http://www.youtube.com';
var INFO_PATH = '/get_video_info?hl=en_US&el=detailpage&video_id=';
var BASE = 'http://www.youtube.com/watch?v=';


describe('ytdl.getInfo()', function() {
  it('Returns correct video metainfo', function(done) {
    var id = '_HSylqgVYQI';
    var url = BASE + id;
    var page = path.resolve(__dirname, 'files/video_info/' + id);
    var expectedInfo = require('./files/info/' + id + '.json');

    nock(INFO_HOST)
      .get(INFO_PATH + id)
      .replyWithFile(200, page);


    ytdl.getInfo(url, function(err, info) {
      if (err) return done(err);

      assert.deepEqual(info, expectedInfo);
      done();
    });
  });

  describe('from a non-existant video', function() {
    var id = '_HSylqgyyyy';
    var url = BASE + id;
    var page = path.resolve(__dirname, 'files/video_info/notfound');

    it('Should give an error', function(done) {
      nock(INFO_HOST)
        .get(INFO_PATH + id)
        .replyWithFile(200, page);

      ytdl.getInfo(url, function(err) {
        assert.ok(err);
        assert.equal(err.message, 'Error 100: This video does not exist.');
        done();
      });
    });
  });

  describe('with an invalid video ID', function() {
    var id = 'yoyoo';
    var url = BASE + id;
    var page = path.resolve(__dirname, 'files/video_info/invalidparams');

    it('Should give an error', function(done) {
      nock(INFO_HOST)
        .get(INFO_PATH + id)
        .replyWithFile(200, page);

      ytdl.getInfo(url, function(err) {
        assert.ok(err);
        assert.equal(err.message, 'Error 2: Invalid parameters.');
        done();
      });
    });
  });
});
