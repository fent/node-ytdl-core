const querystring = require('querystring');
const Cache = require('./cache');
const utils = require('./utils');
const vm = require('vm');


let nTransformWarning = false;

// A shared cache to keep track of html5player js functions.
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

// eslint-disable-next-line max-len
// https://github.com/TeamNewPipe/NewPipeExtractor/blob/41c8dce452aad278420715c00810b1fed0109adf/extractor/src/main/java/org/schabi/newpipe/extractor/services/youtube/extractors/YoutubeStreamExtractor.java#L816
const DECIPHER_REGEXPS = [
  '(?:\\b|[^a-zA-Z0-9$])([a-zA-Z0-9$]{2,})\\s*=\\s*function\\(\\s*a\\s*\\)' +
  '\\s*\\{\\s*a\\s*=\\s*a\\.split\\(\\s*""\\s*\\)',
  '\\bm=([a-zA-Z0-9$]{2,})\\(decodeURIComponent\\(h\\.s\\)\\)',
  '\\bc&&\\(c=([a-zA-Z0-9$]{2,})\\(decodeURIComponent\\(c\\)\\)',
  '([\\w$]+)\\s*=\\s*function\\((\\w+)\\)\\{\\s*\\2=\\s*\\2\\.split\\(""\\)\\s*;',
  '\\b([\\w$]{2,})\\s*=\\s*function\\((\\w+)\\)\\{\\s*\\2=\\s*\\2\\.split\\(""\\)\\s*;',
  '\\bc\\s*&&\\s*d\\.set\\([^,]+\\s*,\\s*(:encodeURIComponent\\s*\\()([a-zA-Z0-9$]+)\\(',
];

const DECIPHER_ARGUMENT = 'sig';
const N_ARGUMENT = 'ncode';

const matchGroup1 = (regex, str) => {
  const match = str.match(new RegExp(regex));
  if (!match) throw new Error(`Could not match ${regex}`);
  return match[1];
};

const getFuncName = (body, regexps) => {
  try {
    let fn;
    for (const regex of regexps) {
      try {
        fn = matchGroup1(regex, body);
        const idx = fn.indexOf('[0]');
        if (idx > -1) fn = matchGroup1(`${fn.slice(0, 3)}=\\[([a-zA-Z0-9$\\[\\]]{2,})\\]`, body);
      } catch (err) {
        continue;
      }
    }
    if (!fn || fn.includes('[')) throw Error("Couldn't find fn name");
    return fn;
  } catch (e) {
    throw Error(`Please open an issue on ytdl-core GitHub: ${e.message}`);
  }
};

const getDecipherFuncName = body => getFuncName(body, DECIPHER_REGEXPS);


/**
 * Extracts the actions that should be taken to decipher a signature
 * and tranform the n parameter
 *
 * @param {string} body
 * @returns {Array.<string>}
 */
exports.extractFunctions = body => {
  body = body.replace(/\n|\r/g, '');
  const functions = [];
  // This is required function, so we can't continue if it's not found.
  const extractDecipher = () => {
    const decipherFuncName = getDecipherFuncName(body);
    try {
      const functionPattern = `(${decipherFuncName.replace(/\$/g, '\\$')}=function\\([a-zA-Z0-9_]+\\)\\{.+?\\})`;
      const decipherFunction = `var ${matchGroup1(functionPattern, body)};`;
      const helperObjectName = matchGroup1(';([A-Za-z0-9_\\$]{2,})\\.\\w+\\(', decipherFunction)
        .replace(/\$/g, '\\$');
      const helperPattern = `(var ${helperObjectName}=\\{[\\s\\S]+?\\}\\};)`;
      const helperObject = matchGroup1(helperPattern, body);
      const callerFunction = `${decipherFuncName}(${DECIPHER_ARGUMENT});`;
      const resultFunction = helperObject + decipherFunction + callerFunction;
      functions.push(resultFunction);
    } catch (err) {
      throw Error(`Could not parse decipher function: ${err}`);
    }
  };
  // This is optional, so we can continue if it's not found, but it will bottleneck the download.
  const extractNTransform = () => {
    let nFuncName = utils.between(body, `(b=a.get("n"))&&(b=`, `(b)`);
    if (nFuncName.includes('[')) nFuncName = utils.between(body, `${nFuncName.split('[')[0]}=[`, `]`);
    if (nFuncName && nFuncName.length) {
      const nBegin = `${nFuncName}=function(a)`;
      const nEnd = '.join("")};';
      const nFunction = utils.between(body, nBegin, nEnd);
      if (nFunction) {
        const callerFunction = `${nFuncName}(${N_ARGUMENT});`;
        const resultFunction = nBegin + nFunction + nEnd + callerFunction;
        functions.push(resultFunction);
      } else if (!nTransformWarning) {
        console.warn('Could not parse n transform function, please report it on @distube/ytdl-core GitHub.');
        nTransformWarning = true;
      }
    }
  };
  extractDecipher();
  extractNTransform();
  return functions;
};

/**
 * Apply decipher and n-transform to individual format
 *
 * @param {Object} format
 * @param {vm.Script} decipherScript
 * @param {vm.Script} nTransformScript
 */
exports.setDownloadURL = (format, decipherScript, nTransformScript) => {
  const decipher = url => {
    const args = querystring.parse(url);
    if (!args.s) return args.url;
    const components = new URL(decodeURIComponent(args.url));
    const context = {};
    context[DECIPHER_ARGUMENT] = decodeURIComponent(args.s);
    components.searchParams.set(args.sp || 'sig', decipherScript.runInNewContext(context));
    return components.toString();
  };
  const nTransform = url => {
    const components = new URL(decodeURIComponent(url));
    const n = components.searchParams.get('n');
    if (!n || !nTransformScript) return url;
    const context = {};
    context[N_ARGUMENT] = n;
    components.searchParams.set('n', nTransformScript.runInNewContext(context));
    return components.toString();
  };
  const cipher = !format.url;
  const url = format.url || format.signatureCipher || format.cipher;
  format.url = cipher ? nTransform(decipher(url)) : nTransform(url);
  delete format.signatureCipher;
  delete format.cipher;
};

/**
 * Applies decipher and n parameter transforms to all format URL's.
 *
 * @param {Array.<Object>} formats
 * @param {string} html5player
 * @param {Object} options
 */
exports.decipherFormats = async(formats, html5player, options) => {
  let decipheredFormats = {};
  let functions = await exports.getFunctions(html5player, options);
  const decipherScript = functions.length ? new vm.Script(functions[0]) : null;
  const nTransformScript = functions.length > 1 ? new vm.Script(functions[1]) : null;
  formats.forEach(format => {
    exports.setDownloadURL(format, decipherScript, nTransformScript);
    decipheredFormats[format.url] = format;
  });
  return decipheredFormats;
};
