var fs = require('fs');
var http = require('http');
var port = 3000;
// var a = require(./../)

http.createServer(function(req, res){
    fs.readFile('./../html/hello.html', (err, data)=>{
        // res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(port);

console.log('server successfully running at ' + port);
