const assert = require('assert-diff');
const fs = require('fs');
const path = require('path');
const sinon = require('sinon');
const extras = require('../lib/info-extras');


const assertURL = url => {
  assert.ok(/^https?:\/\//.test(url), `Not a URL: ${url}`);
};

const assertChannelURL = url => {
  assert.ok(/^https?:\/\/www\.youtube\.com\/channel\/[a-zA-Z0-9_-]+$/.test(url), `Not a channel URL: ${url}`);
};

const assertUserID = str => {
  assert.ok(/^[a-zA-Z0-9_-]+$/.test(str), `Not a user id: ${str}`);
};

const assertUserName = str => {
  assert.ok(/^[a-zA-Z0-9_-]+$/.test(str), `Not a username: ${str}`);
};

const assertUserURL = url => {
  assert.ok(/^https?:\/\/www\.youtube\.com\/(user|channel)\/[a-zA-Z0-9_-]+$/.test(url), `Not a user URL: ${url}`);
};

const assertThumbnails = thumbnails => {
  assert.ok(Array.isArray(thumbnails));
  for (let thumbnail of thumbnails) {
    assertURL(thumbnail.url);
    assert.strictEqual(typeof thumbnail.width, 'number');
    assert.strictEqual(typeof thumbnail.height, 'number');
  }
};

const assertRelatedVideos = (relatedVideos, assertRichThumbnails = false) => {
  assert.ok(Array.isArray(relatedVideos));
  assert.ok(relatedVideos.length > 0);
  for (let video of relatedVideos) {
    assert.ok(video.id);
    assert.ok(video.title);
    assert.ok(video.length_seconds);
    assertThumbnails(video.thumbnails);
    if (assertRichThumbnails) {
      assert.ok(video.richThumbnails.length);
      assertThumbnails(video.richThumbnails);
    }
    assert.strictEqual(typeof video.isLive, 'boolean');
    assert.ok(/[a-zA-Z]+/.test(video.author));
    assert.ok(video.author.id);
    assert.ok(video.author.name);
    assert.ok(video.author.channel_url);
    assertThumbnails(video.author.thumbnails);
    assert.strictEqual(typeof video.author.verified, 'boolean');
  }
};

const infoFromWatchJSON = (type, transformBody) => {
  let watchObj;
  if (transformBody) {
    let watchJSON = fs.readFileSync(path.join(__dirname, `files/videos/${type}/watch.json`), 'utf8');
    watchJSON = transformBody(watchJSON);
    watchObj = JSON.parse(watchJSON);
  } else {
    watchObj = require(`./files/videos/${type}/watch.json`);
  }
  let info = watchObj.reduce((part, curr) => Object.assign(curr, part), {});
  info.player_response = info.player_response || info.playerResponse;
  return info;
};

describe('extras.getAuthor()', () => {
  // To remove later.
  before(() => sinon.replace(console, 'warn', sinon.stub()));
  after(() => sinon.restore());

  it('Returns video author object', () => {
    const info = require('./files/videos/regular/expected-info.json');
    const author = extras.getAuthor(info);
    assert.ok(author);
    assertURL(author.avatar);
    assertThumbnails(author.thumbnails);
    assertChannelURL(author.channel_url);
    assertChannelURL(author.external_channel_url);
    assertUserID(author.id);
    assertUserName(author.user);
    assert.ok(author.name);
    assertUserURL(author.user_url);
    assert.strictEqual(typeof author.verified, 'boolean');
    assert.number(author.subscriber_count);
  });

  describe('watch page without `playerMicroformatRenderer`', () => {
    it('Uses backup author from `videoDetails`', () => {
      const info = infoFromWatchJSON('regular', body => body.replace('playerMicroformatRenderer', ''));
      const author = extras.getAuthor(info);
      assert.ok(author);
      assert.ok(author.name);
      assertChannelURL(author.channel_url);
      assertThumbnails(author.thumbnails);
      assert.ok(author.verified);
      assert.ok(author.subscriber_count);
    });
  });

  describe('watch page without `playerMicroformatRenderer` or `videoDetails`', () => {
    it('Returns empty author object', () => {
      const info = infoFromWatchJSON('regular', body => body
        .replace('playerMicroformatRenderer', '')
        .replace('videoDetails', ''));
      info.player_response = info.player_response || info.playerResponse;
      const author = extras.getAuthor(info);
      assert.deepEqual(author, {});
    });
  });

  describe('from a rental', () => {
    it('Returns video author object', () => {
      const info = require('./files/videos/rental/expected-info.json');
      const author = extras.getAuthor(info);
      assert.ok(author);
      assertURL(author.avatar);
      assertThumbnails(author.thumbnails);
      assertChannelURL(author.channel_url);
      assertChannelURL(author.external_channel_url);
      assertUserID(author.id);
      assertUserName(author.user);
      assert.ok(author.name);
      assertUserURL(author.user_url);
      assert.strictEqual(typeof author.verified, 'boolean');
      assert.ok(!author.subscriber_count);
    });
  });
});


describe('extras.getMedia()', () => {
  it('Returns media object', () => {
    const info = require('./files/videos/music/expected-info.json');
    const media = extras.getMedia(info);
    assert.ok(media);
    assert.strictEqual(media.artist, 'Syn Cole');
    assertChannelURL(media.artist_url);
    assert.strictEqual(media.category, 'Music');
    assertURL(media.category_url);
  });

  describe('On a video associated with a game', () => {
    it('Returns media object', () => {
      const info = require('./files/videos/game/expected-info.json');
      const media = extras.getMedia(info);
      assert.ok(media);
      assert.strictEqual(media.category, 'Gaming');
      assertURL(media.category_url);
      assert.strictEqual(media.game, 'Pokémon Snap');
      assertURL(media.game_url);
      assert.strictEqual(media.year, '1999');
    });
  });

  describe('With invalid input', () => {
    it('Should return an empty object', () => {
      const media = extras.getMedia({ invalidObject: '' });
      assert.ok(media);
      assert.deepEqual(media, {});
    });
  });
});


describe('extras.getRelatedVideos()', () => {
  // To remove later.
  before(() => sinon.replace(console, 'warn', sinon.stub()));
  after(() => sinon.restore());

  it('Returns related videos', () => {
    const info = require('./files/videos/regular/expected-info.json');
    assertRelatedVideos(extras.getRelatedVideos(info));
  });

  describe('With richThumbnails', () => {
    it('Returns related videos', () => {
      const info = require('./files/videos/rich-thumbnails/expected-info.json');
      assertRelatedVideos(extras.getRelatedVideos(info), true);
    });
  });

  describe('When able to choose the topic of related videos', () => {
    it('Returns related videos', () => {
      const info = require('./files/videos/related-topics/expected-info.json');
      assertRelatedVideos(extras.getRelatedVideos(info));
    });
  });

  describe('Without `rvs` params', () => {
    it('Still able to find video params', () => {
      const info = require('./files/videos/regular/expected-info.json');
      delete info.response.webWatchNextResponseExtensionData.relatedVideoArgs;
      assertRelatedVideos(extras.getRelatedVideos(info));
    });
  });

  describe('Without `secondaryResults`', () => {
    it('Unable to find any videos', () => {
      const info = require('./files/videos/regular/expected-info.json');
      delete info.response.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results;
      const relatedVideos = extras.getRelatedVideos(info);
      assert.ok(relatedVideos);
      assert.deepEqual(relatedVideos, []);
    });
  });

  describe('With an unparseable video', () => {
    it('Catches errors', () => {
      const info = infoFromWatchJSON('regular', body => body.replace(/\bshortBylineText\b/g, '___'));
      const relatedVideos = extras.getRelatedVideos(info);
      assert.deepEqual(relatedVideos, []);
    });
  });
});

describe('extras.getLikes()', () => {
  it('Returns like count', () => {
    const info = infoFromWatchJSON('regular');
    const likes = extras.getLikes(info);
    assert.strictEqual(typeof likes, 'number');
  });

  describe('With no likes', () => {
    it('Does not return likes', () => {
      const info = infoFromWatchJSON('no-likes-or-dislikes');
      const likes = extras.getLikes(info);
      assert.strictEqual(likes, null);
    });
  });
});

describe('extras.getDislikes()', () => {
  it('Returns dislike count', () => {
    const info = infoFromWatchJSON('regular');
    const dislikes = extras.getDislikes(info);
    assert.strictEqual(typeof dislikes, 'number');
  });

  describe('With no dislikes', () => {
    it('Does not return dislikes', () => {
      const info = infoFromWatchJSON('no-likes-or-dislikes');
      const dislikes = extras.getDislikes(info);
      assert.strictEqual(dislikes, null);
    });
  });
});

describe('extras.getStoryboards()', () => {
  it('Returns storyboards', () => {
    const info = infoFromWatchJSON('no-likes-or-dislikes');
    const storyboards = extras.getStoryboards(info);

    assert.ok(Array.isArray(storyboards));
    assert.ok(storyboards.length > 0);

    for (let storyboard of storyboards) {
      assertURL(storyboard.templateUrl);
      assert.strictEqual(typeof storyboard.thumbnailWidth, 'number');
      assert.strictEqual(typeof storyboard.thumbnailHeight, 'number');
      assert.strictEqual(typeof storyboard.thumbnailCount, 'number');
      assert.strictEqual(typeof storyboard.interval, 'number');
      assert.strictEqual(typeof storyboard.columns, 'number');
      assert.strictEqual(typeof storyboard.rows, 'number');
      assert.strictEqual(typeof storyboard.storyboardCount, 'number');
    }
  });

  describe('With no storyboards', () => {
    it('Returns empty array', () => {
      const info = infoFromWatchJSON('regular');
      const storyboards = extras.getStoryboards(info);
      assert.ok(Array.isArray(storyboards));
      assert.ok(storyboards.length === 0);
    });
  });
});

describe('extras.getChapters()', () => {
  it('Returns chapters', () => {
    const info = require('./files/videos/chapters/expected-info.json');
    const chapters = extras.getChapters(info);

    assert.ok(Array.isArray(chapters) && chapters.length);

    for (const chapter of chapters) {
      assert.ok(chapter.title);
      assert.number(chapter.start_time);
    }
  });

  describe('With no chapters', () => {
    it('Returns empty array', () => {
      const info = infoFromWatchJSON('regular');
      const chapters = extras.getChapters(info);

      assert.ok(Array.isArray(chapters) && !chapters.length);
    });
  });
});
