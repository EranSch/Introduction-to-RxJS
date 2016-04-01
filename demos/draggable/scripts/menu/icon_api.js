const Rx = require('rx-dom');

const API_BASE = 'http://localhost:9999/v2/';
const IMG_SEARCH = 'icons/search';
const DEFAULT_PARAMS = [
  ['premium', 'false'],
  ['license', 'commercial-nonattribution'],
  ['minimum_size', '64']
];

function paramBuilder(params) {
  return DEFAULT_PARAMS
    .concat([params])
    .map(set => set[0] + '=' + set[1])
    .join('&');
}

module.exports = function(value) {
  const params = paramBuilder(['query', value]);
  const url = API_BASE + IMG_SEARCH + '?' + params;
  return Rx.DOM.getJSON(url)
};