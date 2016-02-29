// Imports
const Rx = require('rx-dom');
const imgFactory = require('./lib/image-factory.js');
const range = require('lodash.range');

// Applications Constants
const IMG_PATH = '/img/pic.png';

// DOM Nodes
const render = document.getElementById('render');
const detectElm = document.getElementById('detect');

// Observable
const mousemoveObs = Rx.DOM.fromEvent(detectElm, 'mousemove');

const throttledMousemovesObs = mousemoveObs
  .throttle(20)
  .map(event => {
    return {
      x: event.offsetX,
      y: event.offsetY
    }
  })
  .distinctUntilChanged();


range(99).forEach(i => {
  const img = imgFactory(IMG_PATH);
  render.appendChild(img);
  throttledMousemovesObs
    .delay(i * 150)
    .subscribe(
      event => img.style.transform = `translate(${event.x}px, ${event.y}px)`
    );
});
