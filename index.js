// main file start the app
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {}; // a collection of request handlers
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);