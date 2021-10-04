var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var db;

/* GET users listing. */
router.get('/', function(req, res, next) 
{
	var connectionString = 'mongodb://localhost:27017';
	mongoClient.connect(connectionString)
	//if successfully connected then the function inside then() will run.
	.then(function(client)
	{
		//this line selects the db zenrays like use zenrays
		db = client.db('zenrays');
		db.collection('students').find().toArray()
		.then(function(results)
		{
			//it converts the result to json and send to the browser.
			res.json(results);

		})

	})

});

module.exports = router;