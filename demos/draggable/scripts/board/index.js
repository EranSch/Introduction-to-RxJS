const addToBoard = require('./add_to_board');

const board = global.domNodes.board;

// Make elements draggable
const mousedown_ = Rx.DOM.fromEvent(document, 'mousedown');
const mouseup_   = Rx.DOM.fromEvent(document, 'mouseup');
const mousemove_ = Rx.DOM.fromEvent(document, 'mousemove');

const drag_ = mousedown_
  .filter(e => e.target.classList.contains('icon'))
  .map(event => {
    if (event.target.parentNode !== board) {
      event.newElement = addToBoard(event.target);
    }
    return event;
  })
  .flatMap(md => {

    // Map mousedown to mousemove event, return position diff
    return mousemove_
      .map(mm => {
        mm.preventDefault();
        mm.mouseDownEvent = md;
        return mm
      })
      .takeUntil(
        mouseup_
          .tap(event => event.target.classList.add('icon--placed'))
      );
    }
  )
  .distinctUntilChanged();

const movement = drag_
  .map(mm => {
    mm.preventDefault();
    return {
      element: mm.mouseDownEvent.newElement || mm.mouseDownEvent.target,
      offset: {
        left: mm.clientX - mm.mouseDownEvent.offsetX,
        top: mm.clientY - mm.mouseDownEvent.offsetY
      }
    };
  })
  .subscribe(
    drag => {
      console.log(drag);
      drag.element.style.transform = `translate(${drag.offset.left}px,${drag.offset.top}px)`;
    }
  );

const scale = drag_
  .filter(event => event.target.parentNode === board)
  .filter(event => event.shiftKey)
  .map(event =>  {
    return {
      node: event.target,
      scale: (-(event.y - event.mouseDownEvent.y) / 150) + 1
    }
  })
  .distinctUntilChanged()
  .subscribe(event => {
    const node = event.node;
    const {width, height} = node;
    node.height = node.height * event.scale;
    node.width = node.width * event.scale;
  });



















