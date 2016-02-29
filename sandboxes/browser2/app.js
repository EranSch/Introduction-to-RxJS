// Imports
const Rx = require('rx-dom');
const range = require('lodash.range');
const imgFactory = require('./lib/image-factory.js');

// Applications Constants
const IMG_PATH = '/img/pic.png';
const IMG_COUNT = 5;

// DOM Nodes
const render = document.getElementById('render');
const detectElm = document.getElementById('detect');

// Observable
const mousemove$ = Rx.DOM.fromEvent(detectElm, 'mousemove');

const throttledMouseCoords$ = mousemove$
  .throttle(16)
  .map(e => {
    return {
      x: e.offsetX,
      y: e.offsetY
    };
  })
  .distinctUntilChanged();

range(IMG_COUNT).forEach(i => {
  var img = imgFactory(IMG_PATH);
  render.appendChild(img);
  throttledMouseCoords$
    .delay(i * 150)
    .subscribe(
      e => img.style.transform = `translate(${e.x}px, ${e.y}px)`
    )
});
