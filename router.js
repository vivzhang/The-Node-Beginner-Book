// making different HTTP requests point at different parts of the code
function route(pathname) {
  console.log('About to route a request for ' + pathname);
}

exports.route = route;