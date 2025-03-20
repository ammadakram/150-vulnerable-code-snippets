var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.text + "<script>alert('This site is vulnerable to XSS attacks')</script>";
    res.end(txt);
}).listen(8080);