var util   = require('../lib/util');
var assert = require('assert');


describe('util.parseTime()', function() {
  it('Returns milliseconds if given numbers', function() {
    assert.equal(1234, util.parseTime(1234));
  });

  it('Works with minutes and seconds', function() {
    assert.equal(2 * 60000 + 36 * 1000, util.parseTime('2m36s'));
  });

  it('And even only hours and milliseconds', function() {
    assert.equal(3 * 3600000 + 4200, util.parseTime('3h4200ms'));
  });
});


describe('util.sortFormats()', function() {
  it('Sorts available formats from highest to lowest quality', function() {
    var formats = [
      { itag: '18',
        type: 'video/mp4; codecs="avc1.42001E, mp4a.40.2"',
        quality: 'medium',
        container: 'mp4',
        resolution: '360p',
        encoding: 'H.264',
        bitrate: '0.5',
        audioEncoding: 'aac',
        audioBitrate: 96 },
      { itag: '43',
        type: 'video/webm; codecs="vp8.0, vorbis"',
        quality: 'medium',
        container: 'webm',
        resolution: '360p',
        encoding: 'VP8',
        bitrate: '0.5',
        audioEncoding: 'vorbis',
        audioBitrate: 128 },
      { itag: '133',
        type: 'video/mp4; codecs="avc1.4d400d"',
        quality: null,
        container: 'mp4',
        resolution: '240p',
        encoding: 'H.264',
        bitrate: '0.2.0.3',
        audioEncoding: null,
        audioBitrate: null },
      { itag: '36',
        type: 'video/3gpp; codecs="mp4v.20.3, mp4a.40.2"',
        quality: 'small',
        container: '3gp',
        resolution: '240p',
        encoding: 'MPEG-4 Visual',
        bitrate: '0.17',
        audioEncoding: 'aac',
        audioBitrate: 38 },
      { itag: '5',
        type: 'video/x-flv',
        quality: 'small',
        container: 'flv',
        resolution: '240p',
        encoding: 'Sorenson H.283',
        bitrate: '0.25',
        audioEncoding: 'mp3',
        audioBitrate: 64 },
      { itag: '160',
        type: 'video/mp4; codecs="avc1.4d400c"',
        quality: null,
        container: 'mp4',
        resolution: '144p',
        encoding: 'H.264',
        bitrate: '0.1',
        audioEncoding: null,
        audioBitrate: null },
      { itag: '17',
        type: 'video/3gpp; codecs="mp4v.20.3, mp4a.40.2"',
        quality: 'small',
        container: '3gp',
        resolution: '144p',
        encoding: 'MPEG-4 Visual',
        bitrate: '0.05',
        audioEncoding: 'aac',
        audioBitrate: 24 },
      { itag: '140',
        type: 'audio/mp4; codecs="mp4a.40.2"',
        quality: null,
        container: 'mp4',
        resolution: null,
        enoding: null,
        bitrate: null,
        audioEncoding: 'aac',
        audioBitrate: 128 },
    ];

    var expected = ['43', '18', '5', '133', '36', '160', '17', '140'];
    formats.sort(util.sortFormats);
    for (var i = 0, l = formats.length; i < l; i ++) {
      assert.equal(formats[i].itag, expected[i]);
    }
  });
});


describe('util.between()', function() {
  it('`left` positioned at the start', function() {
    var rs = util.between('<b>hello there friend</b>', '<b>', '</b>');
    assert.equal(rs, 'hello there friend');
  });

  it('somewhere in the middle', function() {
    var rs = util.between('something everything nothing', ' ', ' ');
    assert.equal(rs, 'everything');
  });

  it('not found', function() {
    var rs = util.between('oh oh _where_ is it', '<b>', '</b>');
    assert.equal(rs, '');
  });

  it('`right` before `left`', function() {
    var rs = util.between('>>> a <this> and that', '<', '>');
    assert.equal(rs, 'this');
  });
});


describe('util.getVideoID()', function() {
  it('Retrives the video ID from the url', function() {
    var id;
    id = util.getVideoID('http://www.youtube.com/watch?v=VIDEO_ID');
    assert(id, 'VIDEO_ID');
    id = util.getVideoID('http://youtu.be/VIDEO_ID');
    assert(id, 'VIDEO_ID');
  });
});
