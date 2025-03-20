var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true).query;
  var txt = q.text;

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>" + txt + "</h1>");
  res.end();
}).listen(8080);