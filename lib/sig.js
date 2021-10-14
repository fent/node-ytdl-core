const querystring = require('querystring');
const urllib = require('url');
const Cache = require('./cache');
const utils = require('./utils');

// A shared cache to keep track of html5player.js functions.
exports.cache = new Cache();

/**
 * Extract signature deciphering and n parameter transform functions from html5player file.
 *
 * @param {string} html5playerfile
 * @param {Object} options
 * @returns {Promise<Array.<string>>}
 */
exports.getFunctions = (html5playerfile, options) => exports.cache.getOrSet(html5playerfile, async() => {
  const body = await utils.exposedMiniget(html5playerfile, options).text();
  const functions = exports.extractFunctions(body);
  if (!functions || !functions.length) {
    throw Error('Could not extract functions');
  }
  exports.cache.set(html5playerfile, functions);
  return functions;
});

/**
 * Extracts the actions that should be taken to decipher a signature
 * and tranform the n parameter
 *
 * @param {string} body
 * @returns {Array.<string>}
 */
exports.extractFunctions = body => {
  let functions = [];
  let extractManipulations = caller => {
    let functionName = utils.between(caller, `a=a.split("");`, `.`);
    if (!functionName) return '';
    let functionStart = `var ${functionName}={`;
    let ndx = body.indexOf(functionStart);
    if (ndx < 0) return '';
    let subBody = body.slice(ndx + functionStart.length - 1);
    return `var ${functionName}=${utils.cutAfterJSON(subBody)}`;
  };
  let extractDecipher = () => {
    let functionName = utils.between(body, `a.set("alr","yes");c&&(c=`, `(decodeURIC`);
    if (functionName && functionName.length) {
      let functionStart = `${functionName}=function(a)`;
      let ndx = body.indexOf(functionStart);
      if (ndx >= 0) {
        let subBody = body.slice(ndx + functionStart.length);
        let functionBody = `var ${functionStart}${utils.cutAfterJSON(subBody)}`;
        functionBody = `${extractManipulations(functionBody)};${functionBody};return ${functionName}(sig);`;
        functions.push(functionBody);
      }
    }
  };
  let extractNCode = () => {
    let functionName = utils.between(body, `&&(b=a.get("n"))&&(b=`, `(b)`);
    if (functionName && functionName.length) {
      let functionStart = `${functionName}=function(a)`;
      let ndx = body.indexOf(functionStart);
      if (ndx >= 0) {
        let subBody = body.slice(ndx + functionStart.length);
        let functionBody = `var ${functionStart}${utils.cutAfterJSON(subBody)}`;
        functions.push(`${functionBody}; return ${functionName}(ncode);`);
      }
    }
  };
  extractDecipher();
  extractNCode();
  return functions;
};

/**
 * @param {Array.<string>} functions
 * @param {Object} format
 */
exports.setDownloadURL = (functions, format) => {
  let decipher = url => {
    let args = querystring.parse(url);
    if (!args.s) return args.url;
    let decipherFunction = new Function('sig', functions[0]);
    let sig = decipherFunction(decodeURIComponent(args.s));
    let components = new urllib.URL(decodeURIComponent(args.url));
    components.searchParams.set(args.sp ? args.sp : 'signature', sig);
    return components.toString();
  };
  let ncode = url => {
    let components = new urllib.URL(decodeURIComponent(url));
    let n = components.searchParams.get('n');
    if (!n || functions.length < 2) return url;
    let nTransformFunction = new Function('ncode', functions[1]);
    n = nTransformFunction(n);
    components.searchParams.set('n', n);
    return components.toString();
  };
  let cipher = !format.url;
  let url = format.url || format.signatureCipher || format.cipher;
  if (cipher) {
    format.url = ncode(decipher(url));
  } else {
    format.url = ncode(url);
  }
  delete format.signatureCipher;
  delete format.cipher;
};

/**
 * Applies `sig.decipher()` and `sig.ncode()` to all format URL's.
 *
 * @param {Array.<Object>} formats
 * @param {string} html5player
 * @param {Object} options
 */
exports.decipherFormats = async(formats, html5player, options) => {
  let decipheredFormats = {};
  let functions = await exports.getFunctions(html5player, options);
  formats.forEach(format => {
    if (functions) exports.setDownloadURL(functions, format);
    decipheredFormats[format.url] = format;
  });
  return decipheredFormats;
};
