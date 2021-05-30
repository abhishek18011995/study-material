var fs = require('fs');
var port = 4200;

// http.createServer(function(req, res){
fs.appendFile('./../../html/summer.html', `<!DOCTYPE html>
<html>
<body>
<h1>Summer</h1>
<p>I love the sun!</p>
</body>
</html>`, (err) => {
    if (err) throw err;
});

// });
// console.log('server successfully running at ' + port);