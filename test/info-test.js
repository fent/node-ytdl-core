var assert = require('assert');
var path   = require('path');
var nock   = require('nock');
var ytdl   = require('..');

var YT_HOST = 'http://www.youtube.com';
var INFO_PATH = '/get_video_info?hl=en_US&el=detailpage&video_id=';
var VIDEO_BASE = 'http://www.youtube.com/watch?v=';


describe('ytdl.getInfo()', function() {
  it('Returns correct video metainfo', function(done) {
    var id = '_HSylqgVYQI';
    var url = VIDEO_BASE + id;
    var page = path.resolve(__dirname, 'files/video_info/' + id);
    var expectedInfo = require('./files/info/' + id + '.json');

    nock(YT_HOST)
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
    var url = VIDEO_BASE + id;
    var page = path.resolve(__dirname, 'files/video_info/notfound');

    it('Should give an error', function(done) {
      nock(YT_HOST)
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
    var url = VIDEO_BASE + id;
    var page = path.resolve(__dirname, 'files/video_info/invalidparams');

    it('Should give an error', function(done) {
      nock(YT_HOST)
        .get(INFO_PATH + id)
        .replyWithFile(200, page);

      ytdl.getInfo(url, function(err) {
        assert.ok(err);
        assert.equal(err.message, 'Error 2: Invalid parameters.');
        done();
      });
    });
  });

  describe('with `downloadURL` set', function() {
    var id = 'pJk0p-98Xzc';
    var url = VIDEO_BASE + id;
    var page = path.resolve(__dirname, 'files/video_info/' + id);
    var watch = path.resolve(__dirname, 'files/watch/' + id);
    var html5player = path.resolve(
      __dirname, 'files/html5player/html5player-en_US-vfl5aDZwb.js');

    it('Retrieves and deciphers signature', function(done) {
      var scope1 = nock(YT_HOST)
        .get(INFO_PATH + id)
        .replyWithFile(200, page)
        .get('/watch?v=' + id)
        .replyWithFile(200, watch);

      var scope2 = nock('http://s.ytimg.com')
        .get('/yts/jsbin/html5player-en_US-vfl5aDZwb.js')
        .replyWithFile(200, html5player);

      ytdl.getInfo(url, { downloadURL: true }, function(err, info) {
        if (err) return done(err);

        assert.ok(info);
        assert.ok(info.formats);
        /*jshint maxlen:false */
        assert.equal(info.formats[0].url, 'http://r18---sn-ab5l6ne6.googlevideo.com/videoplayback?gcr=us&sparams=gcr%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Cratebypass%2Csource%2Cupn%2Cexpire&source=youtube&upn=-UoupiUZdKw&fexp=902408%2C908548%2C916600%2C916625%2C924213%2C924217%2C924222%2C930008%2C934024%2C934030%2C934804%2C939950%2C941359%2C945035%2C946505&key=yt5&ip=198.255.191.225&mv=m&mt=1405514836&initcwndbps=1517000&expire=1405537200&ratebypass=yes&itag=43&mws=yes&ipbits=0&sver=3&id=o-AJdt6VTJxG54d6aGuO7icka1Xfo40WZS0RMZaU2A8hYU&ms=au&signature=66A118F186CA492DEE6A72D17F1BB079EFEDD985.57C58CEEEDAAFDD4CF5D5F644384D63CAEBE191E');
        scope1.done();
        scope2.done();
        done();
      });
    });
  });
});
