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

describe('utils.isIPv6', () => {
  it('returns true for valid IPv6 net', () => {
    assert.ok(utils.isIPv6('100::/128'));
    assert.ok(utils.isIPv6('100::/119'));
    assert.ok(utils.isIPv6('100::/13'));
    assert.ok(utils.isIPv6('100::/1'));
    assert.ok(utils.isIPv6('20a::/13'));
    assert.ok(utils.isIPv6('0064:ff9b:0000:0000:0000:0000:1234:5678/13'));
    assert.ok(utils.isIPv6('0064:ff9b:0001:1122:0033:4400:0000:0001/13'));
    assert.ok(utils.isIPv6('fe80:4:6c:8c74:0000:5efe:afef:a89/13'));
    assert.ok(utils.isIPv6('fe80:4:6c:8c74:0000:5efe::a89/13'));
    assert.ok(utils.isIPv6('fe80:4:6c:8c74:0000::a89/13'));
    assert.ok(utils.isIPv6('fe80:4:6c:8c74::a89/13'));
    assert.ok(utils.isIPv6('fe80:4:6c::a89/13'));
    assert.ok(utils.isIPv6('fe80:4::a89/13'));
    assert.ok(utils.isIPv6('fe80::a89/13'));
    assert.ok(utils.isIPv6('fe80::/13'));
    assert.ok(utils.isIPv6('fea3:c65:43ee:54:e2a:2357:4ac4:732/13'));
    assert.ok(utils.isIPv6('fe80:1234:abc/13'));
    assert.ok(utils.isIPv6('20a:1234::1/13'));
  });

  it('returns false for valid but unwanted IPv6 net', () => {
    assert.ok(!utils.isIPv6('::/1'));
    assert.ok(!utils.isIPv6('::1/1'));
    assert.ok(!utils.isIPv6('::ffff:10.0.0.3/1'));
    assert.ok(!utils.isIPv6('::10.0.0.3/1'));
    assert.ok(!utils.isIPv6('127.0.0.1/1'));
    assert.ok(!utils.isIPv6('24a6:57:c:36cf:0000:5efe:109.205.140.116/64'));
  });

  it('returns false for invalid IPv6 net', () => {
    assert.ok(!utils.isIPv6('100::/129'));
    assert.ok(!utils.isIPv6('100::/130'));
    assert.ok(!utils.isIPv6('100::/abc'));
    assert.ok(!utils.isIPv6('100::'));
    assert.ok(!utils.isIPv6('fe80:4::8c74::5efe:afef:a89/64'));
    assert.ok(!utils.isIPv6('24a6:57:c:36cf:0000:5efe:ab:cd:ef/64'));
    assert.ok(!utils.isIPv6('24a6:57:c:36cf:0000:5efe::ab:cd/64'));
  });
});

describe('utils.getRandomIPv6', () => {
  it('errors for completely invalid ipv6', () => {
    assert.throws(() => {
      utils.getRandomIPv6('some random string');
    }, /Invalid IPv6 format/);
  });

  it('errors for invalid subnet sizes', () => {
    assert.throws(() => {
      utils.getRandomIPv6('fe80::/300');
    }, /Invalid IPv6 format/);
    assert.throws(() => {
      utils.getRandomIPv6('127::1/1');
    }, /Invalid IPv6 subnet/);
    assert.throws(() => {
      utils.getRandomIPv6('fe80::');
    }, /Invalid IPv6 format/);
    assert.throws(() => {
      utils.getRandomIPv6('fe80::/ff');
    }, /Invalid IPv6 format/);
  });

  it('keeps the upper bits of the subnet', () => {
    for (let i = 24; i < 128; i++) {
      const ip = utils.getRandomIPv6(`ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff/${i}`);
      const bits = ip.split(':').map(x => parseInt(x, 16).toString(2)).join('');
      assert.equal(bits.substr(0, i), '1'.repeat(i));
    }
  });

  it('rolls random bits for the lower bits', () => {
    // Only testing to 64 and not 128
    // The second part of the random IP is tested to not be only onces
    // and rolling 8 full 0xff bytes should be unlikely enough
    for (let i = 24; i < 64; i++) {
      const ip = utils.getRandomIPv6(`ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff/${i}`);
      const bits = ip.split(':').map(x => parseInt(x, 16).toString(2)).join('');
      assert.ok(bits.substr(i).split('').some(x => x === '0'));
    }
  });
});

