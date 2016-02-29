'use strict';
const serverObservable = require('./server-observable');

const HOSTNAME = '127.0.0.1';
const PORT = 9999;

const server_ = serverObservable(HOSTNAME, PORT);

server_
  .map(event => {
    event['url'] = event.request.url;
    return event;
  })
  .filter(e => e.url !== '/')
  .take(3)
  .subscribe(event => {
    event.response.writeHead(200, {'Content-Type': 'text/plain'});
    event.response.end(`Hi from ${event.url}\n`);
  });
