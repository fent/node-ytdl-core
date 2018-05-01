const url     = require('url');
const request = require('miniget');


// A shared cache to keep track of html5player.js tokens.
exports.cache = new Map();


/**
 * Extract signature deciphering tokens from html5player file.
 *
 * @param {String} html5playerfile
 * @param {Object} options
 * @param {Function(!Error, Array.<String>)} callback
 */
exports.getTokens = (html5playerfile, options, callback) => {
  var key, cachedTokens;
  var rs = /(?:html5)?player[-_]([a-zA-Z0-9\-_]+)(?:\.js|\/)/
    .exec(html5playerfile);
  if (rs) {
    key = rs[1];
    cachedTokens = exports.cache.get(key);
  } else {
    console.warn('Could not extract html5player key:', html5playerfile);
  }
  if (cachedTokens) {
    callback(null, cachedTokens);
  } else {
    request(html5playerfile, options.requestOptions, (err, res, body) => {
      if (err) return callback(err);

      var tokens = exports.extractActions(body);
      if (key && (!tokens || !tokens.length)) {
        callback(new Error('Could not extract signature deciphering actions'));
        return;
      }

      exports.cache.set(key, tokens);
      callback(null, tokens);
    });
  }
};


/**
 * Decipher a signature based on action tokens.
 *
 * @param {Array.<String>} tokens
 * @param {String} sig
 * @return {String}
 */
exports.decipher = (tokens, sig) => {
  sig = sig.split('');
  for (let i = 0, len = tokens.length; i < len; i++) {
    let token = tokens[i], pos;
    switch (token[0]) {
      case 'r':
        sig = sig.reverse();
        break;
      case 'w':
        pos = ~~token.slice(1);
        sig = swapHeadAndPosition(sig, pos);
        break;
      case 's':
        pos = ~~token.slice(1);
        sig = sig.slice(pos);
        break;
      case 'p':
        pos = ~~token.slice(1);
        sig.splice(0, pos);
        break;
    }
  }
  return sig.join('');
};


/**
 * Swaps the first element of an array with one of given position.
 *
 * @param {Array.<Object>} arr
 * @param {Number} position
 * @return {Array.<Object>}
 */
function swapHeadAndPosition(arr, position) {
  var first = arr[0];
  arr[0] = arr[position % arr.length];
  arr[position] = first;
  return arr;
}


var jsVarStr = '[a-zA-Z_\\$][a-zA-Z_0-9]*';
var jsSingleQuoteStr = `'[^'\\\\]*(:?\\\\[\\s\\S][^'\\\\]*)*'`;
var jsDoubleQuoteStr = `"[^"\\\\]*(:?\\\\[\\s\\S][^"\\\\]*)*"`;
var jsQuoteStr = `(?:${jsSingleQuoteStr}|${jsDoubleQuoteStr})`;
var jsKeyStr = `(?:${jsVarStr}|${jsQuoteStr})`;
var jsPropStr = `(?:\\.${jsVarStr}|\\[${jsQuoteStr}\\])`;
var jsEmptyStr = `(?:''|"")`;
var reverseStr = ':function\\(a\\)\\{' +
  '(?:return )?a\\.reverse\\(\\)' +
'\\}';
var sliceStr = ':function\\(a,b\\)\\{' +
  'return a\\.slice\\(b\\)' +
'\\}';
var spliceStr = ':function\\(a,b\\)\\{' +
  'a\\.splice\\(0,b\\)' +
'\\}';
var swapStr = ':function\\(a,b\\)\\{' +
  'var c=a\\[0\\];a\\[0\\]=a\\[b(?:%a\\.length)?\\];a\\[b(?:%a\\.length)?\\]=c(?:;return a)?' +
'\\}';
var actionsObjRegexp = new RegExp(
  `var (${jsVarStr})=\\{((?:(?:` +
    jsKeyStr + reverseStr + '|' +
    jsKeyStr + sliceStr   + '|' +
    jsKeyStr + spliceStr  + '|' +
    jsKeyStr + swapStr +
  '),?\\r?\\n?)+)\\};'
);
var actionsFuncRegexp = new RegExp(`function(?: ${jsVarStr})?\\(a\\)\\{` +
    `a=a\\.split\\(${jsEmptyStr}\\);\\s*` +
    `((?:(?:a=)?${jsVarStr}` +
    jsPropStr +
    '\\(a,\\d+\\);)+)' +
    `return a\\.join\\(${jsEmptyStr}\\)` +
  '\\}'
);
var reverseRegexp = new RegExp(`(?:^|,)(${jsKeyStr})${reverseStr}`, 'm');
var sliceRegexp   = new RegExp(`(?:^|,)(${jsKeyStr})${sliceStr}`, 'm');
var spliceRegexp  = new RegExp(`(?:^|,)(${jsKeyStr})${spliceStr}`, 'm');
var swapRegexp    = new RegExp(`(?:^|,)(${jsKeyStr})${swapStr}`, 'm');


