var sig    = require('../lib/sig');
var assert = require('assert-diff');
var fs     = require('fs');
var path   = require('path');
var nock   = require('./nock');

var html5player = require('./html5player.json');


describe('Get tokens', function() {
  var key = 'en_US-vfljDEtYP';
  var url = '//s.ytimg.com/yts/jsbin/player-en_US-vfljDEtYP/base.js';

  it('Returns a set of tokens', function(done) {
    var filepath = path.resolve(__dirname, 'files/html5player/' + key + '.js');
    var scope = nock.url('http:' + url).replyWithFile(200, filepath);
    sig.getTokens(url, true, function(err, tokens) {
      if (err) return done(err);
      scope.done();
      assert.ok(tokens.length);
      done();
    });
  });

  describe('hit the same video twice', function() {
    it('Gets html5player tokens from cache', function(done) {
      nock.disableNetConnect();
      sig.getTokens(url, true, function(err, tokens) {
        if (err) return done(err);
        assert.ok(tokens.length);
        done();
      });
    });
  });
});

describe('Signature decypher', function() {
  describe('extract decyphering actions', function() {
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
