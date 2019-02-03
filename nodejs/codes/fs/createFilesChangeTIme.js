/**
 * creating multiple files and changing the timestamp of the files 
 */

const fs = require('fs');
const path = require('path');
const numFiles = 10;
const oneDayMs = 24 * 60 * 60 * 1000;

const dirname = path.join(__dirname, 'files');
if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname);
    console.log('New Direcrory created');
}

for (let i = 0; i < numFiles; i++) {
    const fileName = path.join(dirname, `file${i + 1}`);
    fs.writeFile(fileName, `Hello ${i + 1}`, (err => {
        if (err) throw err;
        const time = (Date.now() - i * oneDayMs) / 1000;
        fs.utimes(fileName, time, time, (error) => {
            if (error) throw error;
        })
    }));
}

// console.log(path);

// fs.mkdir(dirname, (err) => {

// });

