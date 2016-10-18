// where HTTP code lives
var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) { // request and response are objects(contain methods to handle HTTP requests)
    var pathname = url.parse(request.url).pathname; // the part after the '/'
    console.log('Request for ' + pathname + ' received.'); // 2. when a request is received and callback function is triggered

    // response.writeHead(200, {'Content-Type':'text/plain'}); // in HTTP response header
    route(handle, pathname, response); // instead of expecting a return value from the route() and call response methods(line 10, 12, 13), pass response object to route as the 3rd arugument, so now route will take care of it
    // response.write(content); // in HTTP response body
    // response.end(); // finishes the response
  }

  http.createServer(onRequest).listen(8888); // get trigger every time when a new request comes in(when localhost page loads)
  console.log('Server has started.'); // 1. start immediately after we start the server(node server.js)
}

exports.start = start;