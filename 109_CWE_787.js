const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    let data = JSON.parse(queryObject.data);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`Data received: ${data}`);
}).listen(8080);