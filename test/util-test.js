var util   = require('../lib/util');
var assert = require('assert-diff');
var fs     = require('fs');
var path   = require('path');


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
var getItags = function(format) { return format.itag; };



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
  describe('with `highest` given', function() {
    it('Sorts available formats from highest to lowest quality', function() {
      var sortedFormats = formats.slice();
      sortedFormats.sort(util.sortFormats);
      var itags = sortedFormats.map(getItags);
      assert.deepEqual(itags, [
        '43', '18', '5', '36', '17', '133', '160', '140'
      ]);
    });
  });
});


describe('util.chooseFormat', function() {
  var sortedFormats = formats.slice();
  sortedFormats.sort(util.sortFormats);

  describe('with no options', function() {
    it('Chooses highest quality', function() {
      var format = util.chooseFormat(sortedFormats, {});
      assert.equal(format.itag, '43');
    });
  });

  describe('with lowest quality wanted', function() {
    it('Chooses lowest itag', function() {
      var format = util.chooseFormat(sortedFormats, { quality: 'lowest' });
      assert.equal(format.itag, '140');
    });
  });

  describe('with itag given', function() {
    it('Chooses matching format', function() {
      var format = util.chooseFormat(sortedFormats, { quality: 5 });
      assert.equal(format.itag, '5');
    });

    describe('that is not in the format list', function() {
      it('Returns an error', function() {
        var err = util.chooseFormat(sortedFormats, { quality: 42 });
        assert.equal(err.message, 'No such format found: 42');
      });
    });
  });

  describe('with list of itags given', function() {
    it('Chooses matching format', function() {
      var format = util.chooseFormat(sortedFormats, { quality: [99, 160, 18] });
      assert.equal(format.itag, '160');
    });
  });
});


describe('util.filterFormats', function() {
  it('Tries to find formats that match', function() {
    var filter = function(format) { return format.container === 'mp4'; };
    var itags = util.filterFormats(formats, filter).map(getItags);
    assert.deepEqual(itags, ['18', '133', '160', '140']);
  });

  describe('that doesn\'t match any format', function() {
    it('Returns an empty list', function() {
      var list = util.filterFormats(formats, function() { return false; });
      assert.equal(list.length, 0);
    });
  });

  describe('with `video` given', function() {
    it('Returns only matching formats', function() {
      var itags = util.filterFormats(formats, 'video').map(getItags);
      assert.deepEqual(itags, ['18', '43', '133', '36', '5', '160', '17']);
    });
  });

  describe('with `videoonly` given', function() {
    it('Returns only matching formats', function() {
      var itags = util.filterFormats(formats, 'videoonly').map(getItags);
      assert.deepEqual(itags, ['133', '160']);
    });
  });

  describe('with `audio` given', function() {
    it('Returns only matching formats', function() {
      var itags = util.filterFormats(formats, 'audio').map(getItags);
      assert.deepEqual(itags, ['18', '43', '36', '5', '17', '140']);
    });
  });

  describe('with `audioonly` given', function() {
    it('Returns only matching formats', function() {
      var itags = util.filterFormats(formats, 'audioonly').map(getItags);
      assert.deepEqual(itags, ['140']);
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
    id = util.getVideoID('http://youtube.com/v/VIDEO_ID');
    assert(id, 'VIDEO_ID');
    id = util.getVideoID('http://youtube.com/embed/VIDEO_ID');
    assert(id, 'VIDEO_ID');
    id = util.getVideoID('RAW_VIDEOID'); // Video ids are 11-character long
    assert(id, 'RAW_VIDEOID');
  });
});


describe('util.parseFormats()', function() {
  it('Retrieves video formats from info', function() {
    var info = require('./files/info/pJk0p-98Xzc_preparsed.json');
    var formats = util.parseFormats(info);
    assert.ok(formats);
    assert.equal(formats.length, 14);
  });
});


describe('util.getVideoDescription()', function() {
  it('Retrieves formatted video description', function() {
    var html = fs.readFileSync(path.resolve(__dirname,
      'files/util/multiline-video-description'), 'utf8');
    var cleanDescription = util.getVideoDescription(html);
    assert.ok(cleanDescription);
    assert.equal(cleanDescription, 'Some Title\n' +
      'Line 1\n' +
      '"Line 2"\n' +
      '1  First Song  5:30\n' +
      '2  Second Song  5:42');
  });
});


describe('util.parallel()', function() {
  describe('Multiple asynchronous functions', function() {
    it('Calls callback with results', function(done) {
      var funcs = [];
      for (var i = 0; i < 5; i++) {
        funcs.push(function(i, callback) {
          setTimeout(function() {
            callback(null, i);
          }, ~~(Math.random() * 50));
        }.bind(null, i));
      }
      util.parallel(funcs, function(err, results) {
        assert.ok(!err);
        for (var i = 0, len = results.length; i < len; i++) {
          assert.equal(results[i], i);
        }
        done();
      });
    });
  });
  
  describe('Zero functions', function() {
    it('Still calls callback', function(done) {
      util.parallel([], done);
    });
  });

  describe('Functions call callback twice', function() {
    it('Only calls final callback once', function(done) {
      util.parallel([
        function(callback) { setTimeout(callback, 10); },
        function(callback) { setTimeout(callback, 10); }
      ], done);
    });
  });
});


describe('util.assignDeep()', function() {
  it('Merges object into another', function() {
    var target = { headers: { one: 1, two: 2 }, my: 'mine' };
    var source = { headers: { one: 100 } };
    util.assignDeep(target, source);
    assert.deepEqual(target, { headers: { one: 100, two: 2 }, my: 'mine' });
  });
});
