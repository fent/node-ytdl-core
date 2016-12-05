var assert  = require('assert');
var nock    = require('nock');
var request = require('../lib/request');


describe('Request a page', function() {
  describe('with callback', function() {
    it('Gives contents of page', function(done) {
      nock('http://website.com')
        .get('/path')
        .replyWithFile(200, __filename);
      request('http://website.com/path', {}, function(err, body) {
        assert.ifError(err);
        assert.ok(body.length > 100);
        done();
      });
    });

    describe('that errors', function() {
      it('Calls callback with error', function(done) {
        nock('https://mysite.com')
          .get('/path')
          .replyWithError('oh no');
        request('https://mysite.com/path', {}, function(err) {
          assert.ok(err);
          done();
        });
      });
    });

    describe('with bad path', function() {
      it('Calls callback with error', function(done) {
        nock('https://mysite.com')
          .get('/badpath')
          .reply(404, 'not exists');
        request('https://mysite.com/badpath', {}, function(err) {
          assert.ok(err);
          done();
        });
      });
    });
  });

  describe('without callback', function() {
    it('Returns a stream', function(done) {
      nock('http://website.com')
        .get('/path')
        .replyWithFile(200, __filename);
      var stream = request('http://website.com/path', {});
      stream.on('error', done);
      stream.on('response', function(res) {
        res.on('error', done);
        res.on('end', done);
        res.resume();
      });
    });
  });

  describe('with an incorrect URL', function() {
    describe('with callback', function() {
      it('Called with error', function(done) {
        request('file:///Users/roly/', {}, function(err) {
          assert.ok(err);
          done();
        });
      });
    });

    describe('without callback', function() {
      it('Throws error', function() {
        assert.throws(function() {
          request('file:///Users/roly/');
        }, /Invalid URL/);
      });
    });
  });
});
