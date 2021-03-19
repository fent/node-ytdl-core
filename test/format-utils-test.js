const ytdl = require('..');
const { sortFormats, chooseFormat, filterFormats, addFormatMeta } = require('../lib/format-utils');
const assert = require('assert-diff');


const formats = [
  { itag: '18',
    mimeType: 'video/mp4; codecs="avc1.42001E, mp4a.40.2"',
    container: 'mp4',
    qualityLabel: '360p',
    codecs: 'avc1.42001E, mp4a.40.2',
    videoCodec: 'avc1.42001E',
    audioCodec: 'mp4a.40.2',
    bitrate: 500000,
    audioBitrate: 96,
    url: 'https://googlevideo.com/',
    hasVideo: true,
    hasAudio: true,
  },
  { itag: '19',
    mimeType: 'audio/mp4; codecs="avc1.42001E, mp4a.40.2"',
    container: 'mp4',
    qualityLabel: null,
    codecs: 'avc1.42001E, mp4a.40.2',
    videoCodec: null,
    audioCodec: 'avc1.42001E, mp4a.40.2',
    bitrate: 500000,
    audioBitrate: 96,
    url: 'https://googlevideo.com/',
    hasVideo: false,
    hasAudio: true,
  },
  { itag: '43',
    mimeType: 'video/webm; codecs="vp8.0, vorbis"',
    container: 'webm',
    qualityLabel: '360p',
    codecs: 'vp8.0, vorbis',
    videoCodec: 'vp8.0',
    audioCodec: 'vorbis',
    bitrate: 500000,
    audioBitrate: 128,
    url: 'https://googlevideo.com/',
    hasVideo: true,
    hasAudio: true,
  },
  { itag: '133',
    mimeType: 'video/mp4; codecs="avc1.4d400d"',
    container: 'mp4',
    qualityLabel: '240p',
    codecs: 'avc1.4d400d',
    videoCodec: 'avc1.4d400d',
    audioCodec: null,
    bitrate: 300000,
    audioBitrate: null,
    url: 'https://googlevideo.com/',
    hasVideo: true,
    hasAudio: false,
  },
  { itag: '36',
    mimeType: 'video/3gpp; codecs="mp4v.20.3, mp4a.40.2"',
    container: '3gp',
    qualityLabel: '240p',
    codecs: 'mp4v.20.3, mp4a.40.2',
    videoCodec: 'mp4v.20.3',
    audioCodec: 'mp4a.40.2',
    bitrate: 170000,
    audioBitrate: 38,
    url: 'https://googlevideo.com/',
    hasVideo: true,
    hasAudio: true,
  },
  { itag: '5',
    mimeType: 'video/flv; codecs="Sorenson H.283, mp3"',
    container: 'flv',
    qualityLabel: '240p',
    codecs: 'Sorenson H.283, mp3',
    videoCodec: 'Sorenson H.283',
    audioCodec: 'mp3',
    bitrate: 250000,
    audioBitrate: 64,
    url: 'https://googlevideo.com/',
    hasVideo: true,
    hasAudio: true,
  },
  { itag: '160',
    mimeType: 'video/mp4; codecs="avc1.4d400c"',
    container: 'mp4',
    qualityLabel: '144p',
    codecs: 'avc1.4d400c',
    videoCodec: 'avc1.4d400c',
    audioCodec: null,
    bitrate: 100000,
    audioBitrate: null,
    url: 'https://googlevideo.com/',
    hasVideo: true,
    hasAudio: false,
  },
  { itag: '17',
    mimeType: 'video/3gpp; codecs="mp4v.20.3, mp4a.40.2"',
    container: '3gp',
    qualityLabel: '144p @ 60fps',
    codecs: 'mp4v.20.3, mp4a.40.2',
    videoCodec: 'mp4v.20.3',
    audioCodec: 'mp4a.40.2',
    bitrate: 50000,
    audioBitrate: 24,
    url: 'https://googlevideo.com/',
    hasVideo: true,
    hasAudio: true,
  },
  { itag: '140',
    mimeType: 'audio/mp4; codecs="mp4a.40.2"',
    container: 'mp4',
    qualityLabel: null,
    codecs: 'mp4a.40.2',
    videoCodec: null,
    audioCodec: 'mp4a.40.2',
    bitrate: null,
    audioBitrate: 128,
    url: 'https://googlevideo.com/',
    hasVideo: false,
    hasAudio: true,
  },
  { itag: '139',
    mimeType: 'audio/mp4; codecs="mp4a.40.2"',
    container: 'mp4',
    qualityLabel: null,
    codecs: 'mp4a.40.2',
    videoCodec: null,
    audioCodec: 'mp4a.40.2',
    bitrate: null,
    audioBitrate: null,
    hasVideo: false,
    hasAudio: false,
  },
  { itag: '138',
    mimeType: 'audio/mp4; codecs="mp4a.40.2"',
    container: 'mp4',
    qualityLabel: null,
    codecs: 'mp4a.40.2',
    videoCodec: null,
    audioCodec: 'mp4a.40.2',
    bitrate: null,
    audioBitrate: null,
    url: 'https://googlevideo.com/',
    hasVideo: false,
    hasAudio: false,
  },
];
const getItags = format => format.itag;


