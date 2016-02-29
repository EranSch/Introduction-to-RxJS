require('rxjs');
require('rx-dom');
const render = document.getElementById('render');
const ball = document.getElementById('ball');

const ballObs = Rx.DOM.fromEvent(render, 'mousedown');

const drag = ballObs
  // .throttle('16')
  // .takeUntil(Rx.DOM.fromEvent(render, 'mouseup'))
  // .distinctUntilChanged()
  .map(e => {
    return { x: e.offsetX, y: e.offsetY };
  })
  // .forEach(console.log.bind(console));

drag.subscribe(event => console.log(event));