describe('utils.normalizeIP', () => {
  it('does work for already expanded ips', () => {
    assert.deepEqual(utils.normalizeIP('1:2:3:4:5:6:7:8'), [1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('resolves bytes to integers', () => {
    assert.deepEqual(utils.normalizeIP('ffff'), [65535, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('expands ::', () => {
    assert.deepEqual(utils.normalizeIP('ab::cd'), [171, 0, 0, 0, 0, 0, 0, 205]);
    assert.deepEqual(utils.normalizeIP('ab:cd::ef'), [171, 205, 0, 0, 0, 0, 0, 239]);
    assert.deepEqual(utils.normalizeIP('ab:cd::12:ef'), [171, 205, 0, 0, 0, 0, 18, 239]);
    assert.deepEqual(utils.normalizeIP('ab:cd::'), [171, 205, 0, 0, 0, 0, 0, 0]);
    assert.deepEqual(utils.normalizeIP('123::'), [291, 0, 0, 0, 0, 0, 0, 0]);
    assert.deepEqual(utils.normalizeIP('0::'), [0, 0, 0, 0, 0, 0, 0, 0]);
    assert.deepEqual(utils.normalizeIP('::'), [0, 0, 0, 0, 0, 0, 0, 0]);
    assert.deepEqual(utils.normalizeIP('::ab:cd'), [0, 0, 0, 0, 0, 0, 171, 205]);
  });

  it('does handle invalid ips', () => {
    assert.deepEqual(utils.normalizeIP('1:2:3:4:5::6:7:8::'), [1, 2, 3, 4, 5, 6, 7, 8]);
    assert.deepEqual(utils.normalizeIP('::1:2:3:4:5:6:7:8'), [1, 2, 3, 4, 5, 6, 7, 8]);
    assert.deepEqual(utils.normalizeIP('1:2:3:4:5::6:7:8:9:10'), [1, 2, 3, 6, 7, 8, 9, 16]);
  });
});

describe('utils.exposedMiniget', () => {
  it('does not error with undefined requestOptionsOverwrite', async() => {
    const scope = nock('https://test.com').get('/').reply(200, 'nice');
    const req = utils.exposedMiniget('https://test.com/', {});
    await req.text();
    scope.done();
  });

  it('does not error without options', async() => {
    const scope = nock('https://test.com').get('/').reply(200, 'nice');
    const req = utils.exposedMiniget('https://test.com/');
    await req.text();
    scope.done();
  });

  it('does not error without options', async() => {
    const scope = nock('https://test.com').get('/').reply(200, 'nice');
    const req = utils.exposedMiniget('https://test.com/');
    assert.equal(await req.text(), 'nice');
    scope.done();
  });

  it('calls a provided callback with the req object', async() => {
    const scope = nock('https://test.com').get('/').reply(200, 'nice');
    let cbReq;
    const requestCallback = r => cbReq = r;
    const req = utils.exposedMiniget('https://test.com/', { requestCallback });
    await req.text();
    assert.equal(cbReq, req);
    scope.done();
  });

  it('it uses requestOptions', async() => {
    const scope = nock('https://test.com', { reqheaders: { auth: 'a' } }).get('/').reply(200, 'nice');
    const req = utils.exposedMiniget('https://test.com/', { requestOptions: { headers: { auth: 'a' } } });
    await req.text();
    scope.done();
  });

  it('it prefers requestOptionsOverwrite over requestOptions', async() => {
    const scope = nock('https://test.com', { reqheaders: { auth: 'b' } }).get('/').reply(200, 'nice');
    const req = utils.exposedMiniget(
      'https://test.com/',
      { requestOptions: { headers: { auth: 'a' } } },
      { headers: { auth: 'b' } },
    );
    await req.text();
    scope.done();
  });
});
