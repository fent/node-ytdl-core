const ytdl = require('..');
const util = require('../lib/util');
const assert = require('assert-diff');


const formats = [
  { itag: '18',
    mimeType: 'video/mp4; codecs="avc1.42001E, mp4a.40.2"',
    container: 'mp4',
    qualityLabel: '360p',
    codecs: 'avc1.42001E, mp4a.40.2',
    bitrate: 500000,
    audioBitrate: 96 },
  { itag: '19',
    mimeType: 'audio/mp4; codecs="avc1.42001E, mp4a.40.2"',
    container: 'mp4',
    qualityLabel: null,
    codecs: 'avc1.42001E, mp4a.40.2',
    bitrate: 500000,
    audioBitrate: 96 },
  { itag: '43',
    mimeType: 'video/webm; codecs="vp8.0, vorbis"',
    container: 'webm',
    qualityLabel: '360p',
    codecs: 'vp8.0, vorbis',
    bitrate: 500000,
    audioBitrate: 128 },
  { itag: '133',
    mimeType: 'video/mp4; codecs="avc1.4d400d"',
    container: 'mp4',
    qualityLabel: '240p',
    codecs: 'avc1.4d400d',
    bitrate: 300000,
    audioBitrate: null },
  { itag: '36',
    mimeType: 'video/3gpp; codecs="mp4v.20.3, mp4a.40.2"',
    container: '3gp',
    qualityLabel: '240p',
    codecs: 'mp4v.20.3, mp4a.40.2',
    bitrate: 170000,
    audioBitrate: 38 },
  { itag: '5',
    mimeType: 'video/flv; codecs="Sorenson H.283, mp3"',
    container: 'flv',
    qualityLabel: '240p',
    codecs: 'Sorenson H.283, mp3',
    bitrate: 250000,
    audioBitrate: 64 },
  { itag: '160',
    mimeType: 'video/mp4; codecs="avc1.4d400c"',
    container: 'mp4',
    qualityLabel: '144p',
    codecs: 'avc1.4d400c',
    bitrate: 100000,
    audioBitrate: null },
  { itag: '17',
    mimeType: 'video/3gpp; codecs="mp4v.20.3, mp4a.40.2"',
    container: '3gp',
    qualityLabel: '144p @ 60fps',
    codecs: 'mp4v.20.3, mp4a.40.2',
    bitrate: 50000,
    audioBitrate: 24 },
  { itag: '140',
    mimeType: 'audio/mp4; codecs="mp4a.40.2"',
    container: 'mp4',
    qualityLabel: null,
    codecs: 'mp4a.40.2',
    bitrate: null,
    audioBitrate: 128 },
  { itag: '139',
    mimeType: 'audio/mp4; codecs="mp4a.40.2"',
    container: 'mp4',
    qualityLabel: null,
    codecs: 'mp4a.40.2',
    bitrate: null,
    audioBitrate: null },
  { itag: '138',
    mimeType: 'audio/mp4; codecs="mp4a.40.2"',
    container: 'mp4',
    qualityLabel: null,
    codecs: 'mp4a.40.2',
    bitrate: null,
    audioBitrate: null },
];
const getItags = format => format.itag;


describe('util.sortFormats()', () => {
  describe('With `highest` given', () => {
    it('Sorts available formats from highest to lowest quality', () => {
      const sortedFormats = formats.slice();
      sortedFormats.sort(util.sortFormats);
      const itags = sortedFormats.map(getItags);
      assert.deepEqual(itags, [
        '43', '18', '5', '36', '17', '133', '160', '19', '140', '139', '138',
      ]);
    });
  });
});


