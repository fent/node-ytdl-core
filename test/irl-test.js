const assert = require('assert');
const nock = require('nock');
const ytdl = require('..');


const videos = {
  'Regular video': 'mgOS64BF2eU',
  'Age restricted': 'LuZu9N53Vd0',
  'Embed domain restricted': 'B3eAMGXFw1o',
  'No embed allowed': 'GFg8BP01F5Q',
  Offensive: 'hCKDsjLt_qU',
  'Live broadcast': '5qap5aO4i9A',
};


process.env.YTDL_NO_UPDATE = 'true';
describe('Try using ytdl-core without mocking', () => {
  before(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
  afterEach(() => {
    ytdl.cache.sig.clear();
    ytdl.cache.info.clear();
    ytdl.cache.cookie.clear();
  });

  describe('Try starting a download', () => {
    for (let [desc, videoID] of Object.entries(videos)) {
      describe(desc, () => {
        it('Request status code is 2xx', done => {
          const stream = ytdl(videoID);
          stream.on('error', done);
          stream.once('response', res => {
            stream.destroy();
            assert.ok(res.statusCode >= 200 && res.statusCode < 300);
            done();
          });
        });
      });
    }
  });
});
