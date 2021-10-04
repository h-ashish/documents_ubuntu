//get express function from express library we installed using npm
var express = require("express");
//creating express object from calling express function
var app = express();
var path = require("path");
app.get('/',function(request, response){
	response.send(` <button> <a href="/js" > Show pdf</a> </button>`);
})

app.get('/js', function(req, res){
	res.sendFile(path.join(__dirname + '/javascript.pdf'));
});
app.listen(8000);