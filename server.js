// where HTTP code lives
var http = require('http');

function start() {
  function onRequest(request, response) { // request and response are objects(contain methods to handle HTTP requests)
    console.log('Request received.'); // 2
    response.writeHead(200, {'Content-Type':'text/plain'}); // in HTTP response header
    response.write('Hello World'); // in HTTP response body
    response.end(); // finishes the response
  }

  http.createServer(onRequest).listen(8888); // get trigger every time when a new request comes in(when localhost page loads)

  console.log('Server has started.'); // 1. start immediately after we start the server(node server.js)
}

exports.start = start;