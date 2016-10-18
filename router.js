// making different HTTP requests point at different parts of the code(request handlers which handles different requests to different URLs differently
function route(handle, pathname) {
  console.log('About to route a request for ' + pathname);
  if (typeof handle[pathname] === 'function') { // if we have a function/action for this pathname in handlers
    handle[pathname](); // trigger that action
  } else {
    console.log('No request handler found for ' + pathname);
  }
}

exports.route = route;