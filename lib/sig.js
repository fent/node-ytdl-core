/**
 * Decipher a signature based on action tokens.
 *
 * @param {Array.<String>} tokens
 * @param {String} sig
 * @return {String}
 */
exports.decipher = function(tokens, sig) {
  console.log('orig');
  console.log(sig);
  sig = sig.split('');
  var pos, d;
  for (var i = 0, len = tokens.length; i < len; i++) {
    var token = tokens[i];
    switch (token[0]) {
    case 'r':
      sig = sig.reverse();
      console.log('reverse');
      console.log(sig.join(''));
      break;
    case 'w':
      pos = ~~token.slice(1);
      sig = swapHeadAndPosition(sig, pos);
      console.log('swap', pos);
      d = sig.join('');
      console.log(d[0].cyan + d.slice(1, pos) +
        d[pos].cyan + d.slice(pos + 1));
      break;
    case 's':
      pos = ~~token.slice(1);
      var l = sig.slice(0, pos).join('');
      sig = sig.slice(pos);
      console.log('slice', pos);
      d = sig.join('');
      console.log(l.red + d);
    }
  }
  console.log();
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


/**
 * Extracts the actions that should be taken to decypher a signature.
 *
 * @param {String} body
 * @return {Array.<String>}
 */
/*jshint maxlen:false */
var actionsRegexp = /([a-z])=(?:\1|[a-z]\.[a-z])\.split\(""\)(;|,)((?:\1=(?:\1\.reverse\(\)|[a-zA-Z]{2}\(\1,\d+\)|\1\.slice\(\d+\))\2)+)(?:return |\1=)\1\.join\(""\)/;
exports.extractActions = function(body) {
  var result = actionsRegexp.exec(body);
  if (!result) { return null; }

  console.log('RESULTS', result[0]);
  var sig = result[1];
  var sep = result[2];
  var acts = result[3];
  var myreg = sig + '=(?:' +
      '(' + sig + '\\.reverse\\(\\))|' +
      '([a-zA-Z]{2}\\(' + sig + ',(\\d+)\\))|' +
      '(' + sig + '\\.slice\\((\\d+)\\))' +
    ')' + sep;
  var tokenizeRegexp = new RegExp(myreg, 'g');
  var tokens = [];
  while ((result = tokenizeRegexp.exec(acts)) !== null) {
    if (result[1]) {
      tokens.push('r');
      console.log('push reverse');
    } else if (result[2]) {
      tokens.push('w' + result[3]);
      console.log('push swap', result[3]);
    } else if (result[4]) {
      tokens.push('s' + result[5]);
      console.log('push slice', result[5]);
    }
  }
  return tokens;
};
