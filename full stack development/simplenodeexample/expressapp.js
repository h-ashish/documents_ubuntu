//get express function from express library we installed using npm
var express = require("express");
//creating express object from calling express function
var app = express();
//this id to map the url to the function and the url is / which means home page
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
<script>
	function doLogin(e){
		let formOb = document.querySelector('#myform');
	}
</script>
</body>
</html>`);
})
//the url is /sleepy which calls the function inside app.get()
app.get('/submission',function(request, response){
	var requestOb = request.query;
	response.send(`<div> Username: ${requestOb.username} <br> Password: ${requestOb.password} </div>`);
})
app.listen(4000);