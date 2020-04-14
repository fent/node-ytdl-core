const fs = require('fs');
const path = require('path');
const assert = require('assert-diff');
const extras = require('../lib/info-extras');


describe('extras.getVideoDescription()', () => {
  it('Retrieves formatted video description', done => {
    fs.readFile(path.resolve(__dirname,
      'files/videos/_HSylqgVYQI-regular/watch-multiline-description.html'),
    'utf8', (err, html) => {
      assert.ifError(err);
      const cleanDescription = extras.getVideoDescription(html);
      assert.equal(cleanDescription, 'Some Title\n' +
        'Line 1\n' +
        '"Line 2"\n' +
        '1  First Song  5:30\n' +
        '2  Second Song  5:42');
      done();
    });
  });

  it('Fallbacks to empty description if element not found', done => {
    fs.readFile(path.resolve(__dirname,
      'files/videos/_HSylqgVYQI-regular/watch-no-extras.html'), 'utf8', (err, html) => {
      assert.ifError(err);
      const cleanDescription = extras.getVideoDescription(html);
      assert.equal(cleanDescription, '');
      done();
    });
  });
});


const assertURL = url => {
  assert.ok(/^https?:\/\//.test(url), `Not a URL: ${url}`);
};

const assertChannelURL = url => {
  assert.ok(/^https?:\/\/www\.youtube\.com\/channel\/[a-zA-Z0-9_-]+$/.test(url), `Not a channel URL: ${url}`);
};

const assertUserID = str => {
  assert.ok(/^[a-zA-Z0-9_-]+$/.test(str), `Not a user id:${str}`);
};

const assertUserName = str => {
  assert.ok(/^[a-zA-Z0-9_-]+$/.test(str), `Not a username: ${str}`);
};

const assertUserURL = url => {
  assert.ok(/^https?:\/\/www\.youtube\.com\/user\/[a-zA-Z0-9_-]+$/.test(url), `Not a user URL: ${url}`);
};

describe('extras.getAuthor()', () => {
  it('Returns video author object', done => {
    fs.readFile(path.resolve(__dirname, 'files/videos/pJk0p-98Xzc-vevo/watch.html'),
      'utf8', (err, html) => {
        assert.ifError(err);
        const author = extras.getAuthor(html);
        assert.ok(author);
        assertURL(author.avatar);
        assertChannelURL(author.channel_url);
        assertUserID(author.id);
        assertUserName(author.user);
        assert.ok(author.name);
        assertUserURL(author.user_url);
        assert.equal(typeof author.verified, 'boolean');
        assert.number(author.subscriber_count);
        done();
      });
  });

  describe('watch page without author', () => {
    it('Returns empty object if author not found', done => {
      fs.readFile(path.resolve(__dirname,
        'files/videos/_HSylqgVYQI-regular/watch-no-extras.html'), 'utf8', (err, html) => {
        assert.ifError(err);
        const author = extras.getAuthor(html);
        assert.deepEqual(author, {});
        done();
      });
    });
  });

  describe('from a rental', () => {
    it('Returns video author object', done => {
      fs.readFile(path.resolve(__dirname,
        'files/videos/SyKPsFRP_Oc-rental/watch.html'), 'utf8', (err, html) => {
        assert.ifError(err);
        const author = extras.getAuthor(html);
        assert.ok(author);
        assertURL(author.avatar);
        assertChannelURL(author.channel_url);
        assertUserID(author.id);
        assertUserName(author.user);
        assert.ok(author.name);
        assertUserURL(author.user_url);
        assert.equal(typeof author.verified, 'boolean');
        assert.number(author.subscriber_count);
        done();
      });
    });
  });
});


describe('extras.getVideoMedia()', () => {
  it('Returns media object', done => {
    fs.readFile(path.resolve(__dirname, 'files/videos/pJk0p-98Xzc-vevo/watch.html'),
      'utf8', (err, html) => {
        assert.ifError(err);
        const mediaObj = extras.getVideoMedia(html);
        assert.ok(mediaObj);
        assert.equal(mediaObj.artist, 'Wu-Tang Clan');
        assertChannelURL(mediaObj.artist_url);
        assert.equal(mediaObj.category, 'Music');
        assertChannelURL(mediaObj.category_url);
        done();
      });
  });

  describe('On a video with an older game', () => {
    it('Returns media object', done => {
      fs.readFile(path.resolve(__dirname, 'files/videos/xRu7qKijBso-game/watch.html'),
        'utf8', (err, html) => {
          assert.ifError(err);
          const mediaObj = extras.getVideoMedia(html);
          assert.deepEqual(mediaObj, {
            category: 'Gaming',
            category_url: 'https://www.youtube.com/gaming',
            game: 'Pokémon Snap',
            game_url: 'https://gaming.youtube.com/game/UCWbUPCN6z_KYDS5qx1AeNQg',
            year: 1999,
          });
          done();
        });
    });
  });

  describe('On a video with a game with an image', () => {
    it('Returns media object', done => {
      fs.readFile(path.resolve(__dirname, 'files/videos/OYXswyLkek4-game-image/watch.html'),
        'utf8', (err, html) => {
          assert.ifError(err);
          const mediaObj = extras.getVideoMedia(html);
          assert.deepEqual(mediaObj, {
            image: 'https://yt3.ggpht.com/FaZqW4WE3D4npqAplZsJSzlZfDQ7XJSb-vEoL3rIOHkRfGd2uDK4ldxeCxyvg2CcqFgfCpCgGlzgy1-rtQ=w40-nd', // eslint-disable-line max-len
            category: 'Gaming',
            category_url: 'https://www.youtube.com/gaming',
            game: 'Super Mario 64',
            game_url: 'https://gaming.youtube.com/game/UCVNUxXs1fnUdcU-xQeNGjmg',
            year: 1996,
          });
          done();
        });
    });
  });
});


describe('extras.getPublished()', () => {
  it('Retrieves formatted published date', done => {
    fs.readFile(path.resolve(__dirname,
      'files/videos/_HSylqgVYQI-regular/watch.html'), 'utf8', (err, html) => {
      assert.ifError(err);
      const publishedTimestamp = extras.getPublished(html);
      assert.equal(publishedTimestamp, 1144108800000);
      done();
    });
  });
});


describe('extras.getRelatedVideos()', () => {
  it('Returns related videos', done => {
    fs.readFile(path.resolve(__dirname,
      'files/videos/wYgaarivXv4-related2/watch.html'), 'utf8', (err, html) => {
      assert.ifError(err);
      const relatedVideos = extras.getRelatedVideos(html);
      assert.ok(relatedVideos && relatedVideos.length > 0);
      for (let video of relatedVideos) {
        assert.ok(video.id);
        assert.ok(video.author);
        assert.ok(video.title);
        assert.ok(video.length_seconds);
        assert.ok(video.video_thumbnail);
      }
      done();
    });
  });

  describe('Without `rvs` params', () => {
    it('Unable to find some view counts', done => {
      fs.readFile(path.resolve(__dirname,
        'files/videos/3IqtmUscE_U-related/watch-no-rvs.html'), 'utf8', (err, html) => {
        assert.ifError(err);
        const relatedVideos = extras.getRelatedVideos(html);
        assert.ok(relatedVideos.some(video => video.short_view_count_text === ''));
        done();
      });
    });
  });

  describe('With an unparseable video', () => {
    it('Cathes errors', done => {
      fs.readFile(path.resolve(__dirname,
        'files/videos/3IqtmUscE_U-related/watch-bad-details.html'), 'utf8', (err, html) => {
        assert.ifError(err);
        const relatedVideos = extras.getRelatedVideos(html);
        assert.ok(!relatedVideos.length);
        done();
      });
    });
  });

  describe('When error parsing', () => {
    it('Returns empty array', done => {
      fs.readFile(path.resolve(__dirname,
        'files/videos/_HSylqgVYQI-regular/watch-no-extras.html'), 'utf8', (err, html) => {
        assert.ifError(err);
        const relatedVideos = extras.getRelatedVideos(html);
        assert.deepEqual(relatedVideos, []);
        done();
      });
    });
  });
});

describe('extras.getLikes()', () => {
  it('Returnes like count', done => {
    fs.readFile(path.resolve(__dirname,
      'files/videos/_HSylqgVYQI-regular/watch.html'), 'utf8', (err, html) => {
      assert.ifError(err);
      const likes = extras.getLikes(html);
      assert.equal(typeof likes, 'number');
      done();
    });
  });

  describe('With no likes', () => {
    it('Does not return likes', done => {
      fs.readFile(path.resolve(__dirname,
        'files/videos/KKzOh0MRuZE-no-likes-or-dislikes/watch.html'), 'utf8', (err, html) => {
        assert.ifError(err);
        const likes = extras.getLikes(html);
        assert.equal(likes, null);
        done();
      });
    });
  });
});

describe('extras.getDislikes()', () => {
  it('Returnes dislike count', done => {
    fs.readFile(path.resolve(__dirname,
      'files/videos/_HSylqgVYQI-regular/watch.html'), 'utf8', (err, html) => {
      assert.ifError(err);
      const dislikes = extras.getDislikes(html);
      assert.equal(typeof dislikes, 'number');
      done();
    });
  });

  describe('With no dislikes', () => {
    it('Does not return dislikes', done => {
      fs.readFile(path.resolve(__dirname,
        'files/videos/KKzOh0MRuZE-no-likes-or-dislikes/watch.html'), 'utf8', (err, html) => {
        assert.ifError(err);
        const dislikes = extras.getDislikes(html);
        assert.equal(dislikes, null);
        done();
      });
    });
  });
});
