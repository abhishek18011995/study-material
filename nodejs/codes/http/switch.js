/**
 * send html file to server according to the rquest
 */

const fs = require('fs');
const url = require('url');
const http = require('http');
const server = http.createServer();
const port = 3000;

server.on('request', (req, res) => {
    // console.log(req);
    // console.log(res);
    const _urlObj = url.parse(req.url, true);

    switch (_urlObj.path) {
        case '/summer':
        case '/winter':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fs.readFileSync(`../../html/${_urlObj.path}.html`));
            break;
        case '/rain':        
        res.writeHead(301, { 'Location': '/summer' }); // permanently moved
        res.end();
        }

});

server.on('error', (err) => console.error(err));

server.listen(port, () => console.log(`server running at ${port}`));