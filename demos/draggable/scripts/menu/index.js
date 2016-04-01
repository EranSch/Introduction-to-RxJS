const Rx = require('rx-dom');
const api = require('./icon_api');
const icon = require('../icons/translate');
const search = global.domNodes.search;
const searchResults = global.domNodes.searchResults;
const menu = global.domNodes.menu;

const searchVal_ = Rx.DOM.keyup(search)
  .pluck('target', 'value')
  .filter(val => val.length > 2)
  .debounce(500)
  .distinctUntilChanged();

searchVal_
  .flatMapLatest(api)
  .filter(o => o['total_count'] > 0)
  .pluck('icons')
  .map(data => {
    return data.map(icon => {
      var largestSize = icon['raster_sizes'].pop();
      var largestFormat = largestSize.formats.pop();
      return {
        id: icon['icon_id'],
        height: largestSize['size_height'],
        width: largestSize['size_width'],
        download: largestFormat['download_url'],
        url: largestFormat['preview_url']
      }
    })
  })
  .subscribe(
    renderResults,
    console.error.bind(console)
  );

function renderResults(data) {
  searchResults.innerHTML = '';
  data
    .map(icon.render)
    .forEach(i => {
      searchResults.appendChild(i);
    });
}

// Render fixture for icons
renderResults(require('./sample_data.js'));
