var fs = require('fs');

fs.open('./../html/hello.html', 'r', (err, file)=>{
    if(err) throw err;
    console.log(file);
});

console.log('file opened');