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

  util.objectAssign(parsed, options, true);
  var req = httpLib.get(parsed);
  if (callback) {
    req.on('response', function(res) {
      // Support for Streaming 206 status videos
      if (res.statusCode !== 200 && res.statusCode !== 206) {
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
