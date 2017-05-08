/**
 * Created by jr on 10/21/16.
 */
const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const capsAll = (string) => {
  return string.toUpperCase();
};

const getCountry = (timezone) => {
  let area = timezone.split('/');
  return area[1];
};
const getTwitterHandle = (twitterLink) => {
  return (twitterLink.replace('https://www.twitter.com/', '@'));
};
const getRedditUrl = (redditLink) => {
  return (redditLink.replace('http://reddit.com', ''));

};

const formatHelper = {
  capitalize,
  capsAll,
  getCountry,
  getTwitterHandle,
  getRedditUrl
};
export {formatHelper};
