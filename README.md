# node-ytdl-core

Yet another youtube downloading module. Written with only Javascript and a node-friendly streaming interface.

[![Build Status](https://secure.travis-ci.org/fent/node-ytdl-core.svg)](http://travis-ci.org/fent/node-ytdl-core)
[![Dependency Status](https://david-dm.org/fent/node-ytdl-core.svg)](https://david-dm.org/fent/node-ytdl-core)
[![codecov](https://codecov.io/gh/fent/node-ytdl-core/branch/master/graph/badge.svg)](https://codecov.io/gh/fent/node-ytdl-core)

For a CLI version of this, check out [ytdl](https://github.com/fent/node-ytdl) and [pully](https://github.com/JimmyBoh/pully).

# Usage

```js
const fs = require('fs');
const ytdl = require('ytdl-core');

ytdl('http://www.youtube.com/watch?v=A02s8omM_hI')
  .pipe(fs.createWriteStream('video.flv'));
```


# API
### ytdl(url, options)

Attempts to download a video from the given url. Returns a readable stream. `options` can have the following keys

* `quality` - Video quality to download. Can be an [itag value](http://en.wikipedia.org/wiki/YouTube#Quality_and_formats) value, a list of itag values, or `highest`/`lowest`. Defaults to `highest`.
* `filter` - Can be `video` to filter for formats that contain video, `videoonly` for formats that contain video and no additional audio track. Can also be `audio` or `audioonly`. You can give a filtering function that gets called with each format available. Used to decide what format to download. This function is given the `format` object as its first argument, and should return true if the format is preferable.
* `format` - This can be a specific `format` object returned from `getInfo`. This is primarily used to download specific video or audio streams. Note: Supplying this option will ignore the `filter` and `quality` options since the format is explicitly provided.
* `range` - A byte range in the form `{start: INT, end: INT}` that specifies part of the file to download. ie {start: 10355705, end: 12452856}. Note: this downloads a portion of the file, and not a separately spliced video.
* `begin` - What time to begin downloading the video, supports formats 00:00:00.000, or 0ms, 0s, 0m, 0h, or number of milliseconds. Example: 1:30, 05:10.123, 10m30s. This option may not work on super short (less than 30s) videos, and has to be at ar above 6s. See [#129](https://github.com/fent/node-ytdl-core/issues/129)
* `requestOptions` - Anything to merge into the request options which [miniget](https://github.com/fent/node-miniget) is called with, such as headers.
* `highWaterMark` - How much of the video download to buffer into memory. See [node's docs](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) for more.
* `retries` - The number of retries ytdl is allowed to do before terminating the stream with an error. The default is set to 5.
* `lang` - The 2 character symbol of a language. Is by default set to "en".

```js
// Example with `filter` option.
ytdl(url, { filter: function(format) { return format.container === 'mp4'; } })
  .pipe(fs.createWriteStream('video.mp4'));
```

#### Event: 'info'
* `Object` - Info.
* `Object` - Format.

Emitted when the a video's `info` hash is fetched. Along with the chosen format metadata to download. `format.url` might be different if `start` was given.

An example of what Info and format may look like is in the [example folder](example/info.json).

#### Event: 'response'
* `http.ServerResponse` - Response.

Emitted when the video response has been found, and has started downloading. Can be used to get the size of download. This is also emitted if there is an error with the download or it needs to reconnect to YouTube.

#### Event: 'progress'
* `Number` - Chunk length.
* `Number` - Total downloaded.
* `Number` - Total download length.

Emitted whenever a new chunk is received. Passes values descriping the download progress and the parsed percentage.

### Stream#destroy()

Destroys the underlying connection.

### ytdl.getInfo(url, [options], [callback(err, info)])

Use this if you only want to get metainfo from a video. If `callback` isn't given, returns a promise.

### ytdl.downloadFromInfo(info, options)

Once you have received metadata from a video with the `getInfo` function,
you may pass that `info`, along with other `options` to `downloadFromInfo`.

### ytdl.chooseFormat(formats, options)

Can be used if you'd like to choose a format yourself with the [options above](#ytdlurl-options).

### ytdl.filterFormats(formats, filter)

If you'd like to work with only some formats, you can use the [`filter` option above](#ytdlurl-options).

## Limitations

ytdl cannot download videos that fall into the following
* Regionally restricted (requires a [proxy](example/proxy.js))
* Private
* Rentals

## Handling Separate Streams

Typically 1080p or better video does not have audio encoded with it. The audio must be downloaded separately and merged via an appropriate encoding library. `ffmpeg` is the most widely used tool, with many [Node.js modules available](https://www.npmjs.com/search?q=ffmpeg). Use the `format` objects returned from `ytdl.getInfo` to download specific streams to combine to fit your needs. Look at [example/ffmpeg.js](example/ffmpeg.js) for an example on doing this.

## What if it stops working?

Youtube updates their website all the time, it's not that rare for this to stop working. If it doesn't work for you and you're using the latest version, feel free to open up an issue. Make sure to check if there isn't one already with the same error.

If you'd like to help fix the issue, look at the type of error first. The most common one is

    Could not extract signature deciphering actions

Run the tests at `test/irl-test.js` just to make sure that this is actually an issue with ytdl-core.

    mocha test/irl-test.js

These tests are not mocked, and actually try to start downloading a few videos. If these fail, then it's time to debug.

Set `debug: true` in the tests. Debug will write the html5player file to `test/files/html5player` and will add an entry for its name in `test/html5player.json`. With the html5player downloaded, you can open it and figure how it's failing to extract the signature deciphering function.

For the specifics on that, you can look at the `extractActions()` function in [`/lib/sig.js`](https://github.com/fent/node-ytdl-core/blob/master/lib/sig.js).


# Install

    npm install ytdl-core


# Tests
Tests are written with [mocha](https://mochajs.org)

```bash
npm test
```

# License
MIT
