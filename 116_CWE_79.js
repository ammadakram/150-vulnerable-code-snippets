http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Hello " + query.name + "</h1>");
    res.end();
}).listen(8080);