/**
 * reducing the size of the files inside dublicate folder by half
 */

const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'dublicate');
// console.log(path);

const fileArray = fs.readdirSync(dirname);
console.log(fileArray);

fileArray.forEach(fileName => {
    const _filePath = path.join(dirname, fileName);
    fs.stat(_filePath, (err, stats) => {
        // console.log(stats);
        if (err) throw err;
        fs.truncate(_filePath, Math.ceil(stats.size/2), (error) => {
            if (error) throw err;
        });
    });
});
