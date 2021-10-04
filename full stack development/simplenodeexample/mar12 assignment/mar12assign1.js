//get express function from express library we installed using npm
var express = require("express");
//creating express object from calling express function
var app = express();
var path = require("path");
app.get('/',function(request, response){
	response.send(`<!DOCTYPE html>
<html>
<head>
	<title>Registration form</title>
</head>
<body>
	<form id="myform" action= "/submission" onsubmit="doLogin(event)">
		<input type="text" name="username" placeholder="Enter name"><br>
		<input type="text" id="location" name="userlocation" placeholder="Enter Location"><br>
		<label for = "hobby">Select a hobby: </label><br>
		<select id = "hobby" name="userhobby" multiple>
			<option value="swimming">Swimming</option>
			<option value="reading">Reading</option>
			<option value="hiking">Hiking</option>
			<option value="writing">Writing</option>
		</select><br>
		<button>Login</button>
	</form>
	<button> <a href="/img" > Show image</a> </button>
	<button> <a href="/js" > Show pdf</a> </button>
	<table id="output" border="2"> </table> 
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="frontui.js"></script>
</body>
</html>`);
})

app.get('/submission',function(request, response){
	var requestOb = request.query;
	var responseOb = {status:1,msg:"request received succesfully", 
	data:{username:requestOb.username,location:requestOb.location,hobby:requestOb.hobby}};
	response.json(responseOb);
})

app.get('/frontui.js', function(req, res){
	res.sendFile(path.join(__dirname + '/frontui.js'));
});
app.get('/js', function(req, res){
	res.sendFile(path.join(__dirname + '/javascript.pdf'));
});
app.get('/img', function(req, res){
	res.sendFile(path.join(__dirname + '/image.jpg'));
});
app.listen(310);