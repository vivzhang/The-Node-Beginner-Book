// where HTTP code lives
var http = require('http');
var url = require('url');

function start(route) {
  function onRequest(request, response) { // request and response are objects(contain methods to handle HTTP requests)
    var pathname = url.parse(request.url).pathname; // the part after the '/'
    console.log('Request for ' + pathname + ' received.'); // 2. when a request is received and callback function is triggered

    route(pathname);

    response.writeHead(200, {'Content-Type':'text/plain'}); // in HTTP response header
    response.write('Hello World'); // in HTTP response body
    response.end(); // finishes the response
  }

  http.createServer(onRequest).listen(8888); // get trigger every time when a new request comes in(when localhost page loads)

  console.log('Server has started.'); // 1. start immediately after we start the server(node server.js)
}

exports.start = start;