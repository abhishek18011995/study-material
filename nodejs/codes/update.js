var mongoClient = require('mongodb').MongoClient;
var http = require('http');
var url = 'mongodb://localhost:27017/';
var port = 3000;

http.createServer((req, res) => {

    mongoClient.connect(url, { useNewUrlParser: true }, (err, dbo) => {
        if (err) throw err;
        var db = dbo.db('catportal');
        var query = { by_user: /^t/};
        var newQuery = { $set: { likes: 100} };
        db.collection('test').updateMany(query, newQuery, (error, docs) => {
            if (error) throw error;
            if (docs) {
                res.writeHead(200, { 'Content-Type': 'text/json' });
                console.log(docs);
                res.write(JSON.stringify(docs));
                dbo.close();
                res.end();
            }
            res.end();
        });
    });

}).listen(port);
console.log('server is running at ' + port);


// { 'likes': { '$gte': 100 }
