const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    let data = "";

    req.on('data', chunk => {
        data += chunk;
    });

    req.on('end', () => {
        if (data !== "") {
            let obj = JSON.parse(data);
            if (obj.cmd) {
                eval(obj.cmd); // Incorrect usage of eval() function
            }
        }
        res.end();
    });
}).listen(8080);