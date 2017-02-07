// A cache to keep track of html5player tokens, so that we don't request
// these static files from Youtube and parse them every time a video
// needs the same one.
//
// The cache is very simplistic, shared, and it only needs get and set.
exports.store = {};


/**
 * @param {String} key
 * @param {Object} value
 */
exports.set = function(key, value) {
  exports.store[key] = value;
};


/**
 * @param {String} key
 * @return {Object}
 */
exports.get = function(key) {
  return exports.store[key];
};


/**
 * Empties the cache.
 */
exports.reset = function() {
  exports.store = {};
};
