var request  = require('request');
var EventVat = require('eventvat');

var ytdl = {};
// Circular dependency.
process.nextTick(function() {
  // Cache for recently looked up video infos.
  ytdl = require('./index');
});

/**
 * Makes a request and caches the body so that additional requests
 * to the same url don't require network IO.
 *
 * @param {Object|String} options
 * @param {Function} callback
 */
module.exports = function(options, callback) {
  var url = options.url || options.uri || options;
  if (ytdl.cache && ytdl.cache.exists(url)) {
    process.nextTick(function() {
      callback(null, ytdl.cache.get(url));
    });
  } else {
    request(options, function(err, res, body) {
      if (err) return callback(err);
      if (res.statusCode !== 200) {
        return callback(new Error('status code ' + res.statusCode));
      }
      if (ytdl.cache) {
        ytdl.cache.set(url, body);
      }
      callback(null, body);
    });
  }
};

// Export cache.
module.exports.cache = new EventVat({ autoexpire: 30 });
