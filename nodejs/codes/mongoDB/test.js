// let http = require('http');
// let port = 4200;
// let mongoClient = require('mongodb').MongoClient;
// let mongodbUrl = 'mongodb://localhost:27017/';

// http.createServer((req, res) => {
//     mongoClient.connect(mongodbUrl, { useNewUrlParser: true }, (err, db) => {
//         if (err) throw err;
//         let dbo = db.db('catportal');

//         let query = { "likes": 200 };
//         dbo.collection('test').find(query).toArray((error, docs) => {
//             if (error) throw error;
//             if (docs) {
//                 res.writeHead(200, { 'Content-Type': 'text/json' });
//                 console.log(docs);
//                 res.write(JSON.stringify(docs));
//                 db.close();
//                 res.end();
//             }
//         })
//     });
// }).listen(port, () => console.log('server is running at ' + port));

console.log(process.env.HOME);
// console.log(__filename);
// console.log(__dirname);