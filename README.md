# node-ytdl-core

![Depfu](https://img.shields.io/depfu/fent/node-ytdl-core)
[![codecov](https://codecov.io/gh/fent/node-ytdl-core/branch/master/graph/badge.svg)](https://codecov.io/gh/fent/node-ytdl-core)
[![Discord](https://img.shields.io/discord/484464227067887645.svg)](https://discord.gg/V3vSCs7)

Yet another youtube downloading module. Written with only Javascript and a node-friendly streaming interface.

# Support
You can contact us for support on our [chat server](https://discord.gg/V3vSCs7)

# Usage

```js
const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
  .pipe(fs.createWriteStream('video.mp4'));
```


# API
### ytdl(url, [options])

Attempts to download a video from the given url. Returns a [readable stream](https://nodejs.org/api/stream.html#stream_class_stream_readable). `options` can have the following, in addition to any [`getInfo()` option](#async-ytdl.getinfo(url%2C-%5Boptions%5D)) and [`chooseFormat()` option](#ytdl.downloadfrominfo(info%2C-options)).

* `range` - A byte range in the form `{start: INT, end: INT}` that specifies part of the file to download, ie {start: 10355705, end: 12452856}. Not supported on segmented (DASH MPD, m3u8) formats.
  * This downloads a portion of the file, and not a separately spliced video.
* `begin` - What time in the video to begin. Supports formats `00:00:00.000`, `0ms, 0s, 0m, 0h`, or number of milliseconds. Example: `1:30`, `05:10.123`, `10m30s`.
  * For live videos, this also accepts a unix timestamp or Date object, and defaults to `Date.now()`.
  * This option is not very reliable for non-live videos, see [#129](https://github.com/fent/node-ytdl-core/issues/129), [#219](https://github.com/fent/node-ytdl-core/issues/219).
* `liveBuffer` - How much time buffer to use for live videos in milliseconds. Default is `20000`.
* `highWaterMark` - How much of the video download to buffer into memory. See [node's docs](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) for more. Defaults to 512KB.
* `dlChunkSize` - When the chosen format is video only or audio only, the download is separated into multiple chunks to avoid throttling. This option specifies the size of each chunk in bytes. Setting it to 0 disables chunking. Defaults to 10MB.

#### Event: info
* [`ytdl.videoInfo`](typings/index.d.ts#L194) - Info.
* [`ytdl.videoFormat`](typings/index.d.ts#L22) - Video Format.

Emitted when the video's `info` is fetched, along with the chosen format to download.

#### Event: progress
* `number` - Chunk length in bytes or segment number.
* `number` - Total bytes or segments downloaded.
* `number` - Total bytes or segments.

Emitted whenever a new chunk is received. Passes values describing the download progress.

#### miniget events

All [miniget events](https://github.com/fent/node-miniget#event-redirect) are forwarded and can be listened to from the returned stream.

### Stream#destroy()

Call to abort and stop downloading a video.

### async ytdl.getBasicInfo(url, [options])

Use this if you only want to get metainfo from a video.

### async ytdl.getInfo(url, [options])

Gets metainfo from a video. Includes additional formats, and ready to download deciphered URL. This is what the `ytdl()` function uses internally.

`options` can have the following

* `requestOptions` - Anything to merge into the request options which [miniget](https://github.com/fent/node-miniget) is called with, such as `headers`.
* `lang` - The 2 character symbol of a language. Default is `en`.

### ytdl.downloadFromInfo(info, options)

Once you have received metadata from a video with the `ytdl.getInfo` function, you may pass that information along with other options to this function.

### ytdl.chooseFormat(formats, options)

Can be used if you'd like to choose a format yourself. Throws an Error if it fails to find any matching format.

`options` can have the following

* `quality` - Video quality to download. Can be an [itag value](http://en.wikipedia.org/wiki/YouTube#Quality_and_formats), a list of itag values, or `highest`/`lowest`/`highestaudio`/`lowestaudio`/`highestvideo`/`lowestvideo`. `highestaudio`/`lowestaudio`/`highestvideo`/`lowestvideo` all prefer audio/video only respectively. Defaults to `highest`, which prefers formats with both video and audio.

  A typical video's formats will be sorted in the following way using `quality: 'highest'`
  ```
  itag container quality codecs                 bitrate  audio bitrate
  18   mp4       360p    avc1.42001E, mp4a.40.2 696.66KB 96KB
  137  mp4       1080p   avc1.640028            4.53MB
  248  webm      1080p   vp9                    2.52MB
  136  mp4       720p    avc1.4d4016            2.2MB
  247  webm      720p    vp9                    1.44MB
  135  mp4       480p    avc1.4d4014            1.1MB
  134  mp4       360p    avc1.4d401e            593.26KB
  140  mp4               mp4a.40.2                       128KB
  ```
  format 18 at 360p will be chosen first since it's the highest quality format with both video and audio. If you'd like a higher quality format with both video and audio, see the section on [handling separate streams](#handling-separate-streams).
* `filter` - Used to filter the list of formats to choose from. Can be `audioandvideo` or `videoandaudio` to filter formats that contain both video and audio, `video` to filter for formats that contain video, or `videoonly` for formats that contain video and no additional audio track. Can also be `audio` or `audioonly`. You can give a filtering function that gets called with each format available. This function is given the `format` object as its first argument, and should return true if the format is preferable.
  ```js
  // Example with custom function.
  ytdl(url, { filter: format => format.container === 'mp4' })
  ```
* `format` - Primarily used to download specific video or audio streams. This can be a specific `format` object returned from `getInfo`.
  * Supplying this option will ignore the `filter` and `quality` options since the format is explicitly provided.

```js
// Example of choosing a video format.
let info = await ytdl.getInfo(videoID);
let format = ytdl.chooseFormat(info.formats, { quality: '134' });
console.log('Format found!', format);
```

### ytdl.filterFormats(formats, filter)

If you'd like to work with only some formats, you can use the [`filter` option above](#ytdlurl-options).

```js
// Example of filtering the formats to audio only.
let info = await ytdl.getInfo(videoID);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
console.log('Formats with only audio: ' + audioFormats.length);
```

### ytdl.validateID(id)

Returns true if the given string satisfies YouTube's ID format.

### ytdl.validateURL(url)

Returns true if able to parse out a valid video ID.

### ytdl.getURLVideoID(url)

Returns a video ID from a YouTube URL.
Throws an Error if it fails to parse an ID.

### ytdl.getVideoID(str)

Same as the above `ytdl.getURLVideoID()`, but can be called with the video ID directly, in which case it returns it. This is what ytdl uses internally.
Throws an Error if it fails to parse an ID.

## Limitations

ytdl cannot download videos that fall into the following
* Regionally restricted (requires a [proxy](example/proxy.js))
* Private (if you have access, requires [cookies](example/cookies.js))
* Rentals (if you have access, requires [cookies](example/cookies.js))

Generated download links are valid for 6 hours, and may only be downloadable from the same IP address.

## Handling Separate Streams

Typically 1080p or better videos do not have audio encoded with it. The audio must be downloaded separately and merged via an encoding library. `ffmpeg` is the most widely used tool, with many [Node.js modules available](https://www.npmjs.com/search?q=ffmpeg). Use the `format` objects returned from `ytdl.getInfo` to download specific streams to combine to fit your needs. Look at [example/ffmpeg.js](example/ffmpeg.js) for an example on doing this.

## What if it stops working?

YouTube updates their website all the time, it's not that rare for this to stop working. If it doesn't work for you and you're using the latest version, feel free to open up an issue. Make sure to check if there isn't one already with the same error.

Run the tests at `test/irl-test.js` to make sure this is really an issue with ytdl-core.

    npm run test:irl

These tests are not mocked, they try to start downloading a few videos. If these fail, then it's time to debug. If the error you're getting is signature deciphering, check `lib/sig.js`. Otherwise, the error is likely within `lib/info.js`.

# Install

```bash
npm install ytdl-core@latest
```

Or for Yarn users:
```bash
yarn add ytdl-core@latest
```

Make sure you're installing the latest version of ytdl-core to keep up with the latest fixes.

If you're using a bot or app that uses ytdl-core such as [ytdl-core-discord](https://github.com/amishshah/ytdl-core-discord) or [discord-player](https://github.com/Androz2091/discord-player), it may be dependent on an older version. To update its ytdl-core version, that library has to update its `package.json` file, you can't simply change the version on your project's `package.json`, the app will still use its own older version of ytdl-core.

Look in their repo to see if they already have an active pull request that updates ytdl-core. If they don't, open an issue asking them to update ytdl-core, or better yet, fork the project and submit a pull request with the updated version.

While you wait for the pull reques to merge, you can point to its branch in your `package.json`

```json
  "ytdl-core-discord": "amishshah/ytdl-core-discord#dependabot/npm_and_yarn/ytdl-core-2.0.1"
```

# Related Projects

- [ytdl](https://github.com/fent/node-ytdl) - A cli wrapper of this.
- [pully](https://github.com/JimmyBoh/pully) - Another cli wrapper of this aimed at high quality formats.
- [ytsr](https://github.com/TimeForANinja/node-ytsr) - YouTube video search results.
- [ytpl](https://github.com/TimeForANinja/node-ytpl) - YouTube playlist and channel resolver.


# Tests
Tests are written with [mocha](https://mochajs.org)

```bash
npm test
```