describe('util.chooseFormat', () => {
  const sortedFormats = formats.slice();
  sortedFormats.sort(util.sortFormats);

  it('Is exposed in module', () => {
    assert.equal(ytdl.chooseFormat, util.chooseFormat);
  });

  describe('with no options', () => {
    it('Chooses highest quality', () => {
      const format = util.chooseFormat(sortedFormats, {});
      assert.equal(format.itag, '43');
    });
  });

  describe('With lowest quality wanted', () => {
    it('Chooses lowest itag', () => {
      const format = util.chooseFormat(sortedFormats, { quality: 'lowest' });
      assert.equal(format.itag, '138');
    });
  });

  describe('With highest audio quality wanted', () => {
    it('Chooses highest audio itag', () => {
      const format = util.chooseFormat(formats, { quality: 'highestaudio' });
      assert.equal(format.itag, '43');
    });
  });

  describe('With lowest audio quality wanted', () => {
    it('Chooses lowest audio itag', () => {
      const format = util.chooseFormat(formats, { quality: 'lowestaudio' });
      assert.equal(format.itag, '17');
    });
  });

  describe('With highest video quality wanted', () => {
    it('Chooses highest video itag', () => {
      const format = util.chooseFormat(formats, { quality: 'highestvideo' });
      assert.equal(format.itag, '18');
    });
  });

  describe('With lowest video quality wanted', () => {
    it('Chooses lowest video itag', () => {
      const format = util.chooseFormat(formats, { quality: 'lowestvideo' });
      assert.equal(format.itag, '17');
    });
  });

  describe('With itag given', () => {
    it('Chooses matching format', () => {
      const format = util.chooseFormat(sortedFormats, { quality: 5 });
      assert.equal(format.itag, '5');
    });

    describe('that is not in the format list', () => {
      it('Returns an error', () => {
        assert.throws(() => {
          util.chooseFormat(sortedFormats, { quality: 42 });
        }, /No such format found: [0-9]+/);
      });
    });
  });

  describe('With list of itags given', () => {
    it('Chooses matching format', () => {
      const format = util.chooseFormat(sortedFormats, { quality: [99, 160, 18] });
      assert.equal(format.itag, '160');
    });
  });

  describe('With format object given', () => {
    it('Chooses given format without searching', () => {
      const format = util.chooseFormat(sortedFormats, { format: formats[0] });
      assert.equal(format, formats[0]);
    });
  });

  describe('With filter given', () => {
    describe('that matches a format', () => {
      it('Chooses a format', () => {
        const choosenFormat = util.chooseFormat(sortedFormats, {
          filter: format => format.container === 'mp4',
        });
        assert.equal(choosenFormat.itag, '18');
      });
    });

    describe('that does not match a format', () => {
      it('Returns an error', () => {
        assert.throws(() => {
          util.chooseFormat(sortedFormats, { filter: () => false });
        }, /No such format found/);
      });
    });
  });
});


describe('util.filterFormats', () => {
  it('Tries to find formats that match', () => {
    const filter = format => format.container === 'mp4';
    const itags = util.filterFormats(formats, filter).map(getItags);
    assert.deepEqual(itags, ['18', '19', '133', '160', '140', '139', '138']);
  });

  it('Is exposed in module', () => {
    assert.equal(ytdl.filterFormats, util.filterFormats);
  });

  describe('that doesn\'t match any format', () => {
    it('Returns an empty list', () => {
      const list = util.filterFormats(formats, () => false);
      assert.equal(list.length, 0);
    });
  });

  describe('With `video` given', () => {
    it('Returns only matching formats', () => {
      const itags = util.filterFormats(formats, 'video').map(getItags);
      assert.deepEqual(itags, ['18', '43', '133', '36', '5', '160', '17']);
    });
  });

  describe('With `videoonly` given', () => {
    it('Returns only matching formats', () => {
      const itags = util.filterFormats(formats, 'videoonly').map(getItags);
      assert.deepEqual(itags, ['133', '160']);
    });
  });

  describe('With `audio` given', () => {
    it('Returns only matching formats', () => {
      const itags = util.filterFormats(formats, 'audio').map(getItags);
      assert.deepEqual(itags, ['18', '19', '43', '36', '5', '17', '140']);
    });
  });

  describe('With `audioonly` given', () => {
    it('Returns only matching formats', () => {
      const itags = util.filterFormats(formats, 'audioonly').map(getItags);
      assert.deepEqual(itags, ['19', '140']);
    });
  });

  describe('With `audioandvideo` given', () => {
    it('Returns only matching formats', () => {
      const itags = util.filterFormats(formats, 'audioandvideo').map(getItags);
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
    const rs = util.between('<b>hello there friend</b>', '<b>', '</b>');
    assert.equal(rs, 'hello there friend');
  });

  it('somewhere in the middle', () => {
    const rs = util.between('something everything nothing', ' ', ' ');
    assert.equal(rs, 'everything');
  });

  it('not found', () => {
    const rs = util.between('oh oh _where_ is it', '<b>', '</b>');
    assert.equal(rs, '');
  });

  it('`right` before `left`', () => {
    const rs = util.between('>>> a <this> and that', '<', '>');
    assert.equal(rs, 'this');
  });

  it('`right` not found', () => {
    const rs = util.between('something [around[ somewhere', '[', ']');
    assert.equal(rs, '');
  });
});


describe('util.getURLVideoID()', () => {
  it('Is exposed in module', () => {
    assert.equal(ytdl.getURLVideoID, util.getURLVideoID);
  });

  it('Retrives the video ID from the url', () => {
    let id;
    id = util.getVideoID('http://www.youtube.com/watch?v=RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('http://youtu.be/RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('http://youtube.com/v/RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('http://youtube.com/embed/RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('https://music.youtube.com/watch?v=RAW_VIDEOID&list=RDAMVMmtLgabce8KQ');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('https://gaming.youtube.com/watch?v=RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    assert.throws(() => {
      util.getVideoID('https://any.youtube.com/watch?v=RAW_VIDEOID');
    }, /Not a YouTube domain/);
    assert.throws(() => {
      util.getVideoID('https://www.twitch.tv/user/v/1234');
    }, /Not a YouTube domain/);
    assert.throws(() => {
      util.getVideoID('www.youtube.com');
    }, /No video id found: \S+/);
    assert.throws(() => {
      util.getVideoID('http://www.youtube.com/playlist?list=1337');
    }, /No video id found: \S+/);
    assert.throws(() => {
      util.getVideoID('http://www.youtube.com/watch?v=asdf$%^ddf-');
    }, /Video id \([^)]+\) does not match expected format/);
  });
});


