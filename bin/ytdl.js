#!/usr/bin/env node

var path = require('path');
var fs   = require('fs');
var ytdl = require('..');
require('colors');


var info = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '..', 'package.json')));

var opts = require('nomnom')
  .option('version', {
    abbr: 'v'
  , flag: true
  , callback: function() {
      console.log('v' + info.version);
      process.exit();
    }
  , help: 'Print program version.'
  })
  .option('url', {
    position: 0
  , required: true
  , help: 'URL to the video.'
  })
  .option('quality', {
    abbr: 'q'
  , metavar: 'ITAG'
  , help: 'Video quality to download. Default: `highest`'
  })
  .option('start', {
    abbr: 's'
  , metavar: 'TIME'
  , help: 'Where to begin the video. ie 1m3s, 45s, 2300.'
  })
  .option('output', {
    abbr: 'o'
  , metavar: 'FILE'
  , help: 'Where to save the file. Default: stdout'
  })
  .option('filterContainer', {
    full: 'filter-container'
  , metavar: 'REGEXP'
  , help: 'Filter in format container.'
  })
  .option('unfilterContainer', {
    full: 'unfilter-container'
  , metavar: 'REGEXP'
  , help: 'Filter out format container.'
  })
  .option('filterResolution', {
    full: 'filter-resolution'
  , metavar: 'REGEXP'
  , help: 'Filter in format resolution.'
  })
  .option('unfilterResolution', {
    full: 'unfilter-resolution'
  , metavar: 'REGEXP'
  , help: 'Filter out format resolution.'
  })
  .option('filterEncoding', {
    full: 'filter-encoding'
  , metavar: 'REGEXP'
  , help: 'Filter in format encoding.'
  })
  .option('unfilterEncoding', {
    full: 'unfilter-encoding'
  , metavar: 'REGEXP'
  , help: 'Filter out format encoding.'
  })
  .script('ytdl')
  .colors()
  .parse()
  ;


var output = opts.output;
var writeStream = output ? fs.createWriteStream(output) : process.stdout;

var ytdlOptions = {};
ytdlOptions.quality = opts.quality;
ytdlOptions.begin = opts.begin;

// create filters
var filters = [];

// @param (string) field
// @param (string) regexpStr
// @param (boolean|null) negated
function createFilter(field, regexpStr, negated) {
  try {
    var regexp = new RegExp(regexpStr, 'i');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  filters.push(function(format) {
    return negated !== regexp.test(format[field]);
  });
}

['container', 'resolution', 'encoding'].forEach(function(field) {
  var key = 'filter' + field[0].toUpperCase() + field.slice(1);
  if (opts[key]) {
    createFilter(field, opts[key], false);
  }

  key = 'un' + key;
  if (opts[key]) {
    createFilter(field, opts[key], true);
  }
});

ytdlOptions.filter = function(format) {
  return filters.every(function(filter) {
    return filter(format);
  });
};

var readStream = ytdl(opts.url, ytdlOptions);
readStream.pipe(writeStream);

// converst bytes to human readable unit
// thank you Amir from StackOverflow
var units = ' KMGTPEZYXWVU';
function toHumanSize(bytes) {
  if (bytes <= 0) { return 0; }
  var t2 = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), 12);
  return (Math.round(bytes * 100 / Math.pow(1024, t2)) / 100) +
          units.charAt(t2).replace(' ', '') + 'B';
}

// print progress bar and some video info if not streaming to stdout
if (output) {
  readStream.on('info', function(info, format) {

    console.log();
    console.log('title: '.bold + info.title);
    console.log('author: '.bold + info.author);
    console.log('container: '.bold + format.container);
    console.log('resolution: '.bold + format.resolution);
    console.log('encoding: '.bold + format.encoding);
    console.log('size: '.bold + toHumanSize(format.size));
    console.log('output: '.bold + output);
    console.log();

    // create progress bar
    var bar = require('progress-bar').create(process.stdout, 50);
    bar.format = '$bar; $percentage;%';

    // keep track of progress
    var dataRead = 0;
    readStream.on('data', function(data) {
      dataRead += data.length;
      var percent = dataRead / format.size;
      bar.update(percent);
    });

  });
}

readStream.on('end', function() {
  console.log();
  process.exit();
});

process.on('SIGINT', function() {
  console.log();
  process.exit();
});
