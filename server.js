// where HTTP code lives
var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) { // request and response are objects(contain methods to handle HTTP requests)
    var postData='';
    var pathname = url.parse(request.url).pathname; // the part after the '/'
    console.log('Request for ' + pathname + ' received.'); // 2. when a request is received and callback function is triggered

    request.setEncoding('utf8'); // expect the encoding of the received data to be UTF-8

    // event listener for the 'data' event which fills postData whenever a new chunk of POST data arrives
    request.addListener('data', function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk'"+postDataChunk + "'.");
    });

    // event listener for 'end' event, callback will be trigered whenever all POST data is gathered, route will be called
    request.addListener('end', function() {
      route(handle, pathname, response, postData); // instead of expecting a return value from the route() and call response methods, pass response object to route as the 3rd arugument, so now route will take care of it
    });

  http.createServer(onRequest).listen(8888); // get trigger every time when a new request comes in(when localhost page loads)
  console.log('Server has started.'); // 1. start immediately after we start the server(node server.js)
}

exports.start = start;