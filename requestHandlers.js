// contains placeholder function for every request handler, allows us to wire the request handlers into the router, giving the router something to route to

var exec = require("child_process").exec;

function start(response) {
  console.log('Request handler "start" was called.');

  exec("ls -lah", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout); // respond the result of the exec() callback function
    response.end();
  });
}

function upload(response) {
  console.log('Request handler "upload" was called.');
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;