const Rx = require('rx-dom');
const renderer = require('./result-renderer.js')(document.getElementById('render'));

const input = document.getElementById('search');
const inputObs = Rx.DOM.keyup(input);
const inputStream = inputObs
  .map(e => e.target.value)
  .filter(val => val.length > 3)
  .throttle(1000)
  .distinctUntilChanged();

function getRepos(term) {
  console.info('AJAX Fired: ', term);
  var url = `https://api.github.com/search/repositories?q=${encodeURIComponent(term)}&callback=JSONPCallback`
  return Rx.DOM.jsonpRequest(url);
}

const suggestionStream = inputStream
  .flatMapLatest(getRepos)
  .map(event => event.response.data.items)
  .map(resultSet => {
    return resultSet.map(r => {
      return {
        label: r.name
      };
    })
  });

suggestionStream
  .subscribe(
    renderer
  )
