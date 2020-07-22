/**
 * Reencode audio & video without creating files first
 *
 * Requirements: ffmpeg, ether via a manual installation or via ffmpeg-static
 */

// Buildin with nodejs
const fs = require('fs');
const cp = require('child_process');
const readline = require('readline');
// External modules
const ytdl = require('../');
const ffmpeg = require('ffmpeg-static');
// Global constants
const ref = 'https://www.youtube.com/watch?v=aR-KAldshAE';
const tracker = {
  start: Date.now(),
  audio: { downloaded: 0, total: Infinity },
  video: { downloaded: 0, total: Infinity },
};

// Get audio and video stream going
const audio = ytdl(ref, { filter: 'audioonly', quality: 'highestaudio' })
  .on('progress', (_, downloaded, total) => {
    tracker.audio = { downloaded, total };
  });
const video = ytdl(ref, { filter: 'videoonly', quality: 'highestvideo' })
  .on('progress', (_, downloaded, total) => {
    tracker.video = { downloaded, total };
  });

// Get the progress bar going
const progressbar = setInterval(() => {
  readline.cursorTo(process.stdout, 0);
  const toMB = i => (i / 1024 / 1024).toFixed(2);

  process.stdout.write(`Audio | ${(tracker.audio.downloaded / tracker.audio.total * 100).toFixed(2)}% processed`);
  process.stdout.write(`(${toMB(tracker.audio.downloaded)}MB of ${toMB(tracker.audio.total)}MB).${' '.repeat(10)}\n`);

  process.stdout.write(`Video | ${(tracker.video.downloaded / tracker.video.total * 100).toFixed(2)}% processed `);
  process.stdout.write(`(${toMB(tracker.video.downloaded)}MB of ${toMB(tracker.video.total)}MB).${' '.repeat(10)}\n`);

  process.stdout.write(`running for: ${((Date.now() - tracker.start) / 1000 / 60).toFixed(2)} Minutes.`);
  readline.moveCursor(process.stdout, 0, -2);
}, 1000);

// Start the ffmpeg child process
const ffmpegProcess = cp.spawn(ffmpeg, [
  // Remove ffmpeg's console spamming
  '-loglevel', '0', '-hide_banner',
  // 3 second audio offset
  '-itsoffset', '3.0', '-i', 'pipe:3',
  '-i', 'pipe:4',
  // Rescale the video
  '-vf', 'scale=320:240',
  // Choose some fancy codes
  '-c:v', 'libx265', '-x265-params', 'log-level=0',
  '-c:a', 'flac',
  // Define output container
  '-f', 'matroska', 'pipe:5',
], {
  windowsHide: true,
  stdio: [
    /* Standard: stdin, stdout, stderr */
    'inherit', 'inherit', 'inherit',
    /* Custom: pipe:3, pipe:4, pipe:5 */
    'pipe', 'pipe', 'pipe',
  ],
});
ffmpegProcess.on('close', () => {
  process.stdout.write('\n\n\n');
  clearInterval(progressbar);
  console.log('done');
});

// Link streams
// FFmpeg creates the transformer streams and we just have to insert / read data
audio.pipe(ffmpegProcess.stdio[3]);
video.pipe(ffmpegProcess.stdio[4]);
ffmpegProcess.stdio[5].pipe(fs.createWriteStream('./out.mkv'));