/**
 * Extracts the actions that should be taken to decipher a signature.
 *
 * This searches for a function that performs string manipulations on
 * the signature. We already know what the 3 possible changes to a signature
 * are in order to decipher it. There is
 *
 * * Reversing the string.
 * * Removing a number of characters from the beginning.
 * * Swapping the first character with another position.
 *
 * Note, `Array#slice()` used to be used instead of `Array#splice()`,
 * it's kept in case we encounter any older html5player files.
 *
 * After retrieving the function that does this, we can see what actions
 * it takes on a signature.
 *
 * @param {String} body
 * @return {Array.<String>}
 */
exports.extractActions = (body) => {
  var objResult = actionsObjRegexp.exec(body);
  var funcResult = actionsFuncRegexp.exec(body);
  if (!objResult || !funcResult) { return null; }

  var obj      = objResult[1].replace(/\$/g, '\\$');
  var objBody  = objResult[2].replace(/\$/g, '\\$');
  var funcBody = funcResult[1].replace(/\$/g, '\\$');

  var result = reverseRegexp.exec(objBody);
  var reverseKey = result && result[1]
    .replace(/\$/g, '\\$')
    .replace(/\$|^'|^"|'$|"$/g, '');
  result = sliceRegexp.exec(objBody);
  var sliceKey = result && result[1]
    .replace(/\$/g, '\\$')
    .replace(/\$|^'|^"|'$|"$/g, '');
  result = spliceRegexp.exec(objBody);
  var spliceKey = result && result[1]
    .replace(/\$/g, '\\$')
    .replace(/\$|^'|^"|'$|"$/g, '');
  result = swapRegexp.exec(objBody);
  var swapKey = result && result[1]
    .replace(/\$/g, '\\$')
    .replace(/\$|^'|^"|'$|"$/g, '');

  var keys = `(${[reverseKey, sliceKey, spliceKey, swapKey].join('|')})`;
  var myreg = '(?:a=)?' + obj +
    `(?:\\.${keys}|\\['${keys}'\\]|\\["${keys}"\\])` +
    '\\(a,(\\d+)\\)';
  var tokenizeRegexp = new RegExp(myreg, 'g');
  var tokens = [];
  while ((result = tokenizeRegexp.exec(funcBody)) !== null) {
    let key = result[1] || result[2] || result[3];
    switch (key) {
      case swapKey:
        tokens.push('w' + result[4]);
        break;
      case reverseKey:
        tokens.push('r');
        break;
      case sliceKey:
        tokens.push('s' + result[4]);
        break;
      case spliceKey:
        tokens.push('p' + result[4]);
        break;
    }
  }
  return tokens;
};


/**
 * @param {Object} format
 * @param {String} sig
 * @param {Boolean} debug
 */
exports.setDownloadURL = (format, sig, debug) => {
  var decodedUrl;
  if (format.url) {
    decodedUrl = format.url;
  } else {
    if (debug) {
      console.warn('Download url not found for itag ' + format.itag);
    }
    return;
  }

  try {
    decodedUrl = decodeURIComponent(decodedUrl);
  } catch (err) {
    if (debug) {
      console.warn('Could not decode url: ' + err.message);
    }
    return;
  }

  // Make some adjustments to the final url.
  var parsedUrl = url.parse(decodedUrl, true);

  // Deleting the `search` part is necessary otherwise changes to
  // `query` won't reflect when running `url.format()`
  delete parsedUrl.search;

  var query = parsedUrl.query;

  // This is needed for a speedier download.
  // See https://github.com/fent/node-ytdl-core/issues/127
  query.ratebypass = 'yes';
  if (sig) {
    query.signature = sig;
  }

  format.url = url.format(parsedUrl);
};


/**
 * Applies `sig.decipher()` to all format URL's.
 *
 * @param {Array.<Object>} formats
 * @param {Array.<String>} tokens
 * @param {Boolean} debug
 */
exports.decipherFormats = (formats, tokens, debug) => {
  formats.forEach((format) => {
    var sig = tokens && format.s ? exports.decipher(tokens, format.s) : null;
    exports.setDownloadURL(format, sig, debug);
  });
};