describe('sortFormats()', () => {
  describe('With `highest` given', () => {
    it('Sorts available formats from highest to lowest quality', () => {
      const sortedFormats = formats.slice();
      sortedFormats.sort(sortFormats);
      const itags = sortedFormats.map(getItags);
      assert.deepEqual(itags, [
        '43', '18', '5', '36', '17', '133', '160', '19', '140', '139', '138',
      ]);
    });
  });
});


describe('chooseFormat', () => {
  const sortedFormats = formats.slice();
  sortedFormats.sort(sortFormats);

  it('Is exposed in module', () => {
    assert.strictEqual(ytdl.chooseFormat, chooseFormat);
  });

  describe('with no options', () => {
    it('Chooses highest quality', () => {
      const format = chooseFormat(sortedFormats, {});
      assert.strictEqual(format.itag, '43');
    });
  });

  describe('With lowest quality wanted', () => {
    it('Chooses lowest itag', () => {
      const format = chooseFormat(sortedFormats, { quality: 'lowest' });
      assert.strictEqual(format.itag, '138');
    });
  });

  describe('With highest audio quality wanted', () => {
    it('Chooses highest audio itag', () => {
      const format = chooseFormat(formats, { quality: 'highestaudio' });
      assert.strictEqual(format.itag, '43');
    });
  });

  describe('With lowest audio quality wanted', () => {
    it('Chooses lowest audio itag', () => {
      const format = chooseFormat(formats, { quality: 'lowestaudio' });
      assert.strictEqual(format.itag, '17');
    });
  });

  describe('With highest video quality wanted', () => {
    it('Chooses highest video itag', () => {
      const format = chooseFormat(formats, { quality: 'highestvideo' });
      assert.strictEqual(format.itag, '18');
    });
  });

  describe('With lowest video quality wanted', () => {
    it('Chooses lowest video itag', () => {
      const format = chooseFormat(formats, { quality: 'lowestvideo' });
      assert.strictEqual(format.itag, '17');
    });
  });

  describe('With itag given', () => {
    it('Chooses matching format', () => {
      const format = chooseFormat(sortedFormats, { quality: 5 });
      assert.strictEqual(format.itag, '5');
    });

    describe('that is not in the format list', () => {
      it('Returns an error', () => {
        assert.throws(() => {
          chooseFormat(sortedFormats, { quality: 42 });
        }, /No such format found: [0-9]+/);
      });
    });
  });

  describe('With list of itags given', () => {
    it('Chooses matching format', () => {
      const format = chooseFormat(sortedFormats, { quality: [99, 160, 18] });
      assert.strictEqual(format.itag, '160');
    });
  });

  describe('With format object given', () => {
    it('Chooses given format without searching', () => {
      const format = chooseFormat(sortedFormats, { format: formats[0] });
      assert.strictEqual(format, formats[0]);
    });

    describe('from `getBasicInfo()`', () => {
      it('Throws error', () => {
        assert.throws(() => {
          chooseFormat(sortedFormats, { format: formats.filter(format => !format.url)[0] });
        }, /Invalid format given/);
      });
    });
  });

  describe('With filter given', () => {
    describe('that matches a format', () => {
      it('Chooses a format', () => {
        const choosenFormat = chooseFormat(sortedFormats, {
          filter: format => format.container === 'mp4',
        });
        assert.strictEqual(choosenFormat.itag, '18');
      });
    });

    describe('that does not match a format', () => {
      it('Returns an error', () => {
        assert.throws(() => {
          chooseFormat(sortedFormats, { filter: () => false });
        }, /No such format found/);
      });
    });
  });
});


