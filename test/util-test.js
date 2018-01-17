const ytdl   = require('..');
const util   = require('../lib/util');
const fs     = require('fs');
const path   = require('path');
const assert = require('assert-diff');


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
  { itag          : '139',
    type          : 'audio/mp4; codecs="mp4a.40.2"',
    quality       : null,
    container     : 'mp4',
    resolution    : null,
    enoding       : null,
    bitrate       : null,
    audioEncoding : null,
    audioBitrate  : null },
  { itag          : '138',
    type          : 'audio/mp4; codecs="mp4a.40.2"',
    quality       : null,
    container     : 'mp4',
    resolution    : null,
    enoding       : null,
    bitrate       : null,
    audioEncoding : null,
    audioBitrate  : null },
];
var getItags = (format) => format.itag;


describe('util.parseTime()', () => {
  it('Returns milliseconds if given numbers', () => {
    assert.equal(1234, util.parseTime(1234));
  });

  it('Works with minutes and seconds', () => {
    assert.equal(2 * 60000 + 36 * 1000, util.parseTime('2m36s'));
  });

  it('And even only hours and milliseconds', () => {
    assert.equal(3 * 3600000 + 4200, util.parseTime('3h4200ms'));
  });
});


describe('util.sortFormats()', () => {
  describe('With `highest` given', () => {
    it('Sorts available formats from highest to lowest quality', () => {
      var sortedFormats = formats.slice();
      sortedFormats.sort(util.sortFormats);
      var itags = sortedFormats.map(getItags);
      assert.deepEqual(itags, [
        '43', '18', '5', '36', '17', '133', '160', '140', '139', '138'
      ]);
    });
  });
});


describe('util.chooseFormat', () => {
  var sortedFormats = formats.slice();
  sortedFormats.sort(util.sortFormats);

  it('Is exposed in module', () => {
    assert.equal(ytdl.chooseFormat, util.chooseFormat);
  });

  describe('with no options', () => {
    it('Chooses highest quality', () => {
      var format = util.chooseFormat(sortedFormats, {});
      assert.equal(format.itag, '43');
    });
  });

  describe('With lowest quality wanted', () => {
    it('Chooses lowest itag', () => {
      var format = util.chooseFormat(sortedFormats, { quality: 'lowest' });
      assert.equal(format.itag, '138');
    });
  });

  describe('With highest audio quality wanted', () => {
    it('Chooses highest audio itag', () => {
      var format = util.chooseFormat(formats, { quality: 'highestaudio' });
      assert.equal(format.itag, '140');
    });
  });

  describe('With highest video quality wanted', () => {
    it('Chooses highest video itag', () => {
      var format = util.chooseFormat(formats, { quality: 'highestvideo' });
      assert.equal(format.itag, '18');
    });
  });

  describe('With itag given', () => {
    it('Chooses matching format', () => {
      var format = util.chooseFormat(sortedFormats, { quality: 5 });
      assert.equal(format.itag, '5');
    });

    describe('that is not in the format list', () => {
      it('Returns an error', () => {
        var err = util.chooseFormat(sortedFormats, { quality: 42 });
        assert.equal(err.message, 'No such format found: 42');
      });
    });
  });

  describe('With list of itags given', () => {
    it('Chooses matching format', () => {
      var format = util.chooseFormat(sortedFormats, { quality: [99, 160, 18] });
      assert.equal(format.itag, '160');
    });
  });

  describe('With format object given', () => {
    it('Chooses given format without searching', () => {
      var format = util.chooseFormat(sortedFormats, { format: formats[0] });
      assert.equal(format, formats[0]);
    });
  });

  describe('With filter given', () => {
    describe('that matches a format', () => {
      it('Chooses a format', () => {
        var format = util.chooseFormat(sortedFormats, {
          filter: (format) => format.container === 'mp4',
        });
        assert.equal(format.itag, '18');
      });
    });

    describe('that does not match a format', () => {
      it('Returns an error', () => {
        var err = util.chooseFormat(sortedFormats, { filter: () => {} });
        assert.equal(err.message, 'No formats found with custom filter');
      });
    });
  });
});


