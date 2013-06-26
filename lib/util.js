/**
 * Parses a string representation of amount of milliseconds.
 *
 * @param {String} time
 * @return {Number}
 */
var regexp = /(?:(\d+)h)?(?:(\d+)m(?!s))?(?:(\d+)s)?(?:(\d+)(?:ms)?)?/;
exports.parseTime = function(time) {
  var result = regexp.exec(time.toString());
  var hours  = result[1] || 0;
  var mins   = result[2] || 0;
  var secs   = result[3] || 0;
  var ms     = result[4] || 0;

  return hours * 3600000 + mins * 60000 + secs * 1000 + parseInt(ms, 10);
};


/**
 * Algorithm for decyphering the signature of a video download.
 *
 * @param {String} sig
 * @return {String}
 */
exports.signatureDecipher = function(sig) {
  var out = swapHeadAndPosition(sig.split(''), 52);
  out = out.reverse();
  out = out.slice(3);
  out = swapHeadAndPosition(out, 21);
  out = out.slice(0, -3);
  return out.join('');
};


/**
 * Swaps the first element of an array with one of given position.
 */
function swapHeadAndPosition(arr, position) {
  var first = arr[0];
  arr[0] = arr[position % arr.length];
  arr[position] = first;
  return arr;
}
