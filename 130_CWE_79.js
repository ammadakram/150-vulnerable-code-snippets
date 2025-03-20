const http = require('http');
const url = require('url');

function startServer() {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

function route(handle, pathname, response) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("404 Not Found");
    response.end();
  }
}

let handle = {};

handle["/exploit"] = function(response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  let userInput = "alert(document.cookie);"; // Vulnerable line
  eval(userInput); // This line is vulnerable
  response.end();
};

startServer();