describe('util.filterFormats', () => {
  it('Tries to find formats that match', () => {
    var filter = (format) => format.container === 'mp4';
    var itags = util.filterFormats(formats, filter).map(getItags);
    assert.deepEqual(itags, ['18', '133', '160', '140', '139', '138']);
  });

  it('Is exposed in module', () => {
    assert.equal(ytdl.filterFormats, util.filterFormats);
  });

  describe('that doesn\'t match any format', () => {
    it('Returns an empty list', () => {
      var list = util.filterFormats(formats, () => false);
      assert.equal(list.length, 0);
    });
  });

  describe('With `video` given', () => {
    it('Returns only matching formats', () => {
      var itags = util.filterFormats(formats, 'video').map(getItags);
      assert.deepEqual(itags, ['18', '43', '133', '36', '5', '160', '17']);
    });
  });

  describe('With `videoonly` given', () => {
    it('Returns only matching formats', () => {
      var itags = util.filterFormats(formats, 'videoonly').map(getItags);
      assert.deepEqual(itags, ['133', '160']);
    });
  });

  describe('With `audio` given', () => {
    it('Returns only matching formats', () => {
      var itags = util.filterFormats(formats, 'audio').map(getItags);
      assert.deepEqual(itags, ['18', '43', '36', '5', '17', '140']);
    });
  });

  describe('With `audioonly` given', () => {
    it('Returns only matching formats', () => {
      var itags = util.filterFormats(formats, 'audioonly').map(getItags);
      assert.deepEqual(itags, ['140']);
    });
  });

  describe('With `audioandvideo` given', () => {
    it('Returns only matching formats', () => {
      var itags = util.filterFormats(formats, 'audioandvideo').map(getItags);
      assert.deepEqual(itags, ['18', '43', '36', '5', '17']);
    });
  });

  describe('With unsupported filter given', () => {
    it('Returns only matching formats', () => {
      assert.throws(() => {
        util.filterFormats(formats, 'aaaa').map(getItags);
      }, /not supported/);
    });
  });
});


describe('util.between()', () => {
  it('`left` positioned at the start', () => {
    var rs = util.between('<b>hello there friend</b>', '<b>', '</b>');
    assert.equal(rs, 'hello there friend');
  });

  it('somewhere in the middle', () => {
    var rs = util.between('something everything nothing', ' ', ' ');
    assert.equal(rs, 'everything');
  });

  it('not found', () => {
    var rs = util.between('oh oh _where_ is it', '<b>', '</b>');
    assert.equal(rs, '');
  });

  it('`right` before `left`', () => {
    var rs = util.between('>>> a <this> and that', '<', '>');
    assert.equal(rs, 'this');
  });

  it('`right` not found', () => {
    var rs = util.between('something [around[ somewhere', '[', ']');
    assert.equal(rs, '');
  });
});


