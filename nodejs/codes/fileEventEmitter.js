var fs = require('fs');

var rs = fs.createReadStream('./../html/summer.html');
rs.on('open', () => {
    console.log('file is opened');
})

fs.open('./../html/summer.html', 'r', (err)=>{
    // res.writeHead(200, {'Content-Type': 'text/html'});
});
// var fs = require('fs');

// var readStream = fs.createReadStream('./../html/hello.html');

// /*Write to the console when the file is opened:*/
// readStream.on('open', function () {
//   console.log('The file is open');
// });
