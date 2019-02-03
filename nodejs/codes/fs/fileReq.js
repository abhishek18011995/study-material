var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 4200;

http.createServer(function (req, res) {
    var _url = url.parse(req.url, true);
    var _path = _url.path;
    var _pathUrl = './../html' + _path;
    console.log(_path);
    fs.readFile(_pathUrl, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        } else {
            console.log(data);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }
        /**
         * Both condtions are correct
         */
        // if (data) {
        //     console.log(typeof _pathUrl);
        //     res.writeHead(200, { 'Content-Type': 'text/html' });
        //     res.write(data);
        //     return res.end();
        // }
    });
}).listen(port);
console.log('server is running at ' + port);