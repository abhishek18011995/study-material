var fs = require('fs');

fs.writeFile('./../html/write.html', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});