describe('util.getURLVideoID()', () => {
  it('Is exposed in module', () => {
    assert.equal(ytdl.getURLVideoID, util.getURLVideoID);
  });

  it('Retrives the video ID from the url', () => {
    var id;
    id = util.getVideoID('http://www.youtube.com/watch?v=RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('http://youtu.be/RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('http://youtube.com/v/RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('http://youtube.com/embed/RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('https://www.twitch.tv/user/v/1234');
    assert.equal(id.message, 'No video id found: https://www.twitch.tv/user/v/1234');
    id = util.getVideoID('www.youtube.com');
    assert.equal(id.message, 'No video id found: www.youtube.com');
    id = util.getVideoID('http://www.youtube.com/playlist?list=1337');
    assert.equal(id.message, 'Video id (playlist) does not match expected format (/^[a-zA-Z0-9-_]{11}$/)');
  });
});


describe('util.getVideoID()', () => {
  it('Is exposed in module', () => {
    assert.equal(ytdl.getVideoID, util.getVideoID);
  });

  it('Retrives the video ID from the url', () => {
    var id;
    id = util.getVideoID('http://www.youtube.com/watch?v=RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('http://youtu.be/RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('http://youtube.com/v/RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('http://youtube.com/embed/RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('RAW_VIDEOID'); // Video ids are 11-character long
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('https://www.twitch.tv/user/v/1234');
    assert.equal(id.message, 'No video id found: https://www.twitch.tv/user/v/1234');
    id = util.getVideoID('www.youtube.com');
    assert.equal(id.message, 'No video id found: www.youtube.com');
    id = util.getVideoID('http://www.youtube.com/playlist?list=1337');
    assert.equal(id.message, 'Video id (playlist) does not match expected format (/^[a-zA-Z0-9-_]{11}$/)');
  });
});


describe('util.validateID()', () => {
  it('Is exposed in module', () => {
    assert.equal(ytdl.validateID, util.validateID);
  });

  it('Retrieves whether a string includes a video ID', () => {
    var rs;
    rs = util.validateID('RAW_VIDEOID');
    assert.equal(rs, true);
    rs = util.validateID('http://www.youtube.com/watch?v=RAW_VIDEOID');
    assert.equal(rs, false);
    rs = util.validateID('https://www.twitch.tv/user/v/1234');
    assert.equal(rs, false);
  });
});


describe('util.validateURL()', () => {
  it('Is exposed in module', () => {
    assert.equal(ytdl.validateURL, util.validateURL);
  });

  it('Retrieves whether a string includes a parsable video ID', () => {
    var rs;
    rs = util.validateURL('http://www.youtube.com/watch?v=RAW_VIDEOID');
    assert.equal(rs, true);
    rs = util.validateURL('RAW_VIDEOID');
    assert.equal(rs, false);
    rs = util.validateURL('https://www.twitch.tv/user/v/1234');
    assert.equal(rs, false);
  });
});


describe('util.parseFormats()', () => {
  var info = require('./files/util/pJk0p-98Xzc_preparsed.json');
  it('Retrieves video formats from info', () => {
    var myinfo = Object.assign({}, info);
    var formats = util.parseFormats(myinfo);
    assert.ok(formats);
    assert.equal(formats.length, 15);
  });
});


describe('util.getVideoDescription()', () => {
  it('Retrieves formatted video description', (done) => {
    fs.readFile(path.resolve(__dirname,
      'files/util/multiline-video-description'), 'utf8', (err, html) => {
      assert.ifError(err);
      var cleanDescription = util.getVideoDescription(html);
      assert.equal(cleanDescription, 'Some Title\n' +
        'Line 1\n' +
        '"Line 2"\n' +
        '1  First Song  5:30\n' +
        '2  Second Song  5:42');
      done();
    });
  });

  it('Fallbacks to empty description if element not found', (done) => {
    fs.readFile(path.resolve(__dirname,
      'files/util/bad-watch-page'), 'utf8', (err, html) => {
      assert.ifError(err);
      var cleanDescription = util.getVideoDescription(html);
      assert.equal(cleanDescription, '');
      done();
    });
  });
});


describe('util.getAuthor()', () => {
  it('Returns video author object', (done) => {
    fs.readFile(path.resolve(__dirname, 'files/util/related-video'),
      'utf8', (err, html) => {
        assert.ifError(err);
        var authorObj = util.getAuthor(html);
        assert.deepEqual(authorObj, {
          id: 'UC_aEa8K-EOJ3D6gOs7HcyNg',
          name: 'NoCopyrightSounds',
          avatar: 'https://www.youtube.com/hisprofile.pic',
          user: 'NoCopyrightSounds',
          channel_url:
            'https://www.youtube.com/channel/UC_aEa8K-EOJ3D6gOs7HcyNg',
          user_url: 'https://www.youtube.com/user/NoCopyrightSounds',
        });
        done();
      });
  });

  it('Returns empty object if author not found', (done) => {
    fs.readFile(path.resolve(__dirname,
      'files/util/bad-watch-page'), 'utf8', (err, html) => {
      assert.ifError(err);
      var authorObj = util.getAuthor(html);
      assert.deepEqual(authorObj, {});
      done();
    });
  });
});


describe('util.getPublished()', () => {
  it('Retrieves formatted published date', (done) => {
    fs.readFile(path.resolve(__dirname, 'files/util/related-video'),
      'utf8', (err, html) => {
        assert.ifError(err);
        var publishedTimestamp = util.getPublished(html);
        assert.equal(publishedTimestamp, 1416355200000);
        done();
      });
  });
});


describe('util.getRelatedVideos()', () => {
  it('Returns related videos', (done) => {
    fs.readFile(path.resolve(__dirname, 'files/util/related-video'),
      'utf8', (err, html) => {
        assert.ifError(err);
        var relatedVideos = util.getRelatedVideos(html);
        assert.deepEqual(relatedVideos, [
          {
            author: 'NoCopyrightSounds',
            iurlmq: 'iurlmq1',
            title: 'Alan Walker - Spectre [NCS Release]',
            length_seconds: '227',
            id: 'AOeY-nDp7hI',
            session_data: 'itct=secondvid',
            endscreen_autoplay_session_data: 'itct=endscreen_firstvid',
            short_view_count_text: '119 Mio. Aufrufe',
            iurlhq_webp: 'first.pic'
          },
          {
            playlist_title: 'Mix – Alan Walker - Fade [NCS Release]',
            list: 'RDbM7SZ5SBzyY',
            playlist_iurlmq: 'iurlmq2',
            session_data: 'itct=firstvid%3D%3D',
            playlist_length: '0',
            thumbnail_ids: 'AOeY-nDp7hI',
            video_id: 'AOeY-nDp7hI',
            playlist_iurlhq: 'second.pic'
          }
        ]);
        done();
      });
  });

  it('Returns empty array when error parsing', (done) => {
    fs.readFile(path.resolve(__dirname,
      'files/util/bad-watch-page'), 'utf8', (err, html) => {
      assert.ifError(err);
      var relatedVideos = util.getRelatedVideos(html);
      assert.deepEqual(relatedVideos, []);
      done();
    });
  });
});


describe('util.parallel()', () => {
  describe('Multiple asynchronous functions', () => {
    it('Calls callback with results', (done) => {
      'use strict';
      var funcs = [];
      for (let i = 0; i < 5; i++) {
        funcs.push((callback) => {
          setTimeout(() => { callback(null, i); }, ~~(Math.random() * 10));
        });
      }
      util.parallel(funcs, (err, results) => {
        assert.ifError(err);
        for (var i = 0, len = results.length; i < len; i++) {
          assert.equal(results[i], i);
        }
        done();
      });
    });

    describe('where one of them errors', () => {
      it('Gives an error', (done) => {
        'use strict';
        var funcs = [];
        for (let i = 0; i < 5; i++) {
          funcs.push((callback) => {
            setImmediate(() => {
              if (i === 0) {
                callback(new Error('Something went wrong'));
              } else {
                callback(null, i);
              }
            });
          });
        }
        util.parallel(funcs, (err) => {
          assert.ok(err);
          setImmediate(done);
        });
      });
    });
  });

  describe('Zero functions', () => {
    it('Still calls callback', (done) => {
      util.parallel([], done);
    });
  });

  describe(' call callback twice', () => {
    it('Only calls final callback once', (done) => {
      util.parallel([
        (callback) => { setTimeout(callback, 10); },
        (callback) => { setTimeout(callback, 10); }
      ], done);
    });
  });
});


describe('util.fromHumanTime', () => {
  it('Time format 00:00:00.000', () => {
    assert.equal(util.fromHumanTime('25.000'), 25000);
    assert.equal(util.fromHumanTime('05:30'), 60000 * 5 + 30000);
    assert.equal(util.fromHumanTime('01:05:30'), 60000 * 60 + 60000 * 5 + 30000);
    assert.equal(util.fromHumanTime('1:30.123'), 60000 + 30000 + 123);
  });

  it('Time format 0ms, 0s, 0m, 0h', () => {
    assert.equal(util.fromHumanTime('2ms'), 2);
    assert.equal(util.fromHumanTime('1m'), 60000);
    assert.equal(util.fromHumanTime('1m10s'), 60000 + 10000);
    assert.equal(util.fromHumanTime('2hm10s500ms'), 3600000 * 2 + 10000 + 500);
  });

  it('No format', () => {
    assert.equal(util.fromHumanTime('1000'), 1000);
    assert.equal(util.fromHumanTime(200), 200);
  });
});
