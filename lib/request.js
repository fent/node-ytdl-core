var http  = require('http');
var https = require('https');
var parse = require('url').parse;
var util  = require('./util');

var httpLibs = { 'http:': http, 'https:': https };

/**
 * @param {String} url
 * @param {Object} options
 * @param {Function(Error, String)} callback
 * @return http.ClientRequest
 */
module.exports = function(url, options, callback) {
  var parsed = parse(url);
  var httpLib = httpLibs[parsed.protocol];
  if (!httpLib) {
    var err = new Error('Invalid URL: ' + url);
    if (callback) {
      callback(err);
    } else {
      throw err;
    }
    return;
  }

  if (options) { util.assignDeep(parsed, options); }
  var req = httpLib.get(parsed);
  if (callback) {
    req.on('response', function(res) {
      if (res.statusCode !== 200) {
        callback(new Error('Status code ' + res.statusCode));
        return;
      }

      var body = '';
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {
        callback(null, body);
      });
    });
    req.on('error', callback);
  }
  return req;
};
