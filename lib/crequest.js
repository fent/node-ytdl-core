var request  = require('request');
var EventVat = require('eventvat');

// Cache for recently looked up video infos.
var cache = new EventVat({ autoexpire: 30 });

/**
 * Makes a request and caches the body so that additional requests
 * to the same url don't require network IO.
 *
 * @param {Object|String} options
 * @param {Function} callback
 */
module.exports = function(options, callback) {
  var url = options.url || options.uri || options;
  if (cache.exists(url)) {
    process.nextTick(function() {
      callback(null, cache.get(url));
    });
  } else {
    request(options, function(err, res, body) {
      if (err) return callback(err);
      if (res.statusCode !== 200) {
        return callback(new Error('status code ' + res.statusCode));
      }
      cache.set(url, body);
      callback(null, body);
    });
  }
};

// Export cache.
module.exports.cache = cache;
