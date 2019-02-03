const http = require('http');
const url = require('url');
const { fork } = require('child_process');
const port = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    const _url = url.parse(req.url);
    if (_url.path === '/commute') {
        const loadCount = fork('./childLoadCount.js');
        loadCount.send('start');
        loadCount.on('message', (data)=> {
            console.log(data);
            return res.end(data.toString());
        });
    } else {
        res.end('Hello Abhi');
    }
});

server.listen(port, () => console.log(`server running at ${port}`));
server.on('error', (err) => console.error(err));