const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    let data = queryObject.data;
    eval(data);  // Vulnerable line
    res.end();
}).listen(3000);