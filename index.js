// main file start the app
var server = require('./server');
var router = require('./router');

server.start(router.route);