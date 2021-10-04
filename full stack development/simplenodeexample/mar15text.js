var express = require('express');
var app = express();
var path = require("path");

app.get('/home',function(request, response){
	response.sendFile(path.join(__dirname + '/sample.html'));
})

app.get('/frontendui.js', function(req, res){
	res.sendFile(path.join(__dirname + '/frontendui.js'));
});
app.listen(420);