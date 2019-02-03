var fs = require('fs');

fs.rename('./../html/write.html', './../html/writeFile.html', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});