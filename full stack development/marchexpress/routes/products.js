var express = require('express');
var router = express.Router();
var mongoClient =  require('mongodb').MongoClient;
var db;

router.get('/',function(req, res, next){
    var connectionString = 'mongodb://localhost:27017';
    mongoClient.connect(connectionString)
    .then(function(client){
        db = client.db('zenrays');
        db.collection('products').find().toArray()
        .then(function(results){
            res.json(results);
        })
    })
})  
module.exports = router;