var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

mongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;

    var dbo = db.db('testDB');
    const obj = [
        { name: 'John', address: 'Highway 71' },
        { name: 'Peter', address: 'Lowstreet 4' },
        { name: 'Amy', address: 'Apple st 652' },
        { name: 'Hannah', address: 'Mountain 21' }];
    dbo.collection('customers').insertMany(obj, (err, docs) => {
        if (err) throw err;
        console.log(docs);
        console.log("documents inserted");
        db.close();
    });
});
