const board = global.domNodes.board;

const hover_ = Rx.Observable.merge(
  Rx.DOM.fromEvent(board, 'mouseover'),
  Rx.DOM.fromEvent(board, 'mouseout')
);

hover_
  .filter(event => {
    return event.target.classList.contains('icon--placed');
  })
  .subscribe(
    event => {
      var op = event.type === 'mouseover' ? 'add' : 'remove';
      event.target.classList[op]('icon--hover');
    }
  );