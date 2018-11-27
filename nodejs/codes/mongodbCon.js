var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

mongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) {
        throw err;
    }
    var dbo = db.db('testDB'); 
    console.log('db created');
    dbo.createCollection('customers', (err, res) => {
        console.log(res);
        db.close();
    });
});