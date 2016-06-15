import {ClientRequest} from 'http';
import {Readable} from 'stream';

/**
 * Attempts to download a video from the given url.
 */  
export function ytdl(link: string, options?: DownloadOptions): Readable;
export namespace ytdl
{
  /**
   * Use this if you only want to get metainfo from a video.
   */  
  export function getInfo(url: string, callback: (err: any, info: VideoInfo) => void);

  /**
   * Use this if you only want to get metainfo from a video.
   */
  export function getInfo(url: string, options: DownloadOptions, callback: (err: any, info: VideoInfo) => void);

  /**
   * Once you have received metadata from a video with the `getInfo` function, you may pass that `info`, along with other `options` to `downloadFromInfo`.
   */  
  export function downloadFromInfo(info: VideoInfo, options?: DownloadOptions): Readable;
}

export interface VideoFormat {
  fallback_host: string;
  quality: string;
  type: string;
  url: string;
  itag: string;
  sig: string;
  container: 'flv' | '3gp' | 'mp4' | 'webm' | 'ts' | string;
  resolution: '144p' | '240p' | '270p' | '360p' | '480p' | '720p' | '1080p' | '1440p' | '2160p' | '3072p' | string;
  encoding: 'VP8' | 'vp8' | 'VP9' | 'H.264' | 'MPEG-4 Visual' | 'Sorenson H.283' | 'Sorenson H.263' | string;
  profile: '3d' | 'high' | 'main' | 'simple' | 'baseline' | 'Main@L3.1' | string;
  bitrate: string;
  audioEncoding: 'mp3' | 'aac' | 'opus' | 'vorbis' | string;
  audioBitrate: number;
}

export interface VideoInfo {
  plid: string;
  sendtmp: number;
  title: string;
  status: string;
  muted: number;
  pltype: string;
  thumbnail_url: string;
  has_cc: boolean;
  video_verticals: number[];
  track_embed: number;
  author: string;
  rvs: string;
  ftoken: string;
  allow_embed: number;
  vq: string;
  account_playback_token: string;
  share_icons: string;
  watermark: string[],
  endscreen_module: string;
  token: string;
  view_count: number
  length_seconds: number
  abd: number
  allow_ratings: number;
  keywords: string[];
  iurlmaxres: string;
  fmt_list: string[][];
  iurlsd: string;
  video_id: string;
  ptk: string;
  storyboard_spec: string;
  timestamp: number;
  avg_rating: string;
  fexp: string[];
  formats: VideoFormat[];
}

export interface DownloadOptions {
  /**
   * Video quality to download. Can be an [itag value](http://en.wikipedia.org/wiki/YouTube#Quality_and_formats) value, a list of itag values, or `highest`/`lowest`. Defaults to `highest`.
   */
  quality?: 'lowest' | 'highest' | number | number[] | string | string[] | {};

  /**
   * Can be `video` to filter for formats that contain video, `videoonly` for formats that contain video and no additional audio track. Can also be `audio` or `audioonly`. You can give a filtering function that gets called with each format available. Used to decide what format to download.
   * This function is given the `format` object as its first argument, and should return true if the format is preferable.
   */
  filter?: "video" | "videoonly" | "audio" | "audioonly" | ((format: VideoFormat) => boolean);

  /**
   * This can be a specific `format` object returned from `getInfo`. This is primarily used to download specific video or audio streams. **Note:** Supplying this option will ignore the `filter` and `quality` options since the format is explicitly provided.
   */
  format?: VideoFormat;

  /**
   * A byte range in the form `INT-INT` that specifies a part of the video to download. ie 10355705-12452856.
   */
  range?: string;

  /**
   * Anything to merge into the request options which `http.get()` is called with, such as headers.
   */
  requestOptions?: {};

  /**
   * A function that will be called for each request, instead of ytdl's internal method of making requests. Its signature looks like `Function(url, options, [callback(error, body)]): http.ClientRequest`
   */
  request?: (url: string, options: {}, callback?: (err: {}, body: any) => void) => ClientRequest
}

export default ytdl;