const utils = require('../lib/utils');
const assert = require('assert-diff');
const sinon = require('sinon');
const nock = require('nock');


describe('utils.between()', () => {
  it('`left` positioned at the start', () => {
    const rs = utils.between('<b>hello there friend</b>', '<b>', '</b>');
    assert.strictEqual(rs, 'hello there friend');
  });

  it('somewhere in the middle', () => {
    const rs = utils.between('something everything nothing', ' ', ' ');
    assert.strictEqual(rs, 'everything');
  });

  it('not found', () => {
    const rs = utils.between('oh oh _where_ is it', '<b>', '</b>');
    assert.strictEqual(rs, '');
  });

  it('`right` before `left`', () => {
    const rs = utils.between('>>> a <this> and that', '<', '>');
    assert.strictEqual(rs, 'this');
  });

  it('`right` not found', () => {
    const rs = utils.between('something [around[ somewhere', '[', ']');
    assert.strictEqual(rs, '');
  });
});


describe('utils.cutAfterJSON()', () => {
  it('Works with simple JSON', () => {
    assert.strictEqual(utils.cutAfterJSON('{"a": 1, "b": 1}'), '{"a": 1, "b": 1}');
  });
  it('Cut extra characters after JSON', () => {
    assert.strictEqual(utils.cutAfterJSON('{"a": 1, "b": 1}abcd'), '{"a": 1, "b": 1}');
  });
  it('Tolerant to string constants', () => {
    assert.strictEqual(utils.cutAfterJSON('{"a": "}1", "b": 1}abcd'), '{"a": "}1", "b": 1}');
  });
  it('Tolerant to string with escaped quoting', () => {
    assert.strictEqual(utils.cutAfterJSON('{"a": "\\"}1", "b": 1}abcd'), '{"a": "\\"}1", "b": 1}');
  });
  it('works with nested', () => {
    assert.strictEqual(
      utils.cutAfterJSON('{"a": "\\"1", "b": 1, "c": {"test": 1}}abcd'),
      '{"a": "\\"1", "b": 1, "c": {"test": 1}}',
    );
  });
  it('Works with utf', () => {
    assert.strictEqual(
      utils.cutAfterJSON('{"a": "\\"фыва", "b": 1, "c": {"test": 1}}abcd'),
      '{"a": "\\"фыва", "b": 1, "c": {"test": 1}}',
    );
  });
  it('Works with \\\\ in string', () => {
    assert.strictEqual(
      utils.cutAfterJSON('{"a": "\\\\фыва", "b": 1, "c": {"test": 1}}abcd'),
      '{"a": "\\\\фыва", "b": 1, "c": {"test": 1}}',
    );
  });
  it('Works with \\\\ towards the end of a string', () => {
    assert.strictEqual(
      utils.cutAfterJSON('{"text": "\\\\"};'),
      '{"text": "\\\\"}',
    );
  });
  it('Works with [ as start', () => {
    assert.strictEqual(
      utils.cutAfterJSON('[{"a": 1}, {"b": 2}]abcd'),
      '[{"a": 1}, {"b": 2}]',
    );
  });
  it('Returns an error when not beginning with [ or {', () => {
    assert.throws(() => {
      utils.cutAfterJSON('abcd]}');
    }, /Can't cut unsupported JSON \(need to begin with \[ or { \) but got: ./);
  });
  it('Returns an error when missing closing bracket', () => {
    assert.throws(() => {
      utils.cutAfterJSON('{"a": 1,{ "b": 1}');
    }, /Can't cut unsupported JSON \(no matching closing bracket found\)/);
  });
});


describe('utils.parseAbbreviatedNumber', () => {
  it('Parses abbreviated numbers', () => {
    assert.strictEqual(utils.parseAbbreviatedNumber('41K'), 41000);
    assert.strictEqual(utils.parseAbbreviatedNumber('1.5M'), 1500000);
    assert.strictEqual(utils.parseAbbreviatedNumber('8.19K '), 8190);
  });
  it('Parses non-abbreviated numbers', () => {
    assert.strictEqual(utils.parseAbbreviatedNumber('1234'), 1234);
    assert.strictEqual(utils.parseAbbreviatedNumber('123.456'), 123);
  });
  it('Returns `null` when given non-number', () => {
    assert.strictEqual(utils.parseAbbreviatedNumber('abc'), null);
  });
});


describe('utils.checkForUpdates', () => {
  beforeEach(() => delete process.env.YTDL_NO_UPDATE);
  after(() => process.env.YTDL_NO_UPDATE = 'true');
  beforeEach(() => utils.lastUpdateCheck = Date.now());
  afterEach(() => sinon.restore());

  describe('Already on latest', () => {
    it('Does not warn the console', async() => {
      const pkg = require('../package.json');
      sinon.replace(pkg, 'version', 'v1.0.0');
      const scope = nock('https://api.github.com')
        .get('/repos/fent/node-ytdl-core/releases/latest')
        .reply(200, { tag_name: `v${pkg.version}` });
      const warnSpy = sinon.spy();
      sinon.replace(console, 'warn', warnSpy);
      sinon.replace(Date, 'now', sinon.stub().returns(Infinity));
      await utils.checkForUpdates();
      scope.done();
      assert.ok(warnSpy.notCalled);
    });
  });

  describe('When there is a new update', () => {
    it('Warns the console about the update', async() => {
      const pkg = require('../package.json');
      sinon.replace(pkg, 'version', 'v1.0.0');
      const scope = nock('https://api.github.com')
        .get('/repos/fent/node-ytdl-core/releases/latest')
        .reply(200, { tag_name: 'vInfinity.0.0' });
      const warnSpy = sinon.spy();
      sinon.replace(console, 'warn', warnSpy);
      sinon.replace(Date, 'now', sinon.stub().returns(Infinity));
      await utils.checkForUpdates();
      scope.done();
      assert.ok(warnSpy.called);
      assert.ok(/is out of date!/.test(warnSpy.firstCall.args[0]));
    });
  });

  describe('Already checked recently', () => {
    it('Does not make request to check', async() => {
      const warnSpy = sinon.spy();
      sinon.replace(console, 'warn', warnSpy);
      await utils.checkForUpdates();
      assert.ok(warnSpy.notCalled);
    });
  });

  describe('With `YTDL_NO_UPDATE` env variable set', () => {
    it('Does not make request to check', async() => {
      process.env.YTDL_NO_UPDATE = 'true';
      const warnSpy = sinon.spy();
      sinon.replace(console, 'warn', warnSpy);
      await utils.checkForUpdates();
      assert.ok(warnSpy.notCalled);
    });
  });

  describe('When there is an error checking for updates', () => {
    it('Warns the console', async() => {
      const pkg = require('../package.json');
      sinon.replace(pkg, 'version', 'v1.0.0');
      const scope = nock('https://api.github.com')
        .get('/repos/fent/node-ytdl-core/releases/latest')
        .reply(403, 'slow down there');
      const warnSpy = sinon.spy();
      sinon.replace(console, 'warn', warnSpy);
      sinon.replace(Date, 'now', sinon.stub().returns(Infinity));
      await utils.checkForUpdates();
      scope.done();
      assert.ok(warnSpy.called);
      assert.ok(/Error checking for updates/.test(warnSpy.firstCall.args[0]));
      assert.ok(/Status code: 403/.test(warnSpy.firstCall.args[1]));
    });
  });
});
