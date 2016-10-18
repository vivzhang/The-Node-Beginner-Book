// contains placeholder function for every request handler, allows us to wire the request handlers into the router, giving the router something to route to

// by passing the response to each request handler, we will get a response as soon as that handler finish running, no need to wait till the handlers before it to finish running first(done in a non-blocking function, by using asynchronous callbacks)
function start(response) {
  console.log('Request handler "start" was called.');

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value"Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

// upload() will be triggered once user enter text and hit submit(send POST request), now upload will handle the POST request
function upload(response) {
  console.log('Request handler "upload" was called.');
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;

