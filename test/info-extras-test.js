const fs     = require('fs');
const path   = require('path');
const assert = require('assert-diff');
const extras = require('../lib/info-extras');


describe('extras.getVideoDescription()', () => {
  it('Retrieves formatted video description', (done) => {
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

  it('Fallbacks to empty description if element not found', (done) => {
    fs.readFile(path.resolve(__dirname,
      'files/videos/_HSylqgVYQI-regular/watch-no-extras.html'), 'utf8', (err, html) => {
      assert.ifError(err);
      const cleanDescription = extras.getVideoDescription(html);
      assert.equal(cleanDescription, '');
      done();
    });
  });
});


describe('extras.getAuthor()', () => {
  it('Returns video author object', (done) => {
    fs.readFile(path.resolve(__dirname, 'files/videos/pJk0p-98Xzc-vevo/watch.html'),
      'utf8', (err, html) => {
        assert.ifError(err);
        const authorObj = extras.getAuthor(html);
        assert.deepEqual(authorObj, {
          avatar: 'https://yt3.ggpht.com/-avUggmTNBZI/AAAAAAAAAAI/AAAAAAAAAAs/phQLsBWs458/s48-c-k-c0xffffffff-no-nd-rj/photo.jpg',
          channel_url: 'https://www.youtube.com/channel/UC1wNaX00osCIK4VjwboFqzA',
          id: 'UC1wNaX00osCIK4VjwboFqzA',
          name: 'Wu-Tang Clan',
          user: 'WuTangClanVEVO',
          user_url: 'https://www.youtube.com/user/WuTangClanVEVO',
          verified: true
        });
        done();
      });
  });

  describe('watch page without author', () => {
    it('Returns empty object if author not found', (done) => {
      fs.readFile(path.resolve(__dirname,
        'files/videos/_HSylqgVYQI-regular/watch-no-extras.html'), 'utf8', (err, html) => {
        assert.ifError(err);
        const authorObj = extras.getAuthor(html);
        assert.deepEqual(authorObj, {});
        done();
      });
    });
  });

  describe('from a rental', () => {
    it('Returns video author object', (done) => {
      fs.readFile(path.resolve(__dirname,
        'files/videos/SyKPsFRP_Oc-rental/watch.html'), 'utf8', (err, html) => {
        assert.ifError(err);
        const authorObj = extras.getAuthor(html);
        assert.deepEqual(authorObj, {
          id: 'UCuDN9Ko6TmIj_imV3BQo0lQ',
          name: 'Curiosity',
          avatar: 'https://s.ytimg.com/yts/img/avatar_720-vflYJnzBZ.png',
          verified: false,
          user: 'discoveryfulleps',
          channel_url: 'https://www.youtube.com/channel/UCuDN9Ko6TmIj_imV3BQo0lQ',
          user_url: 'https://www.youtube.com/user/discoveryfulleps',
        });
        done();
      });
    });
  });
});


describe('extras.getVideoMedia()', () => {
  it('Returns media object', (done) => {
    fs.readFile(path.resolve(__dirname, 'files/videos/pJk0p-98Xzc-vevo/watch.html'),
      'utf8', (err, html) => {
        assert.ifError(err);
        const mediaObj = extras.getVideoMedia(html);
        assert.deepEqual(mediaObj, {
          artist: 'Wu-Tang Clan',
          artist_url: 'https://www.youtube.com/channel/UCl0q_XqiWDMA-Q9SzUO3y-Q',
          category: 'Music',
          category_url: 'https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ',
          licensed_to_youtube_by: 'SME (on behalf of SBME Strategic Marketing Group); ASCAP, AMRA, LatinAutor, LatinAutor - SonyATV, UMPG Publishing, UBEM, UMPI, and 8 Music Rights Societies', song: "Da Mystery Of Chessboxin'"
        });
        done();
      });
  });

  describe('On a video with an older game', () => {
    it('Returns media object', (done) => {
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
    it('Returns media object', (done) => {
      fs.readFile(path.resolve(__dirname, 'files/videos/OYXswyLkek4-game-image/watch.html'),
        'utf8', (err, html) => {
          assert.ifError(err);
          const mediaObj = extras.getVideoMedia(html);
          assert.deepEqual(mediaObj, {
            image: 'https://yt3.ggpht.com/FaZqW4WE3D4npqAplZsJSzlZfDQ7XJSb-vEoL3rIOHkRfGd2uDK4ldxeCxyvg2CcqFgfCpCgGlzgy1-rtQ=w40-nd',
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
  it('Retrieves formatted published date', (done) => {
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
  it('Returns related videos', (done) => {
    fs.readFile(path.resolve(__dirname,
      'files/videos/_HSylqgVYQI-regular/watch.html'), 'utf8', (err, html) => {
      assert.ifError(err);
      const relatedVideos = extras.getRelatedVideos(html);
      for (let video of relatedVideos) {
        assert.ok(video.id);
        assert.ok(video.author);
        assert.ok(video.title);
        assert.ok(video.length_seconds);
      }
      done();
    });
  });

  it('Returns empty array when error parsing', (done) => {
    fs.readFile(path.resolve(__dirname,
      'files/videos/_HSylqgVYQI-regular/watch-no-extras.html'), 'utf8', (err, html) => {
      assert.ifError(err);
      const relatedVideos = extras.getRelatedVideos(html);
      assert.deepEqual(relatedVideos, []);
      done();
    });
  });
});