describe('util.getVideoID()', () => {
  it('Is exposed in module', () => {
    assert.equal(ytdl.getVideoID, util.getVideoID);
  });

  it('Retrives the video ID from the url', () => {
    let id;
    id = util.getVideoID('http://www.youtube.com/watch?v=RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('http://youtu.be/RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('http://youtube.com/v/RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('http://youtube.com/embed/RAW_VIDEOID');
    assert.equal(id, 'RAW_VIDEOID');
    id = util.getVideoID('_LENGTH_11_');
    assert.equal(id, '_LENGTH_11_');
    assert.throws(() => {
      util.getVideoID('http://youtube.com/RAW_VIDEOID');
    }, /No video id found: \S+/);
    assert.throws(() => {
      util.getVideoID('https://www.twitch.tv/user/v/1234');
    }, /Not a YouTube domain/);
    assert.throws(() => {
      util.getVideoID('www.youtube.com');
    }, /No video id found: \S+/);
    assert.throws(() => {
      util.getVideoID('http://www.youtube.com/playlist?list=1337');
    }, /No video id found: \S+/);
  });
});


describe('util.validateID()', () => {
  it('Is exposed in module', () => {
    assert.equal(ytdl.validateID, util.validateID);
  });

  it('Retrieves whether a string includes a video ID', () => {
    let rs;
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
    let rs;
    rs = util.validateURL('http://www.youtube.com/watch?v=RAW_VIDEOID');
    assert.equal(rs, true);
    rs = util.validateURL('RAW_VIDEOID');
    assert.equal(rs, false);
    rs = util.validateURL('https://www.twitch.tv/user/v/1234');
    assert.equal(rs, false);
    rs = util.validateURL('https://www.youtube.com/wartwzwerwer');
    assert.equal(rs, false);
  });
});


describe('util.addFormatMeta()', () => {
  it('Adds extra metadata to a format', () => {
    let format = util.addFormatMeta({
      itag: 94,
      url: 'http://video.com/1/2.ts',
    });
    assert.deepEqual(format, {
      itag: 94,
      url: 'http://video.com/1/2.ts',
      mimeType: 'video/ts; codecs="H.264, aac"',
      container: 'ts',
      codecs: 'H.264, aac',
      qualityLabel: '480p',
      bitrate: 800000,
      audioBitrate: 128,
      live: false,
      isHLS: false,
      isDashMPD: false,
    });
  });
  describe('With an unknown itag', () => {
    it('Adds does not add extra metadata to a format', () => {
      let format = util.addFormatMeta({
        itag: -1,
        url: 'http://video.com/3/4.ts',
      });
      assert.deepEqual(format, {
        itag: -1,
        url: 'http://video.com/3/4.ts',
        container: null,
        codecs: null,
        live: false,
        isHLS: false,
        isDashMPD: false,
      });
    });
  });
  describe('util.cutAfterJSON()', () => {
    it('Works with simple JSON', () => {
      assert.equal(util.cutAfterJSON('{"a": 1, "b": 1}'), '{"a": 1, "b": 1}');
    });
    it('Cut extra characters after JSON', () => {
      assert.equal(util.cutAfterJSON('{"a": 1, "b": 1}abcd'), '{"a": 1, "b": 1}');
    });
    it('Tolerant to string constants', () => {
      assert.equal(util.cutAfterJSON('{"a": "}1", "b": 1}abcd'), '{"a": "}1", "b": 1}');
    });
    it('Tolerant to string with escaped quoting', () => {
      assert.equal(util.cutAfterJSON('{"a": "\\"}1", "b": 1}abcd'), '{"a": "\\"}1", "b": 1}');
    });
    it('works with nested', () => {
      assert.equal(
        util.cutAfterJSON('{"a": "\\"1", "b": 1, "c": {"test": 1}}abcd'),
        '{"a": "\\"1", "b": 1, "c": {"test": 1}}',
      );
    });
    it('Works with utf', () => {
      assert.equal(
        util.cutAfterJSON('{"a": "\\"фыва", "b": 1, "c": {"test": 1}}abcd'),
        '{"a": "\\"фыва", "b": 1, "c": {"test": 1}}',
      );
    });
    it('Works with \\\\ in string', () => {
      assert.equal(
        util.cutAfterJSON('{"a": "\\\\фыва", "b": 1, "c": {"test": 1}}abcd'),
        '{"a": "\\\\фыва", "b": 1, "c": {"test": 1}}',
      );
    });
    it('Works with [ as start', () => {
      assert.equal(
        util.cutAfterJSON('[{"a": 1}, {"b": 2}]abcd'),
        '[{"a": 1}, {"b": 2}]',
      );
    });
    it('Returns an error when not beginning with [ or {', () => {
      assert.throws(() => {
        util.cutAfterJSON('abcd]}');
      }, /Can't cut unsupported JSON \(need to begin with \[ or { \) but got: ./);
    });
    it('Returns an error when missing closing bracket', () => {
      assert.throws(() => {
        util.cutAfterJSON('{"a": 1,{ "b": 1}');
      }, /Can't cut unsupported JSON \(no matching closing bracket found\)/);
    });
  });
});


describe('util.stripHTML()', () => {
  it('Normal text with some html', () => {
    const html = '<p>This page isn\'t available. Sorry about that.</p><p>Try searching for something else.</p>';
    const text = util.stripHTML(html);
    assert.strictEqual(text, 'This page isn\'t available. Sorry about that.\nTry searching for something else.');
  });
  it('Redirect link in text', () => {
    const html = '<a href="/redirect?q=https%3A%2F%2Ftwitter.com%2Flinustech&amp;redir_token=rJA12ePqgl4MjA4&amp"></a>';
    const text = util.stripHTML(html);
    assert.strictEqual(text, 'https://twitter.com/linustech');
  });
  it('Youtube watch link in text', () => {
    const html = '<a spellcheck="false" href="/watch?v=PKfxmFU3lWY" dir="auto">https://youtube.com/watch?v=PKfx...</a>';
    const text = util.stripHTML(html);
    assert.strictEqual(text, 'https://youtube.com/watch?v=PKfxmFU3lWY');
  });
  it('Normal link in text', () => {
    const html = '<a href="https://stackoverflow.com">stackoverflow.com</a>';
    const text = util.stripHTML(html);
    assert.strictEqual(text, 'https://stackoverflow.com/');
  });
  it('Silent on malformed URI in link', () => {
    const html = '<a href="http://%E0%A4%A">malformed</a>';
    const text = util.stripHTML(html);
    assert.strictEqual(text, 'http://%E0%A4%A/');
  });
  it('Invalid html in text', () => {
    const html = '<a href="#" <p/>Some text<div><div>';
    const text = util.stripHTML(html);
    assert.strictEqual(text, 'Some text');
  });
});
