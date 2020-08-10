const util = require('./util');
const qs = require('querystring');
const urllib = require('url');
const parseTime = require('m3u8stream/dist/parse-time');


const VIDEO_URL = 'https://www.youtube.com/watch?v=';
const TITLE_TO_CATEGORY = {
  song: { name: 'Music', url: 'https://music.youtube.com/' },
};


/**
 * Get video media.
 *
 * @param {Object} info
 * @returns {Object}
 */
exports.getMedia = info => {
  let media = {};
  let results = [];
  try {
    results = info.response.contents.twoColumnWatchNextResults.results.results.contents;
  } catch (err) {
    // Do nothing
  }

  let result = results.find(v => v.videoSecondaryInfoRenderer);
  if (!result) { return {}; }

  try {
    let metadataRows =
      (result.metadataRowContainer || result.videoSecondaryInfoRenderer.metadataRowContainer)
        .metadataRowContainerRenderer.rows;
    for (let row of metadataRows) {
      if (row.metadataRowRenderer) {
        let title = row.metadataRowRenderer.title.simpleText.toLowerCase();
        let contents = row.metadataRowRenderer.contents[0];
        let runs = contents.runs;
        media[title] = runs ? runs[0].text : contents.simpleText;
        if (runs && runs[0].navigationEndpoint) {
          media[`${title}_url`] = urllib.resolve(VIDEO_URL,
            runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url);
        }
        if (title in TITLE_TO_CATEGORY) {
          media.category = TITLE_TO_CATEGORY[title].name;
          media.category_url = TITLE_TO_CATEGORY[title].url;
        }
      } else if (row.richMetadataRowRenderer) {
        let contents = row.richMetadataRowRenderer.contents;
        let boxArt = contents
          .filter(meta => meta.richMetadataRenderer.style === 'RICH_METADATA_RENDERER_STYLE_BOX_ART');
        for (let { richMetadataRenderer } of boxArt) {
          let meta = richMetadataRenderer;
          media.year = meta.subtitle.simpleText;
          let type = meta.callToAction.simpleText.split(' ')[1];
          media[type] = meta.title.simpleText;
          media[`${type}_url`] = urllib.resolve(VIDEO_URL,
            meta.endpoint.commandMetadata.webCommandMetadata.url);
          media.thumbnails = meta.thumbnail.thumbnails;
          // TODO: Added for backwards compatibility. Remove later.
          util.deprecate(media, 'image', urllib.resolve(VIDEO_URL, media.thumbnails[0].url),
            'info.videoDetails.media.image', 'info.videoDetails.media.thumbnails');
        }
        let topic = contents
          .filter(meta => meta.richMetadataRenderer.style === 'RICH_METADATA_RENDERER_STYLE_TOPIC');
        for (let { richMetadataRenderer } of topic) {
          let meta = richMetadataRenderer;
          media.category = meta.title.simpleText;
          media.category_url = urllib.resolve(VIDEO_URL,
            meta.endpoint.commandMetadata.webCommandMetadata.url);
        }
      }
    }
  } catch (err) {
    // Do nothing.
  }

  return media;
};

/**
 * Get video author.
 *
 * @param {Object} info
 * @returns {Object}
 */
exports.getAuthor = info => {
  let channelId, avatar, subscriberCount, verified = false;
  try {
    let results = info.response.contents.twoColumnWatchNextResults.results.results.contents;
    let v = results.find(v2 =>
      v2.videoSecondaryInfoRenderer &&
      v2.videoSecondaryInfoRenderer.owner &&
      v2.videoSecondaryInfoRenderer.owner.videoOwnerRenderer);
    let videoOwnerRenderer = v.videoSecondaryInfoRenderer.owner.videoOwnerRenderer;
    channelId = videoOwnerRenderer.navigationEndpoint.browseEndpoint.browseId;
    avatar = urllib.resolve(VIDEO_URL, videoOwnerRenderer.thumbnail.thumbnails[0].url);
    subscriberCount = util.parseAbbreviatedNumber(
      videoOwnerRenderer.subscriberCountText.runs[0].text);
    verified = !!videoOwnerRenderer.badges.find(b => b.metadataBadgeRenderer.tooltip === 'Verified');
  } catch (err) {
    // Do nothing.
  }
  try {
    let videoDetails = info.player_response.microformat.playerMicroformatRenderer;
    let id = videoDetails.channelId || channelId;
    return {
      id: id,
      name: videoDetails.ownerChannelName,
      user: videoDetails.ownerProfileUrl.split('/').slice(-1)[0],
      channel_url: `https://www.youtube.com/channel/${id}`,
      external_channel_url: `https://www.youtube.com/channel/${videoDetails.externalChannelId}`,
      user_url: urllib.resolve(VIDEO_URL, videoDetails.ownerProfileUrl),
      avatar: avatar,
      verified: verified,
      subscriber_count: subscriberCount,
    };
  } catch (err) {
    return {};
  }
};

/**
 * Get related videos.
 *
 * @param {Object} info
 * @returns {Array.<Object>}
 */
exports.getRelatedVideos = info => {
  let rvsParams = [], secondaryResults = [];
  try {
    rvsParams = info.response.webWatchNextResponseExtensionData.relatedVideoArgs.split(',').map(e => qs.parse(e));
  } catch (err) {
    // Do nothing.
  }
  try {
    secondaryResults = info.response.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results;
  } catch (err) {
    return [];
  }
  let videos = [];
  for (let result of secondaryResults || []) {
    let details = result.compactVideoRenderer;
    if (details) {
      try {
        let viewCount = details.viewCountText.simpleText;
        let shortViewCount = details.shortViewCountText.simpleText;
        let rvsDetails = rvsParams.find(elem => elem.id === details.videoId);
        if (!/^\d/.test(shortViewCount)) {
          shortViewCount = (rvsDetails && rvsDetails.short_view_count_text) || '';
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
          length_seconds: details.lengthText ?
            Math.floor(parseTime.humanStr(details.lengthText.simpleText) / 1000) :
            rvsParams && `${rvsParams.length_seconds}`,
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
 * Get like count.
 *
 * @param {string} body
 * @return {number}
 */
const getLikesRegex = /"label":"([\d,]+?) likes"/;
exports.getLikes = body => {
  const likes = body.match(getLikesRegex);
  return likes ? parseInt(likes[1].replace(/,/g, '')) : null;
};

/**
 * Get dislike count.
 *
 * @param {string} body
 * @return {number}
 */
const getDislikesRegex = /"label":"([\d,]+?) dislikes"/;
exports.getDislikes = body => {
  const dislikes = body.match(getDislikesRegex);
  return dislikes ? parseInt(dislikes[1].replace(/,/g, '')) : null;
};
