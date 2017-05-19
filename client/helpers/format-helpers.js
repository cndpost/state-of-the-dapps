/**
 * Created by jr on 10/21/16.
 */
const capitalize = (string) => {
  return (string) ? string.charAt(0).toUpperCase() + string.slice(1) : '';
};
const capsAll = (string) => {
  return (string) ? string.toUpperCase() : '';
};

const getCountry = (timezone) => {
  let area = timezone.split('/');
  return area[1];
};
const getTwitterHandle = (twitterLink) => {
  return ((twitterLink) ? twitterLink.replace('https://www.twitter.com/', '@').replace('https://twitter.com/', '@') : '');
};
const getRedditUrl = (redditLink) => {
  return ((redditLink) ? redditLink.replace('https://www.reddit.com', '').replace('https://reddit.com', '') : '');
};

const formatHelper = {
  capitalize,
  capsAll,
  getCountry,
  getTwitterHandle,
  getRedditUrl
};
export {formatHelper};
