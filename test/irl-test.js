const assert = require('assert');
const nock   = require('nock');
const ytdl   = require('..');


let videos = {
  'Regular video'           : 'mgOS64BF2eU',
  'VEVO'                    : 'qQ31INpjXX0',
  'VEVO 2'                  : 'pJk0p-98Xzc',
  'Age restricted VEVO'     : 'B3eAMGXFw1o',
  'Age restricted'          : 'BlhyROz85OU',
  'Age restricted 2'        : 'Tzuvfy4jFwE',
  'Embed domain restricted' : 'B3eAMGXFw1o',
  'No embed allowed'        : 'GFg8BP01F5Q',
  'Offensive'               : 'hCKDsjLt_qU',
};


describe('Try downloading videos without mocking', () => {
  beforeEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
    ytdl.cache.sig.clear();
    ytdl.cache.info.clear();
  });

  Object.keys(videos).forEach((desc) => {
    const video = videos[desc];
    describe(desc, () => {
      it('Request status code is not 403 Forbidden', (done) => {
        const stream = ytdl(video, { debug: false });
        stream.once('response', (res) => {
          assert.notEqual(res.statusCode, 403);
          res.destroy();
          done();
        });
      });
    });
  });
});
