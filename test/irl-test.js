const assert = require('assert');
const nock = require('nock');
const ytdl = require('..');


let videos = {
  'Regular video': 'mgOS64BF2eU',
  VEVO: 'qQ31INpjXX0',
  'VEVO 2': 'pJk0p-98Xzc',
  'Age restricted VEVO': 'B3eAMGXFw1o',
  'Age restricted': 'BlhyROz85OU',
  'Embed domain restricted': 'B3eAMGXFw1o',
  'No embed allowed': 'GFg8BP01F5Q',
  Offensive: 'hCKDsjLt_qU',
};


describe('Try downloading videos without mocking', function test() {
  this.retries(1);
  beforeEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
    ytdl.cache.sig.clear();
    ytdl.cache.info.clear();
  });

  Object.keys(videos).forEach(desc => {
    const video = videos[desc];
    describe(desc, () => {
      it('Request status code is 2xx', done => {
        const stream = ytdl(video, { debug: false });
        stream.once('response', res => {
          stream.destroy();
          assert.ok(res.statusCode >= 200 && res.statusCode < 300);
          done();
        });
      });
    });
  });
});
