const qs          = require('querystring');
const urllib      = require('url');
const parseTime   = require('m3u8stream/dist/parse-time');



const VIDEO_URL = 'https://www.youtube.com/watch?v=';


/**
 * Get video media (extra information) from html
 *
 * @param {Object} info
 * @return {Object}
 */
exports.getMedia = (info) => {
  let media = {};
  let results = [];
  try {
    results = info.response.contents.twoColumnWatchNextResults.results.results.contents;
  } catch (err) {
    // do nothing
  }

  let result = results.find(v => v.videoSecondaryInfoRenderer);
  if (!result) { return {}; }

  for (let prow of result.videoSecondaryInfoRenderer.owner) {
    let row = prow.metadataRowRenderer;
    if (row) {
      media[row.title.simpleText] = row.contents[0].simpleText;
    }
  }

  try {
    let metadataRows = result.metadataRowContainer
      .metadataRowContainerRenderer.rows;
    for (let row of metadataRows) {
      if (row.metadataRowRenderer) {
        let title = row.metadataRowRenderer.title.simpleText.toLowerCase();
        let run = row.metadataRowRenderer.contents[0].runs[0];
        media[title] = run.text;
        media[title + '_url'] = urllib.resolve(VIDEO_URL,
          run.navigationEndpoint.commandMetadata.webCommonMetadata.url);
      } else if (row.richMetadataRowRenderer) {
        let contents = row.richMetadataRowRenderer.contents;
        for (let content of contents) {
          let meta = content.richMetadataRenderer;
          media.thumbnails = meta.thumbnail.thumbnails;
          // TODO: Added for backwards compatibility. Remove later.
          media.image = urllib.resolve(VIDEO_URL, media.thumbnails[0].url);
          switch (meta.style) {
            case 'RICH_METADATA_RENDERER_STYLE_BOX_ART': {
              media.year = meta.subtitle.simpleText;
              let type = meta.callToAction.simpleText.split(' ')[1];
              media[type] = meta.title.simpleText;
              media[type + '_url'] = urllib.resolve(VIDEO_URL,
                meta.endpoint.commandMetadata.webCommandMetadata.url);
              break;
            }
          }
        }
      }
    }
  } catch {
    // Do nothing.
  }

  return media;
};

/**
 * Get video Owner from html.
 *
 * @param {string} body
 * @return {Object}
 */
exports.getAuthor = (info) => {
  let results = [], videoDetails = {};
  try {
    results = info.response.contents.twoColumnWatchNextResults.results.results.contents;
  } catch (err) {
    // Do nothing.
  }
  let v = results.find(v =>
    v.videoSecondaryInfoRenderer && v.videoSecondaryInfoRenderer.owner);
  let avatar, verified = false;
  if (v) try {
    avatar = urllib.resolve(VIDEO_URL,
      v.videoSecondaryInfoRenderer.owner.videoOwnerRenderer.thumbnail.thumbnails[0].url);
    verified = !!v.videoSecondaryInfoRenderer.owner.badges.find(b => b.metadataBadgeRenderer.tooltip === 'Verified');
  } catch (err) {
    // Do nothing.
  }
  try {
    videoDetails = info.player_response.microformat.playerMicroformatRenderer;
  } catch (err) {
    // Do nothing.
  }
  return {
    id: videoDetails.channelId,
    name: videoDetails.ownerChannelName,
    avatar: avatar,
    verified: verified,
    user: videoDetails ?
      videoDetails.ownerProfileUrl.split('/').slice(-1)[0] : null,
    channel_url: 'https://www.youtube.com/channel/' + videoDetails.externalChannelId,
    user_url: urllib.resolve(VIDEO_URL, videoDetails.ownerProfileUrl),
  };
};

/**
 * Get video published at from html.
 * Credits to https://github.com/paixaop.
 *
 * @param {Object} info
 * @return {Array.<Object>}
 */
exports.getRelatedVideos = (info) => {
  let rvsParams, secondaryResults;
  try {
    rvsParams = info.response.webWatchNextResponseExtensionData.relatedVideoArgs.split(',').map((e) => qs.parse(e));
    secondaryResults = info.response.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results;
  }
  catch (err) {
    return [];
  }
  let videos = [];
  for (let result of secondaryResults) {
    let details = result.compactVideoRenderer;
    if (details) {
      try {
        let viewCount = details.viewCountText.simpleText;
        let shortViewCount = details.shortViewCountText.simpleText;
        let rvsDetails = rvsParams.find((elem) => elem.id === details.videoId);
        if (!/^\d/.test(shortViewCount)) {
          shortViewCount = rvsDetails && rvsDetails.short_view_count_text || '';
        }
        viewCount = (/^\d/.test(viewCount) ? viewCount : shortViewCount).split(' ')[0];
        videos.push({
          id: details.videoId,
          title: details.title.simpleText,
          author: details.shortBylineText.runs[0].text,
          ucid: details.shortBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId,
          author_thumbnail: details.channelThumbnail.thumbnails[0].url,
          short_view_count_text: shortViewCount.split(' ')[0],
          view_count: viewCount.replace(',', ''),
          length_seconds:  details.lengthText ?
            Math.floor(parseTime.humanStr(details.lengthText.simpleText) / 1000) :
            rvsParams && rvsParams.length_seconds + '',
          video_thumbnail: details.thumbnail.thumbnails[0].url,
        });
      } catch (err) {
        continue;
      }
    }
  }
  return videos;
};

/**
 * Get like count from html.
 *
 * @param {string} body
 * @return {number}
 */
const getLikesRegex = /"label":"([\d,]+?) likes"/;
exports.getLikes = (body) => {
  const likes = body.match(getLikesRegex);
  return likes ? parseInt(likes[1].replace(/,/g, '')) : null;
};

/**
 * Get dislike count from html.
 *
 * @param {string} body
 * @return {number}
 */
const getDislikesRegex = /"label":"([\d,]+?) dislikes"/;
exports.getDislikes = (body) => {
  const dislikes = body.match(getDislikesRegex);
  return dislikes ? parseInt(dislikes[1].replace(/,/g, '')) : null;
};
