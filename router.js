// making different HTTP requests point at different parts of the code(request handlers which handles different requests to different URLs differently
function route(handle, pathname, response, postData) { // passed response as the 3rd parameter, postData as the 4th parameter
  console.log('About to route a request for ' + pathname);
  if (typeof handle[pathname] === 'function') { // if we have a function/action for this pathname in handlers
    return handle[pathname](response, postData); // trigger that action
  } else {
    console.log('No request handler found for ' + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;