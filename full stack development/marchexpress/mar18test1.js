var express = require("express");
var cookieParser = require('cookie-parser');
var route = express();
route.use(cookieParser());

route.get('/',function(req, res){
	res.cookie('name','Zenrays', {maxAge: 900000, httpOnly:  true});
	return res.send("Cookie has been sent");
});

route.get('/showcookie',function(req, res){
	var name = req.cookies['name'];
	if(name){
		return res.send(name);
	}

	return res.send('No Cookie found');
});

route.listen(7000);