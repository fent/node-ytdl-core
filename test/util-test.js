const ytdl   = require('..');
const util   = require('../lib/util');
const assert = require('assert-diff');


const formats = [
  { itag          : '18',
    type          : 'video/mp4; codecs="avc1.42001E, mp4a.40.2"',
    quality       : 'medium',
    container     : 'mp4',
    resolution    : '360p',
    encoding      : 'H.264',
    bitrate       : '0.5',
    audioEncoding : 'aac',
    audioBitrate  : 96 },
  { itag          : '19',
    type          : 'audio/mp4; codecs="avc1.42001E, mp4a.40.2"',
    quality       : null,
    container     : 'mp4',
    resolution    : null,
    encoding      : null,
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
const getItags = (format) => format.itag;


describe('util.sortFormats()', () => {
  describe('With `highest` given', () => {
    it('Sorts available formats from highest to lowest quality', () => {
      const sortedFormats = formats.slice();
      sortedFormats.sort(util.sortFormats);
      const itags = sortedFormats.map(getItags);
      assert.deepEqual(itags, [
        '43', '18', '5', '36', '17', '133', '160', '19', '140', '139', '138'
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
      assert.equal(format.itag, '140');
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
        const err = util.chooseFormat(sortedFormats, { quality: 42 });
        assert.equal(err.message, 'No such format found: 42');
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
        const format = util.chooseFormat(sortedFormats, {
          filter: (format) => format.container === 'mp4',
        });
        assert.equal(format.itag, '18');
      });
    });

    describe('that does not match a format', () => {
      it('Returns an error', () => {
        const err = util.chooseFormat(sortedFormats, { filter: () => {} });
        assert.equal(err.message, 'No formats found with custom filter');
      });
    });
  });
});


describe('util.filterFormats', () => {
  it('Tries to find formats that match', () => {
    const filter = (format) => format.container === 'mp4';
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
      assert.deepEqual(itags, ['18', '19', '43', '133', '36', '5', '160', '17']);
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
      assert.deepEqual(itags, ['140']);
    });
  });

  describe('With `audioandvideo` given', () => {
    it('Returns only matching formats', () => {
      const itags = util.filterFormats(formats, 'audioandvideo').map(getItags);
      assert.deepEqual(itags, ['18', '19', '43', '36', '5', '17']);
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
    id = util.getVideoID('https://any.youtube.com/watch?v=RAW_VIDEOID');
    assert.equal(id.message, 'Not a YouTube domain');
    id = util.getVideoID('https://www.twitch.tv/user/v/1234');
    assert.equal(id.message, 'Not a YouTube domain');
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
    let id;
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
    assert.equal(id.message, 'Not a YouTube domain');
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
  });
});


describe('util.parseFormats()', () => {
  const info = require('./files/util/pJk0p-98Xzc_preparsed.json');
  it('Retrieves video formats from info', () => {
    const myinfo = Object.assign({}, info);
    const formats = util.parseFormats(myinfo);
    assert.ok(formats);
    assert.equal(formats.length, 15);
  });
});
