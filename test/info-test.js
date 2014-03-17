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

      /*
      require('fs').writeFileSync(__dirname + '/files/info/' + id + '.json',
                                  JSON.stringify(info, null, '  '), 'utf8');
                                  */
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
        assert.equal(info.formats[0].url, 'http://r18---sn-p5qlsnel.googlevideo.com/videoplayback?ipbits=0&pcm2fr=yes&ms=au&source=youtube&expire=1395056606&upn=IbNQU3vvsoI&mv=m&gcr=us&sparams=clen%2Cdur%2Cgcr%2Cgir%2Cid%2Cip%2Cipbits%2Citag%2Clmt%2Cpcm2fr%2Csource%2Cupn%2Cexpire&mt=1395034934&gir=yes&itag=135&sver=3&fexp=935639%2C927904%2C937417%2C913434%2C936910%2C936913%2C934022&clen=23348629&ip=198.255.191.225&lmt=1394263110967443&key=yt5&id=a49934a7ef7c5f37&dur=287.622&ratebypass=yes&signature=EE22619FCEED11CABB7A6089FD7926E367FDF087.93C7C30CF3FD5A68A87532D130A269618128901E');
        scope1.done();
        scope2.done();
        done();
      });
    });
  });
});
