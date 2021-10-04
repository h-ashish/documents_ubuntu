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
		<input type="password" name="password" placeholder="Enter password"><br>
		<button>Login</button>
	</form>
	<div id="output"> </div> 
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="frontendapp.js"></script>
</body>
</html>`);
})
//the url is /sleepy which calls the function inside app.get()
app.get('/submission',function(request, response){
	var requestOb = request.query;
	var responseOb = {status:1,msg:"request received succesfully", 
	data:{username:requestOb.username,password:requestOb.password}};
	response.json(responseOb)
})

app.get('/frontendapp.js', function(req, res){
	res.sendFile(path.join(__dirname + '/frontendapp.js'));
});
app.listen(4000);