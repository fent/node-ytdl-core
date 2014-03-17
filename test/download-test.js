var assert      = require('assert');
var path        = require('path');
var fs          = require('fs');
var url         = require('url');
var nock        = require('nock');
var streamEqual = require('stream-equal');
var ytdl        = require('..');

var YT_HOST = 'http://www.youtube.com';
var INFO_PATH = '/get_video_info?hl=en_US&el=detailpage&video_id=';
var VIDEO_BASE = 'http://www.youtube.com/watch?v=';


describe('Download video', function() {
  it('Should be pipeable and data equal to stored file', function(done) {
    var id = '_HSylqgVYQI';
    var link = VIDEO_BASE + id;
    var page = path.resolve(__dirname, 'files/video_info/' + id);
    var video = path.resolve(__dirname, 'files/video/' + id + '.flv');
    var filter = function(format) { return format.container === 'mp4'; };

    nock(YT_HOST)
      .get(INFO_PATH + id)
      .replyWithFile(200, page);

    var format = require('./files/info/' + id + '_download.json')
      .formats.filter(filter)[0];
    var parsed = url.parse(format.url);
    var scope = nock(parsed.protocol + '//' + parsed.host)
      .get(parsed.path)
      .replyWithFile(200, video);

    var stream = ytdl(link, { filter: filter });

    var infoEmitted = false;
    stream.on('info', function() {
      infoEmitted = true;
    });

    var filestream = fs.createReadStream(video);
    streamEqual(filestream, stream, function(err, equal) {
      if (err) return done(err);

      scope.done();
      assert.ok(infoEmitted);
      assert.ok(equal);
      done();
    });
  });
});
