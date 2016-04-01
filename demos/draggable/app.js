global.domNodes = {
  menu: document.getElementById('menu'),
  search: document.getElementById('search'),
  searchResults: document.getElementById('search-results'),
  board: document.getElementById('board')
};

require('!style-loader!css-loader!./style/style.css');

require('./scripts/menu');
require('./scripts/icons');
require('./scripts/board');

