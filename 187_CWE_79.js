http.createServer(function (req, res) {
    var query = require('url').parse(req.url, true).query;
    var name = query.name;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Hello " + name + "</h1>");
    res.end();
}).listen(8080);