const ytdl = require('..');
const { getURLVideoID, getVideoID, validateID, validateURL } = require('../lib/url-utils');
const assert = require('assert-diff');

describe('getURLVideoID()', () => {
  it('Is exposed in module', () => {
    assert.strictEqual(ytdl.getURLVideoID, getURLVideoID);
  });

  it('Retrives the video ID from the url', () => {
    let id;
    id = getVideoID('http://www.youtube.com/watch?v=RAW_VIDEOID');
    assert.strictEqual(id, 'RAW_VIDEOID');
    id = getVideoID('http://youtu.be/RAW_VIDEOID');
    assert.strictEqual(id, 'RAW_VIDEOID');
    id = getVideoID('http://youtube.com/v/RAW_VIDEOID');
    assert.strictEqual(id, 'RAW_VIDEOID');
    id = getVideoID('http://youtube.com/embed/RAW_VIDEOID');
    assert.strictEqual(id, 'RAW_VIDEOID');
    id = getVideoID('https://music.youtube.com/watch?v=RAW_VIDEOID&list=RDAMVMmtLgabce8KQ');
    assert.strictEqual(id, 'RAW_VIDEOID');
    id = getVideoID('https://gaming.youtube.com/watch?v=RAW_VIDEOID');
    assert.strictEqual(id, 'RAW_VIDEOID');
    assert.throws(() => {
      getVideoID('https://any.youtube.com/watch?v=RAW_VIDEOID');
    }, /Not a YouTube domain/);
    assert.throws(() => {
      getVideoID('https://www.twitch.tv/user/v/1234');
    }, /Not a YouTube domain/);
    assert.throws(() => {
      getVideoID('www.youtube.com');
    }, /No video id found: \S+/);
    assert.throws(() => {
      getVideoID('http://www.youtube.com/playlist?list=1337');
    }, /No video id found: \S+/);
    assert.throws(() => {
      getVideoID('http://www.youtube.com/watch?v=asdf$%^ddf-');
    }, /Video id \([^)]+\) does not match expected format/);
  });
});


describe('getVideoID()', () => {
  it('Is exposed in module', () => {
    assert.strictEqual(ytdl.getVideoID, getVideoID);
  });

  it('Retrives the video ID from the url', () => {
    let id;
    id = getVideoID('http://www.youtube.com/watch?v=RAW_VIDEOID');
    assert.strictEqual(id, 'RAW_VIDEOID');
    id = getVideoID('http://youtu.be/RAW_VIDEOID');
    assert.strictEqual(id, 'RAW_VIDEOID');
    id = getVideoID('http://youtube.com/v/RAW_VIDEOID');
    assert.strictEqual(id, 'RAW_VIDEOID');
    id = getVideoID('http://youtube.com/embed/RAW_VIDEOID');
    assert.strictEqual(id, 'RAW_VIDEOID');
    id = getVideoID('_LENGTH_11_');
    assert.strictEqual(id, '_LENGTH_11_');
    assert.throws(() => {
      getVideoID('http://youtube.com/RAW_VIDEOID');
    }, /No video id found: \S+/);
    assert.throws(() => {
      getVideoID('https://www.twitch.tv/user/v/1234');
    }, /Not a YouTube domain/);
    assert.throws(() => {
      getVideoID('www.youtube.com');
    }, /No video id found: \S+/);
    assert.throws(() => {
      getVideoID('http://www.youtube.com/playlist?list=1337');
    }, /No video id found: \S+/);
  });
});


describe('validateID()', () => {
  it('Is exposed in module', () => {
    assert.strictEqual(ytdl.validateID, validateID);
  });

  it('Retrieves whether a string includes a video ID', () => {
    let rs;
    rs = validateID('RAW_VIDEOID');
    assert.strictEqual(rs, true);
    rs = validateID('http://www.youtube.com/watch?v=RAW_VIDEOID');
    assert.strictEqual(rs, false);
    rs = validateID('https://www.twitch.tv/user/v/1234');
    assert.strictEqual(rs, false);
  });
});


describe('validateURL()', () => {
  it('Is exposed in module', () => {
    assert.strictEqual(ytdl.validateURL, validateURL);
  });

  it('Retrieves whether a string includes a parsable video ID', () => {
    let rs;
    rs = validateURL('http://www.youtube.com/watch?v=RAW_VIDEOID');
    assert.strictEqual(rs, true);
    rs = validateURL('RAW_VIDEOID');
    assert.strictEqual(rs, false);
    rs = validateURL('https://www.twitch.tv/user/v/1234');
    assert.strictEqual(rs, false);
    rs = validateURL('https://www.youtube.com/wartwzwerwer');
    assert.strictEqual(rs, false);
  });
});
