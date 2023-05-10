console.log("mongo DB operations.js file has started")


var mongodb= require('mongodb')

var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/DataStore";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
var dbo= db.db("DataStore");
dbo.createCollection("customers",function(err,res)
{
    if(err) throw err;
    console.log("created collection")
})

    db.close();
  });