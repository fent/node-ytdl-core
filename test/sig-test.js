var sig    = require('../lib/sig');
var assert = require('assert-diff');
var fs     = require('fs');
var path   = require('path');
var nock   = require('./nock');
var spy    = require('sinon').spy;
var muk    = require('muk-prop');

var html5player = require('./html5player.json');


describe('Get tokens', function() {
  var key = 'en_US-vfljDEtYP';
  var url = 'https://s.ytimg.com/yts/jsbin/player-en_US-vfljDEtYP/base.js';
  var filepath = path.resolve(__dirname, 'files/html5player/' + key + '.js');

  it('Returns a set of tokens', function(done) {
    var scope = nock.url(url).replyWithFile(200, filepath);
    sig.getTokens(url, true, function(err, tokens) {
      assert.ifError(err);
      scope.done();
      assert.ok(tokens.length);
      done();
    });
  });

  describe('Hit the same video twice', function() {
    after(function() {
      nock.enableNetConnect();
    });
    it('Gets html5player tokens from cache', function(done) {
      nock.disableNetConnect();
      sig.getTokens(url, {}, function(err, tokens) {
        assert.ifError(err);
        assert.ok(tokens.length);
        done();
      });
    });
  });

  describe('Get a bad html5player file', function() {
    it('Gives an error', function(done) {
      var url = 'https://s.ytimg.com/yts/jsbin/player-en_US-bad/base.js';
      var scope = nock.url(url).reply(404, 'uh oh');
      sig.getTokens(url, {}, function(err) {
        assert.ok(err);
        scope.done();
        done();
      });
    });
  });

  describe('Unable to find key in filename', function() {
    var warn = spy();
    muk(console, 'warn', warn);
    after(muk.restore);
    it('Warns the console, still attempts to get tokens', function(done) {
      var url = 'https://s.ytimg.com/badfilename.js';
      var scope = nock.url(url).replyWithFile(200, filepath);
      sig.getTokens(url, {}, function(err, tokens) {
        assert.ifError(err);
        scope.done();
        assert.ok(warn.called);
        assert.ok(tokens.length);
        done();
      });
    });
  });

  describe('Unable to find tokens', function() {
    var key = 'mykey';
    var url = 'https://s.ytimg.com/yts/jsbin/player-' + key + '/base.js';
    var contents = 'my personal contents';

    it('Gives an error', function(done) {
      var scope = nock.url(url).reply(200, contents);
      sig.getTokens(url, {}, function(err) {
        scope.done();
        assert.ok(err);
        assert.ok(/Could not extract/.test(err.message));
        done();
      });
    });

    describe('With debug on', function() {
      var filepath = path.resolve(__dirname, 'files/html5player', key + '.js');
      after(function(done) {
        fs.unlink(filepath, function() {
          var html5player = require('./html5player.json');
          delete html5player[key];
          fs.writeFile(
            path.resolve(__dirname, 'html5player.json'),
            JSON.stringify(html5player, null, 2), done);
        });
      });

      it('Saves files with contents into test directory', function(done) {
        var scope = nock.url(url).reply(200, contents);
        sig.getTokens(url, { debug: true }, function(err) {
          scope.done();
          assert.ok(err);
          fs.readFile(filepath, function(err, data) {
            assert.ifError(err);
            assert.equal(data, contents);
            done();
          });
        });
      });
    });
  });
});

