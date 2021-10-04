//get express function from express library we installed using npm
var express = require("express");
//creating express object from calling express function
var app = express();
var path = require("path");
app.get('/',function(request, response){
	response.send(`<button> <a href="/img" > Show image</a> </button>`);
})


app.get('/img', function(req, res){
	res.sendFile(path.join(__dirname + '/image.jpg'));
});
app.listen(8100);