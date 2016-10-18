// where HTTP code lives
var http = require('http');

function onRequest(request, response) {
  console.log('Request received.');
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.write('Hello World');
  response.end();
}

http.createServer(onRequest).listen(8888); // get trigger every time when a new request comes in

console.log('Server has started.')