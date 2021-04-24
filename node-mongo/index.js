const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url,(err,client)=>{
    assert.equal(err,null);
    console.log('Connected correctly to server');

    const db = client.db(dbname);
    const connection  = db.collection('dishes');

    connection.insertOne({"name":"pizza","description":"too good"},(err,result)=>{
        assert.equal(err,null);
        console.log('After Insert');
        console.log(result.ops);

        connection.find({}).toArray((err,docs)=>{
            assert.equal(err,null);

            console.log('Found:\n');
            console.log(docs);

            db.dropCollection('dishes',(err,result)=>{
                assert.equal(err,null);
                client.close();
            });
        });
    });

});


