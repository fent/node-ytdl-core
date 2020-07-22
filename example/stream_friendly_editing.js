const fs = require('fs');
const ytdl = require('../');
const cp = require('child_process');
const ffmpeg = require('ffmpeg-static');

const ref = 'https://www.youtube.com/watch?v=aR-KAldshAE';

/* Reencode audio & video without creating files first */
const audio = ytdl(ref, { filter: 'audioonly', quality: 'highestaudio' });
const video = ytdl(ref, { filter: 'videoonly', quality: 'highestvideo' });


const process = cp.spawn(ffmpeg, [
  // Remove most logs
  '-loglevel', '0', '-hide_banner',
  // 3 second audio offset
  '-itsoffset', '3.0', '-i', 'pipe:3', 
  '-i', 'pipe:4',
  '-vf', 'scale=320:240',
  '-c:v', 'libx265', '-x265-params', 'log-level=0',
  '-c:a', 'flac',
  '-f', 'matroska', 'pipe:5',
], {
  windowsHide: true,
  stdio: [
    /* Standard: stdin, stdout, stderr */
    'inherit', 'inherit', 'inherit',
    /* Custom: Stream3, Stream4, Stream5 */
    'pipe', 'pipe', 'pipe',
  ],
});

// link streams
audio.pipe(process.stdio[3]);
video.pipe(process.stdio[4]);
process.stdio[5].pipe(fs.createWriteStream('./out.mkv'));
