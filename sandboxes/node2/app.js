const Rx = require('rxjs');
const RxNode = require('rx-node');

const http = require('http');

http.get('http://reddit.com/r/all.json', (dataStream) => {
  RxNode.fromStream(dataStream, 'end')
    .forEach(console.log.bind(console))
    .subscribe(
      event => console.log(event),
      event => console.error(event),
      () => console.info('subscription done')
    );
});
