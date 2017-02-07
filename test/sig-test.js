var sig    = require('../lib/sig');
var assert = require('assert-diff');
var fs     = require('fs');
var path   = require('path');
var nock   = require('./nock');
var sinon  = require('sinon');
var muk    = require('muk-prop');

var html5player = require('./html5player.json');


describe('Get tokens', function() {
  var key = 'en_US-vfljDEtYP';
  var url = '//s.ytimg.com/yts/jsbin/player-en_US-vfljDEtYP/base.js';
  var filepath = path.resolve(__dirname, 'files/html5player/' + key + '.js');

  it('Returns a set of tokens', function(done) {
    var scope = nock.url('https:' + url).replyWithFile(200, filepath);
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
      var url = '//s.ytimg.com/yts/jsbin/player-en_US-bad/base.js';
      var scope = nock.url('https:' + url).reply(404, 'uh oh');
      sig.getTokens(url, {}, function(err) {
        assert.ok(err);
        scope.done();
        done();
      });
    });
  });

  describe('Unable to find key in filename', function() {
    var warn = sinon.spy();
    before(function() {
      muk(console, 'warn', warn);
    });
    after(muk.restore);
    it('Warns the console, still attempts to get tokens', function(done) {
      var url = '//s.ytimg.com/badfilename.js';
      var scope = nock.url('https:' + url).replyWithFile(200, filepath);
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
    var url = '//s.ytimg.com/yts/jsbin/player-' + key + '/base.js';
    var contents = 'my personal contents';

    it('Gives an error', function(done) {
      var scope = nock.url('https:' + url).reply(200, contents);
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
        var scope = nock.url('https:' + url).reply(200, contents);
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

describe('Decipher formats', function() {
  var formats = [

  ];
  it('Adds signature to download URL', function() {

  });
});