describe('Signature decipher', function() {
  describe('extract deciphering actions', function() {
    it('Returns the correct set of actions', function() {
      for (var name in html5player) {
        var filepath = path.resolve(
          __dirname, 'files/html5player/' + name + '.js');
        var body = fs.readFileSync(filepath, 'utf8');
        var actions = sig.extractActions(body);
        assert.deepEqual(actions, html5player[name]);
      }
    });
  });

  function testDecipher(tokens, input, expected) {
    var result = sig.decipher(tokens, input);
    assert.equal(result, expected);
  }

  describe('properly apply actions based on tokens', function() {
    it('reverses', function() {
      testDecipher(['r'], 'abcdefg', 'gfedcba');
    });

    it('swaps head and position', function() {
      testDecipher(['w2'], 'abcdefg', 'cbadefg');
      testDecipher(['w3'], 'abcdefg', 'dbcaefg');
      testDecipher(['w5'], 'abcdefg', 'fbcdeag');
    });

    it('slices', function() {
      testDecipher(['s3'], 'abcdefg', 'defg');
    });

    it('real set of tokens', function() {
      testDecipher(html5player['en_US-vfl0Cbn9e'],
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'bbSdefghijklmnoaqrstuvwxyzAZCDEFGHIJKLMNOPQRpTUVWc');
    });
  });
});

describe('Set download URL', function() {
  it('Adds signature to download URL', function() {
    var format = {
      fallback_host: 'tc.v9.cache7.googlevideo.com',
      quality: 'small',
      type: 'video/x-flv',
      itag: '5',
      url: 'https://r4---sn-p5qlsnsr.googlevideo.com/videoplayback?nh=IgpwZjAxLmlhZDI2Kgw3Mi4xNC4yMDMuOTU&upn=utAH1aBebVk&source=youtube&sparams=cwbhb%2Cdur%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cnh%2Cpl%2Crequiressl%2Csource%2Cupn%2Cexpire&initcwndbps=772500&pl=16&ip=0.0.0.0&lmt=1309008098017854&key=yt6&id=o-AJj1D_OYO_EieAH08Qa2tRsP6zid9dsuPAvktizyDRlv&expire=1444687469&mm=31&mn=sn-p5qlsnsr&itag=5&mt=1444665784&mv=m&cwbhb=yes&fexp=9408208%2C9408490%2C9408710%2C9409069%2C9414764%2C9415435%2C9416126%2C9417224%2C9417380%2C9417488%2C9417707%2C9418448%2C9418494%2C9419445%2C9419802%2C9420324%2C9420348%2C9420982%2C9421013%2C9421170%2C9422341%2C9422540&ms=au&sver=3&dur=298.109&requiressl=yes&ipbits=0&mime=video%2Fx-flv&ratebypass=yes',
      container: 'flv',
      resolution: '240p',
      encoding: 'Sorenson H.283',
      profile: null,
      bitrate: '0.25',
      audioEncoding: 'mp3',
      audioBitrate: 64
    };
    sig.setDownloadURL(format, 'mysiggy', false);
    assert.ok(format.url.indexOf('signature=mysiggy') > -1);
  });

  describe('With a badly formatted URL', function() {
    var format = {
      url: 'https://r4---sn-p5qlsnsr.googlevideo.com/videoplayback?%',
    };

    it('Does not set URL', function() {
      sig.setDownloadURL(format, 'mysiggy', false);
      assert.ok(format.url.indexOf('signature=mysiggy') === -1);
    });

    describe('With debug on', function() {
      it('Logs to console', function() {
        var warn = spy();
        muk(console, 'warn', warn);
        after(muk.restore);
        sig.setDownloadURL(format, 'mysiggy', true);
        assert.ok(warn.called);
        assert.ok(format.url.indexOf('signature=mysiggy') === -1);
      });
    });
  });

  describe('Without a URL', function() {
    var format = { bla: 'blu' };

    it('Does not set URL', function() {
      sig.setDownloadURL(format, 'nothing', false);
      assert.deepEqual(format, { bla: 'blu' });
    });

    describe('With debug on', function() {
      it('Logs to console', function() {
        var warn = spy();
        muk(console, 'warn', warn);
        after(muk.restore);
        sig.setDownloadURL(format, 'nothing', true);
        assert.ok(warn.called);
        assert.deepEqual(format, { bla: 'blu' });
      });
    });
  });
});
