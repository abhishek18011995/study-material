/**
 * watching the dir for changes like add, remove changed 
 */

const fs = require('fs');
const path = require('path');

const dirNamePath = path.join(__dirname, 'files');
const currentFile = fs.readdirSync(dirNamePath);

fs.watch(dirNamePath, (eventType, fileName) => {
    console.log(eventType);
    console.log(fileName);
    console.log(currentFile);
    if (eventType === 'rename') {
        const index = currentFile.indexOf(fileName);
        if (index >= 0) {
            currentFile.splice(index, 1);
            logWithTime('removed', fileName);
            return;
        }
        currentFile.push(fileName);
        logWithTime('added', fileName);
        return;
    }
    
    logWithTime('changed', fileName);
    console.log(currentFile);
});

function logWithTime(eventType, fileName) {
    console.log(`${new Date()} ${fileName} was ${eventType}`);
}



