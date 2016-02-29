'use strict';

const Rx = require('rxjs');
const http = require('http');

function createServerObservable(hostname, port) {

  const server = http
    .createServer() // Handled by monitoring events
    .listen(
      port,
      hostname,
      () => {
        console.log(`Server Running @ http://${hostname}:${port}/`);
      }
    );

  // Wire up RxJS handlers to appropriate events
  const observable = Rx.Observable.create(obs => {

    // Handle async evnt
    server.on('request', (request, response) => {
      obs.next({request, response});
    })

    // Handle errors
    server.on('clientError', (error, socket) => {
      obs.error(error, socket);
    });

    // Disose of the server when needed
    return () => server.close();

  });

  return observable;
}

module.exports = createServerObservable;
