var express = require("express");

var app = express();

app.get('/',function(request, response){
	response.send(`<!DOCTYPE html>
<html>
<head>
	<title>Registration form</title>
</head>
<body>
	<form id="myform" action= "/result" onsubmit="doLogin(event)">
		<input type="text" name="username" placeholder="Enter name"><br>
		<input type="text" name="userfeedback" placeholder="give some feed back"><br>
		<input type="date" name="userdate"> <br>
		<input type="number" name="number" placeholder="Enter phone number"><br>
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

app.get('/result',function(request, response){
	var requestOb = request.query;
	response.send(`<div> Username: ${requestOb.username} <br> Feedback: ${requestOb.userfeedback} <br>
	Date: ${requestOb.userdate} <br> Phone number: ${requestOb.number} </div>`);
})
app.listen(4000);