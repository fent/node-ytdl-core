# node-ytdl-core

Yet another youtube downloading module. This time written with only Javascript and a more node-friendly streaming interface.

[![Build Status](https://secure.travis-ci.org/fent/node-ytdl-core.svg)](http://travis-ci.org/fent/node-ytdl-core)
[![Dependency Status](https://gemnasium.com/fent/node-ytdl-core.svg)](https://gemnasium.com/fent/node-ytdl-core)
[![codecov](https://codecov.io/gh/fent/node-ytdl-core/branch/master/graph/badge.svg)](https://codecov.io/gh/fent/node-ytdl-core)

For a CLI version of this, check out [ytdl](https://github.com/fent/node-ytdl) and [pully](https://github.com/JimmyBoh/pully).

# Usage

```js
var fs = require('fs');
var ytdl = require('ytdl-core');

ytdl('http://www.youtube.com/watch?v=A02s8omM_hI')
  .pipe(fs.createWriteStream('video.flv'));
```


# API
### ytdl(url, options)

Attempts to download a video from the given url. Returns a readable stream. `options` can have the following keys

* `quality` - Video quality to download. Can be an [itag value](http://en.wikipedia.org/wiki/YouTube#Quality_and_formats) value, a list of itag values, or `highest`/`lowest`. Defaults to `highest`.
* `filter` - Can be `video` to filter for formats that contain video, `videoonly` for formats that contain video and no additional audio track. Can also be `audio` or `audioonly`. You can give a filtering function that gets called with each format available. Used to decide what format to download. This function is given the `format` object as its first argument, and should return true if the format is preferable.
* `format` - This can be a specific `format` object returned from `getInfo`. This is primarily used to download specific video or audio streams. **Note:** Supplying this option will ignore the `filter` and `quality` options since the format is explicitly provided.
* `range` - A byte range in the form `INT-INT` that specifies a part of the video to download. ie 10355705-12452856.
* `requestOptions` - Anything to merge into the request options which `http.get()` is called with, such as headers.
* `request` - A function that will be called for each request, instead of ytdl's internal method of making requests. Its signature looks like `Function(url, options, [callback(error, body)]): http.ClientRequest`

```js
// Example with `filter` option.
ytdl(url, { filter: function(format) { return format.container === 'mp4'; } })
  .pipe(fs.createWriteStream('vide.mp4'));
```

#### Event: 'info'
* `Object` - Info.
* `Object` - Format.

Emitted when the a video's `info` hash is fetched. Along with the chosen format metadata to download. `format.url` might be different if `start` was given.

Info and format may look like [this](https://gist.github.com/fent/6c8251132e1addb5121e).

#### Event: 'response'
* `http.ServerResponse` - Response.

Emitted when the video response has been found, and has started downloading. Can be used to get the size of download. This is also emitted if there is an error with the download.

### Stream#destroy()

Destroys the underlying connection.

### ytdl.getInfo(url, [options], callback(err, info))

Use this if you only want to get metainfo from a video.

### ytdl.downloadFromInfo(info, options)

Once you have received metadata from a video with the `getInfo` function,
you may pass that `info`, along with other `options` to `downloadFromInfo`.

The returned readable stream emits these additional events:

# Tips
### Handling Separate Streams

Typically 1080p or better video does not have audio encoded with it. The audio must be downloaded separately and merged via an appropriate encoding library. `ffmpeg` is the most widely used tool, with many [Node.js modules available](https://www.npmjs.com/search?q=ffmpeg). Use the `format` objects returned from `ytdl.getInfo` to download specific streams to combine to fit your needs.

### What if it stops working?

Youtube updates their website all the time, it's not that rare for this to stop working. If it doesn't work for you and you're using the latest version, feel free to open up an issue. Make sure to check if there isn't one already with the same error.

If you'd like to help fix the issue, look at the type of error first. The most common one is

    Could not extract signature deciphering actions

Run the tests at `test/irl-test.js` just to make sure that this is actually an issue with ytdl-core.

    mocha test/irl-test.js

These tests are not mocked, and actually try to start downloading a few videos. If these fail, then it's time to debug.

Set `debug: true` in the tests. Debug will write the html5player file to `test/files/html5player` and will add an entry for its name in `test/html5player.json`. With the html5player downloaded, you can open it and figure how it's failing to extract the signature deciphering function.

And for the specifics on that, you can look at the `extractActions()` function in [`/lib/sig.js`](https://github.com/fent/node-ytdl-core/blob/master/lib/sig.js).


# Install

    npm install ytdl-core


# Tests
Tests are written with [mocha](http://visionmedia.github.com/mocha/)

```bash
npm test
```

# License
MIT
