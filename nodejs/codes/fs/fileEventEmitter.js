var fs = require('fs');

var rs = fs.createReadStream('./../html/summer.html');
rs.on('open', () => {
    console.log('file is opened');
})

fs.open('./../html/summer.html', 'r', (err, file)=>{
    console.log(file);
});
// var fs = require('fs');

// var readStream = fs.createReadStream('./../html/hello.html');

// /*Write to the console when the file is opened:*/
// readStream.on('open', function () {
//   console.log('The file is open');
// });
