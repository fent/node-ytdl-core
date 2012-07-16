var ytdl   = require('..')
  , assert = require('assert')
  , path   = require('path')
  , fs     = require('fs')
  , url    = require('url')
  , nock   = require('nock')
  ;


var HOST = 'http://www.youtube.com'
  , INFO_GET = '/get_video_info?hl=en_US&video_id='
  , URL = 'http://www.youtube.com/watch?v='

  , id1 = '_HSylqgVYQI'
  , url1 = URL + id1
  , mockget1 = INFO_GET + id1
  , page1 = path.join(__dirname, 'files', 'video1.html')
  , info1 = JSON.parse(fs.readFileSync(
    path.join(__dirname, 'files', 'info1.json'), 'utf8'))

  , id2 = '_HSylqgyyyy'
  , url2 = URL + id2
  , mockget2 = INFO_GET + id2
  , page2 = path.join(__dirname, 'files', 'video2.html')

  , id3 = '_HSylqgVYQI'
  , url3 = URL + id3
  , mockget3 = INFO_GET + id3
  , video3 = path.join(__dirname, 'files', 'video3.flv')
  , output3 = path.join(__dirname, 'files', 'output3.flv')

  , id4 = '_HSylqgVYQI'
  , url4 = URL + id4
  , mockget4 = INFO_GET + id4
  , video4 = path.join(__dirname, 'files', 'video4.flv')
  , output4 = path.join(__dirname, 'files', 'output4.flv')
  ;


describe('ytdl.getInfo()', function() {
  it('Returns correct video metainfo', function(done) {
    nock(HOST)
      .get(mockget1)
      .replyWithFile(200, page1)
      ;

    ytdl.getInfo(url1, function(err, info) {
      if (err) return done(err);

      assert.deepEqual(info, info1);
      done();
    });

  });
});


describe('ytdl.getInfo() from a non-existant video', function() {
  it('Should give an error', function(done) {
    nock(HOST)
      .get(mockget2)
      .replyWithFile(200, page2)
      ;

    ytdl.getInfo(url2, function(err, info) {
      assert.ok(err);
      assert.equal(err.message, 'Error 100: The video you have requested is not available. If you have recently uploaded this video, you may need to wait a few minutes for the video to process.');
      done();
    });
  });
});


describe('download', function() {
  it('Should be pipeable and data equal to stored file', function(done) {
    var stream = ytdl(url3, {
      filter: function(format) { return format.container === 'mp4' }
    });
    stream.pipe(fs.createWriteStream(output3));

    var infoEmitted = false;
    stream.on('info', function(info, format) {
      infoEmitted = true;
      var uri = url.parse(format.url);
      nock(uri.protocol + '//' + uri.host)
        .get(uri.path)
        .replyWithFile(200, video3)
        ;
    });

    stream.on('error', done);
    stream.on('end', function() {
      assert.ok(infoEmitted);
      var oldData = fs.readFileSync(video3);
      var newData = fs.readFileSync(output3);
      fs.unlink(output3);
      assert.deepEqual(oldData.length, newData.length);
      done();
    });
  });
});


describe('download with `start`', function() {
  it('Should be pipeable and data equal to stored file', function(done) {
    var stream = ytdl(url3, { start: '5s' });
    stream.pipe(fs.createWriteStream(output4));

    stream.on('info', function(info, format) {
      var uri = url.parse(format.url);
      nock(uri.protocol + '//' + uri.host)
        .get(uri.path)
        .replyWithFile(200, video4)
        ;
    });

    stream.on('error', done);
    stream.on('end', function() {
      var oldData = fs.readFileSync(video4);
      var newData = fs.readFileSync(output4);
      fs.unlink(output4);
      assert.deepEqual(oldData.length, newData.length);
      done();
    });
  });
});