describe('filterFormats', () => {
  it('Tries to find formats that match', () => {
    const filter = format => format.container === 'mp4';
    const itags = filterFormats(formats, filter).map(getItags);
    assert.deepEqual(itags, ['18', '19', '133', '160', '140', '138']);
  });

  it('Ignores formats without a `url`', () => {
    const itags = filterFormats(formats, () => true).map(getItags);
    assert.deepEqual(itags, ['18', '19', '43', '133', '36', '5', '160', '17', '140', '138']);
  });

  it('Is exposed in module', () => {
    assert.strictEqual(ytdl.filterFormats, filterFormats);
  });

  describe('that doesn\'t match any format', () => {
    it('Returns an empty list', () => {
      const list = filterFormats(formats, () => false);
      assert.strictEqual(list.length, 0);
    });
  });

  describe('With `video` given', () => {
    it('Returns only matching formats', () => {
      const itags = filterFormats(formats, 'video').map(getItags);
      assert.deepEqual(itags, ['18', '43', '133', '36', '5', '160', '17']);
    });
  });

  describe('With `videoonly` given', () => {
    it('Returns only matching formats', () => {
      const itags = filterFormats(formats, 'videoonly').map(getItags);
      assert.deepEqual(itags, ['133', '160']);
    });
  });

  describe('With `audio` given', () => {
    it('Returns only matching formats', () => {
      const itags = filterFormats(formats, 'audio').map(getItags);
      assert.deepEqual(itags, ['18', '19', '43', '36', '5', '17', '140']);
    });
  });

  describe('With `audioonly` given', () => {
    it('Returns only matching formats', () => {
      const itags = filterFormats(formats, 'audioonly').map(getItags);
      assert.deepEqual(itags, ['19', '140']);
    });
  });

  describe('With `audioandvideo` given', () => {
    it('Returns only matching formats', () => {
      const itags = filterFormats(formats, 'audioandvideo').map(getItags);
      assert.deepEqual(itags, ['18', '43', '36', '5', '17']);
    });
  });

  describe('With `videoandaudio` given', () => {
    it('Returns only matching formats', () => {
      const itags = filterFormats(formats, 'videoandaudio').map(getItags);
      assert.deepEqual(itags, ['18', '43', '36', '5', '17']);
    });
  });

  describe('With unsupported filter given', () => {
    it('Returns only matching formats', () => {
      assert.throws(() => {
        filterFormats(formats, 'aaaa').map(getItags);
      }, /not supported/);
    });
  });
});


describe('addFormatMeta()', () => {
  it('Adds extra metadata to a format', () => {
    let format = addFormatMeta({
      itag: 94,
      url: 'http://video.com/1/2.ts',
    });
    assert.deepEqual(format, {
      itag: 94,
      url: 'http://video.com/1/2.ts',
      mimeType: 'video/ts; codecs="H.264, aac"',
      container: 'ts',
      codecs: 'H.264, aac',
      videoCodec: 'H.264',
      audioCodec: 'aac',
      qualityLabel: '480p',
      bitrate: 800000,
      audioBitrate: 128,
      isLive: false,
      isHLS: false,
      isDashMPD: false,
      hasVideo: true,
      hasAudio: true,
    });
  });
  describe('With an unknown itag', () => {
    it('Does not add extra metadata to a format', () => {
      let format = addFormatMeta({
        itag: -1,
        url: 'http://video.com/3/4.ts',
      });
      assert.deepEqual(format, {
        itag: -1,
        url: 'http://video.com/3/4.ts',
        container: null,
        codecs: null,
        videoCodec: null,
        audioCodec: null,
        isLive: false,
        isHLS: false,
        isDashMPD: false,
        hasVideo: false,
        hasAudio: false,
      });
    });
  });
});
