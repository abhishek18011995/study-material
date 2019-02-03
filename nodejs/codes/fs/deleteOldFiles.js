/**
 * delete the file after a certain time 
 */

const fs = require('fs');
const path = require('path');
const limitTime = Date.now() - 7 * 24 * 60 * 60 * 1000;

const dirnamepath = path.join(__dirname, 'files');

const fileArray = fs.readdirSync(dirnamepath);
// console.log(limitTime);

fileArray.forEach(_file => {
    const filePath = path.join(dirnamepath, _file);
    fs.stat(filePath, (err, _stats) => {
        if (err) throw err;
        const fileModifiesTime = _stats.mtime.getTime();
        // console.log(_file,_stats.mtime.getTime());
        if (limitTime >= fileModifiesTime) {
            fs.unlink(filePath, (err) => {
                if (err) throw err;
                console.log(`file deleted ${_file}`);
            });
        }

    });
})


