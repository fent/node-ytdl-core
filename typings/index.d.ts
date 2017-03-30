declare module 'ytdl-core' {
  import { ClientRequest } from 'http';
  import { Readable } from 'stream';

  export function ytdl(link: string, options?: DownloadOptions): Readable;
  export namespace ytdl {
    export function getInfo(url: string, callback?: (err: Error, info: VideoInfo) => void): Promise<VideoInfo>;
    export function getInfo(url: string, options?: DownloadOptions, callback?: (err: Error, info: VideoInfo) => void): Promise<VideoInfo>;
    export function downloadFromInfo(info: VideoInfo, options?: DownloadOptions): Readable;
    export function chooseFormat(format: object[], options?: DownloadOptions): object | Error;
    export function filterFormats(formats: object[], filter?: 'video' | 'videoonly' | 'audio' | 'audioonly' | ((format: VideoFormat) => boolean)): object[];
  }

  export type VideoFormat = {
    fallback_host: string;
    quality: string;
    type: string;
    url: string;
    itag: string;
    sig: string;
    container: 'flv' | '3gp' | 'mp4' | 'webm' | 'ts';
    resolution: '144p' | '240p' | '270p' | '360p' | '480p' | '720p' | '1080p' | '1440p' | '2160p' | '3072p';
    encoding: 'Sorenson H.283' | 'MPEG-4 Visual' | 'VP8' | 'VP9' | 'H.264';
    profile: '3d' | 'high' | 'main' | 'simple' | 'baseline' | 'Main@L3.1';
    bitrate: string;
    audioEncoding: 'mp3' | 'vorbis' | 'aac' | 'opus' | 'flac';
    audioBitrate: number;
  }

  export type VideoInfo = {
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

  export type DownloadOptions = {
    quality?: 'lowest' | 'highest';
    filter?: 'video' | 'videoonly' | 'audio' | 'audioonly' | ((format: VideoFormat) => boolean);
    format?: VideoFormat;
    range?: string;
    requestOptions?: {};
    request?: (url: string, options: {}, callback?: (err: Error, body: any) => void) => ClientRequest;
  }
}