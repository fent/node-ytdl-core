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
      __dirname, 'files/html5player/html5player-ima-en_US-vflWnCYSF.js');

    it('Retrieves and deciphers signature', function(done) {
      var scope1 = nock(YT_HOST)
        .get(INFO_PATH + id)
        .replyWithFile(200, page)
        .get('/watch?v=' + id)
        .replyWithFile(200, watch);

      var scope2 = nock('http://s.ytimg.com')
        .get('/yts/jsbin/html5player-ima-en_US-vflWnCYSF.js')
        .replyWithFile(200, html5player);

      ytdl.getInfo(url, { downloadURL: true }, function(err, info) {
        if (err) return done(err);

        assert.ok(info);
        assert.ok(info.formats);
        /*jshint maxlen:false */
        assert.equal(info.formats[0].url, 'http://r18---sn-p5qlsnel.googlevideo.com/videoplayback?ipbits=0&pcm2fr=yes&source=youtube&expire=1395056606&mv=m&gcr=us&sparams=gcr%2Cid%2Cip%2Cipbits%2Citag%2Cpcm2fr%2Cratebypass%2Csource%2Cupn%2Cexpire&mt=1395034934&ratebypass=yes&itag=43&sver=3&fexp=935639%2C927904%2C937417%2C913434%2C936910%2C936913%2C934022&ms=au&ip=198.255.191.225&upn=v8kXZrwLiYE&key=yt5&id=a49934a7ef7c5f37&signature=57E557BDCE7708F05DD2201C73E0B52DB97F7408.912BA9B4A8D51463A031BD72F0B111CBFBE66B35');
        scope1.done();
        scope2.done();
        done();
      });
    });
  });
});
