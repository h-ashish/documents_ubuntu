var express = require('express');
var app = express();
var path = require("path");

app.get('/addproduct',function(request, response){
	response.sendFile(path.join(__dirname + '/mar16test.html'));
})

app.get('/addingtolocal.js', function(req, res){
	res.sendFile(path.join(__dirname + '/addingtolocal.js'));
});

app.get('/homepage', function(req, res){
	res.sendFile(path.join(__dirname + '/homepage.html'));
});

app.get('/availableproducts', function(req, res){
	res.sendFile(path.join(__dirname + '/availableproducts.html'));
});
app.listen(890);