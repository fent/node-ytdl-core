const fs     = require('fs');
const path   = require('path');
const assert = require('assert-diff');
const extras = require('../lib/info-extras');


describe('extras.getVideoDescription()', () => {
  it('Retrieves formatted video description', (done) => {
    fs.readFile(path.resolve(__dirname,
      'files/extras/multiline-video-description'), 'utf8', (err, html) => {
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
      'files/extras/bad-watch-page'), 'utf8', (err, html) => {
      assert.ifError(err);
      const cleanDescription = extras.getVideoDescription(html);
      assert.equal(cleanDescription, '');
      done();
    });
  });
});


describe('extras.getAuthor()', () => {
  it('Returns video author object', (done) => {
    fs.readFile(path.resolve(__dirname, 'files/extras/related-video'),
      'utf8', (err, html) => {
        assert.ifError(err);
        const authorObj = extras.getAuthor(html);
        assert.deepEqual(authorObj, {
          id: 'UC_aEa8K-EOJ3D6gOs7HcyNg',
          name: 'NoCopyrightSounds',
          avatar: 'https://www.youtube.com/hisprofile.pic',
          verified: true,
          user: 'NoCopyrightSounds',
          channel_url:
            'https://www.youtube.com/channel/UC_aEa8K-EOJ3D6gOs7HcyNg',
          user_url: 'https://www.youtube.com/user/NoCopyrightSounds',
        });
        done();
      });
  });

  describe('watch page without author', () => {
    it('Returns empty object if author not found', (done) => {
      fs.readFile(path.resolve(__dirname,
        'files/extras/bad-watch-page'), 'utf8', (err, html) => {
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
    fs.readFile(path.resolve(__dirname, 'files/extras/related-video'),
      'utf8', (err, html) => {
        assert.ifError(err);
        const mediaObj = extras.getVideoMedia(html);
        assert.deepEqual(mediaObj, {
          category: 'Music',
          category_url: 'https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ',
          song: 'Faded (Lost Stories Remix)',
          artist: 'Alan Walker',
          artist_url: 'https://www.youtube.com/channel/UCJrOtniJ0-NWz37R30urifQ',
          licensed_by: 'SME (on behalf of MER Recordings); Warner Chappell, UBEM, Sony ATV Publishing, ASCAP, and 18 Music Rights Societies',
        });
        done();
      });
  });

  describe('On a video with an older game', () => {
    it('Returns media object', (done) => {
      fs.readFile(path.resolve(__dirname, 'files/extras/game'),
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
      fs.readFile(path.resolve(__dirname, 'files/extras/game_image'),
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
    fs.readFile(path.resolve(__dirname, 'files/extras/related-video'),
      'utf8', (err, html) => {
        assert.ifError(err);
        const publishedTimestamp = extras.getPublished(html);
        assert.equal(publishedTimestamp, 1416355200000);
        done();
      });
  });
});


describe('extras.getRelatedVideos()', () => {
  it('Returns related videos', (done) => {
    fs.readFile(path.resolve(__dirname, 'files/extras/related-video'),
      'utf8', (err, html) => {
        assert.ifError(err);
        const relatedVideos = extras.getRelatedVideos(html);
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
      'files/extras/bad-watch-page'), 'utf8', (err, html) => {
      assert.ifError(err);
      const relatedVideos = extras.getRelatedVideos(html);
      assert.deepEqual(relatedVideos, []);
      done();
    });
  });
});
