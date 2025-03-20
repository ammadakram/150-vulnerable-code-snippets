const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    let responseString = "";

    if(queryObject.name) {
        responseString += "Hello, " + queryObject.name;
    } else {
        responseString += "Hello, Guest";
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(responseString);
}).listen(8080);