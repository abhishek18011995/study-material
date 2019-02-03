var fs = require('fs');

fs.writeFile('./../html/write.html', 'This is my text2', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});