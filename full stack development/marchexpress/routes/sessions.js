var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next){
	//this line will set up a session variable with variable name as name and value as Zenrays.com
	req.session.name = "Zenrays.com";
	//we are setting a location variable with value as Bangalore]
	req.session.location = "Bangalore";
	res.send("session set");
})

router.get("/showsession", function(req, res, next){
	res.send(
		`the value of name is ${req.session.name} and location is ${req.session.location}`
	);
});

//equivalent to logout in session terminology
router.get('/clear', function(req, res, next){
	req.session.destroy(function(err){
		console.log(err);
		res.send("Session Destroyed");
	});
});

//if you want to delete a particular session variable, not all then we can use delete keyword.
router.get('/deletelocationsession', function(req, res, next){
	if(req.session.location){
		//this will delete location session available
		delete req.session.location;
		res.send("deleted location session variable");
	} else {
		res.send('failed');
	}
});

module.exports = router;