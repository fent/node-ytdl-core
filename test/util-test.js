var fs     = require('fs');
var path   = require('path');
var qs     = require('querystring');
var util   = require('../lib/util');
var assert = require('assert');


var formats = [
  { itag          : '18',
    type          : 'video/mp4; codecs="avc1.42001E, mp4a.40.2"',
    quality       : 'medium',
    container     : 'mp4',
    resolution    : '360p',
    encoding      : 'H.264',
    bitrate       : '0.5',
    audioEncoding : 'aac',
    audioBitrate  : 96 },
  { itag          : '43',
    type          : 'video/webm; codecs="vp8.0, vorbis"',
    quality       : 'medium',
    container     : 'webm',
    resolution    : '360p',
    encoding      : 'VP8',
    bitrate       : '0.5',
    audioEncoding : 'vorbis',
    audioBitrate  : 128 },
  { itag          : '133',
    type          : 'video/mp4; codecs="avc1.4d400d"',
    quality       : null,
    container     : 'mp4',
    resolution    : '240p',
    encoding      : 'H.264',
    bitrate       : '0.15-0.3',
    audioEncoding : null,
    audioBitrate  : null },
  { itag          : '36',
    type          : 'video/3gpp; codecs="mp4v.20.3, mp4a.40.2"',
    quality       : 'small',
    container     : '3gp',
    resolution    : '240p',
    encoding      : 'MPEG-4 Visual',
    bitrate       : '0.17',
    audioEncoding : 'aac',
    audioBitrate  : 38 },
  { itag          : '5',
    type          : 'video/x-flv',
    quality       : 'small',
    container     : 'flv',
    resolution    : '240p',
    encoding      : 'Sorenson H.283',
    bitrate       : '0.25',
    audioEncoding : 'mp3',
    audioBitrate  : 64 },
  { itag          : '160',
    type          : 'video/mp4; codecs="avc1.4d400c"',
    quality       : null,
    container     : 'mp4',
    resolution    : '144p',
    encoding      : 'H.264',
    bitrate       : '0.1',
    audioEncoding : null,
    audioBitrate  : null },
  { itag          : '17',
    type          : 'video/3gpp; codecs="mp4v.20.3, mp4a.40.2"',
    quality       : 'small',
    container     : '3gp',
    resolution    : '144p',
    encoding      : 'MPEG-4 Visual',
    bitrate       : '0.05',
    audioEncoding : 'aac',
    audioBitrate  : 24 },
  { itag          : '140',
    type          : 'audio/mp4; codecs="mp4a.40.2"',
    quality       : null,
    container     : 'mp4',
    resolution    : null,
    enoding       : null,
    bitrate       : null,
    audioEncoding : 'aac',
    audioBitrate  : 128 },
];


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
    var expected = ['43', '18', '5', '36', '17', '133', '160', '140'];
    formats.sort(util.sortFormats);
    for (var i = 0, l = formats.length; i < l; i ++) {
      assert.equal(formats[i].itag, expected[i]);
    }
  });
});


describe('util.chooseFormat', function() {
  describe('with no options', function() {
    it('Chooses highest quality', function() {
      var format = util.chooseFormat(formats, {});
      assert.equal(format.itag, '43');
    });
  });

  describe('with a filter', function() {
    it('Tries to find a format that matches', function() {
      var format = util.chooseFormat(formats, {
        filter: function(format) { return format.container === 'mp4'; }
      });
      assert.equal(format.itag, '18');
    });

    describe('that doesn\'t match any format', function() {
      it('Returns an error instead', function() {
      var err = util.chooseFormat(formats, {
        filter: function() { return false; }
      });
      assert.equal(err.message, 'no formats found with custom filter');
      });
    });
  });

  describe('with lowest quality wanted', function() {
    it('Chooses lowest itag', function() {
      var format = util.chooseFormat(formats, { quality: 'lowest' });
      assert.equal(format.itag, '140');
    });
  });

  describe('with itag given', function() {
    it('Chooses matching format', function() {
      var format = util.chooseFormat(formats, { quality: 5 });
      assert.equal(format.itag, '5');
    });

    describe('that is not in the format list', function() {
      it('Returns an error', function() {
        var err = util.chooseFormat(formats, { quality: 42 });
        assert.equal(err.message, 'No such format found: 42');
      });
    });
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


describe('util.parseFormats()', function() {
  it('Retrieves video formats from info', function() {
    var page = fs.readFileSync(
      path.resolve(__dirname, 'files/video_info/_HSylqgVYQI'), 'utf8');
    var info = qs.parse(page);
    var formats = util.parseFormats(info);
    assert.ok(formats);
    assert.equal(formats.length, 11);
  });
});
