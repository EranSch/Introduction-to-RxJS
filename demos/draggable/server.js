var http = require('http');
var request = require('request');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var options = {
    method: 'GET',
    url: 'https://api.iconfinder.com' + req.url
  };
  request(options, (err, r, body) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.statusCode = r.statusCode;
    res.statusMessage = r.statusMessage;
    res.setHeader('Content-Type', r.headers['content-type']);
    res.end(body);
  });
}

server.listen(9999, () => {
  console.log('Listening for Connections on port 9999');
});