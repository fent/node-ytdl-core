const qs       = require('querystring');
const url      = require('url');
const Entities = require('html-entities').AllHtmlEntities;
const util     = require('./util');


const getMetaItem = (body, name) => {
  return util.between(body, `<meta itemprop="${name}" content="`, '">');
};


/**
 * Get video description from html
 *
 * @param {String} html
 * @return {String}
 */
exports.getVideoDescription = (html) => {
  const regex = /<p.*?id="eow-description".*?>(.+?)<\/p>[\n\r\s]*?<\/div>/im;
  const description = html.match(regex);
  return description ?
    Entities.decode(util.stripHTML(description[1])) : '';
};

/**
 * Get video media (extra information) from html
 *
 * @param {String} body
 * @return {Object}
 */
exports.getVideoMedia = (body) => {
  let mediainfo = util.between(body,
    '<div id="watch-description-extras">',
    '<div id="watch-discussion" class="branded-page-box yt-card">');
  if (mediainfo === '') {
    return {};
  }

  const regexp = /<h4 class="title">([\s\S]*?)<\/h4>[\s\S]*?<ul.*?class=".*?watch-info-tag-list">[\s\S]*?<li>([\s\S]*?)<\/li>/g;
  const contentRegexp = /<a.*?>(.*?)<\/a>/;
  const media = {};
  let match;
  while ((match = regexp.exec(mediainfo)) != null) {
    const content = contentRegexp.exec(match[2]);
    if (content && content[1]) match[2] = content[1];
    media[Entities.decode(match[1]).trim().replace(/\s/g, '_').toLowerCase()] = Entities.decode(match[2]);
  }
  return media;
};

/**
 * Get video Owner from html.
 *
 * @param {String} body
 * @return {Object}
 */
const userRegexp = /<a href="\/user\/([^"]+)/;
const verifiedRegexp = /<span .*?(aria-label="Verified")(.*?(?=<\/span>))/;
const VIDEO_URL = 'https://www.youtube.com/watch?v=';
exports.getAuthor = (body) => {
  let ownerinfo = util.between(body,
    '<div id="watch7-user-header" class=" spf-link ">',
    '<div id="watch8-action-buttons" class="watch-action-buttons clearfix">');
  if (ownerinfo === '') {
    return {};
  }
  const channelName = Entities.decode(util.between(util.between(
    ownerinfo, '<div class="yt-user-info">', '</div>'), '>', '</a>'));
  const userMatch = ownerinfo.match(userRegexp);
  const verifiedMatch = ownerinfo.match(verifiedRegexp);
  const channelID = getMetaItem(body, 'channelId');
  const username = userMatch ? userMatch[1] : util.between(
    util.between(body, '<span itemprop="author"', '</span>'), '/user/', '">');
  return {
    id: channelID,
    name: channelName,
    avatar: url.resolve(VIDEO_URL, util.between(ownerinfo,
      'data-thumb="', '"')),
    verified: !!verifiedMatch,
    user: username,
    channel_url: 'https://www.youtube.com/channel/' + channelID,
    user_url: 'https://www.youtube.com/user/' + username,
  };
};


/**
 * Get video published at from html.
 *
 * @param {String} body
 * @return {String}
 */
exports.getPublished = (body) => {
  return Date.parse(getMetaItem(body, 'datePublished'));
};


/**
 * Get video published at from html.
 * Credits to https://github.com/paixaop.
 *
 * @param {String} body
 * @return {Array.<Object>}
 */
exports.getRelatedVideos = (body) => {
  let jsonStr = util.between(body, '\'RELATED_PLAYER_ARGS\': {"rvs":', '},');
  try {
    jsonStr = JSON.parse(jsonStr);
  } catch (err) {
    return [];
  }
  return jsonStr.split(',').map((link) => qs.parse(link));
};
