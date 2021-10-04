//include node http server which will create a server
console.log("starting server");
var http = require("http");
var url = require("url");
//from httpobject call the createServer function. this function takes a function as parameter.
//the function inside createServer takes 2 parameters. request means the incoming request and
//response means object from which you can send data to browser

http.createServer(function(request, response){
	console.log("you are sending me request");
	const queryObject = url.parse(request.url,true).query;
	// console.log(queryObject);
	// console.log("username =" + queryObject.username);
	// console.log("password =" + queryObject.password);
	if(Object.keys(queryObject).length !== 0){
		console.log(queryObject);
		response.writeHead(200,{'Content-Type':'text/html'});
		response.end(`<!DOCTYPE html>
		<html>
		<head>
			<title>Registration form</title>
		</head>
		<body>
		<div> Your form is succesfully submitted </div>
			Username: ${queryObject.username} and Password: ${queryObject.password}
		</body>
		</html>`);
	} else {
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end(`<!DOCTYPE html>
<html>
<head>
	<title>Registration form</title>
</head>
<body>
	<form id="myform" onsubmit="doLogin(event)">
		<input type="text" name="username" placeholder="Enter name"><br>
		<input type="password" name="password" placeholder="Enter password"><br>
		<button>Login</button>
	</form>
<script>
	function doLogin(e){
		let formOb = document.querySelector('#myform');
		alert(formOb.username.value);
	}
</script>
</body>
</html>`);
}
}).listen(8081);