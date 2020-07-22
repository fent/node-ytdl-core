const fs = require('fs');
const ytdl = require('../');
const cp = require('child_process');
const { Duplex } = require('stream');
const ffmpeg = require('ffmpeg-static');

const ref = 'https://www.youtube.com/watch?v=aR-KAldshAE';

/* reencode audio & video without creating files first */
const audio = ytdl(ref, { filter: 'audioonly', quality: 'highestaudio' });
const video = ytdl(ref, { filter: 'videoonly', quality: 'highestvideo' });


const out = new Duplex();
const process = cp.spawn(ffmpeg, [
  '-loglevel', '0', '-hide_banner', // remove most logs
  '-itsoffset', '3.0', '-i', 'pipe:3', // 3 second audio offset
  '-i', 'pipe:4',
  '-vf', 'scale=320:240',
  '-c:v', 'libx265', '-x265-params', 'log-level=0',
  '-c:a', 'flac',
  '-f', 'matroska', 'pipe:5',
], {
  windowsHide: true,
  stdio: [
    /* stdin, stdout, stderr */
    'inherit', 'inherit', 'inherit',
    /* custom:3, custom:4, custom:5 */
    'pipe', 'pipe', 'pipe',
  ],
});

// link streams
audio.pipe(process.stdio[3]);
video.pipe(process.stdio[4]);
process.stdio[5].pipe(fs.createWriteStream('./out.mkv'));
