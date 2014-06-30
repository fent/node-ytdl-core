var request  = require('request');

module.exports = function(options, callback) {
  request(options, function(err, res, body) {
    if (err) return callback(err);
    if (res.statusCode !== 200) {
      return callback(new Error('status code ' + res.statusCode));
    }
    callback(null, body);
  });
};
