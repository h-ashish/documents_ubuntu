// var http = require('http');
// var url = require('url');

// http.createServer(function(request, response){
// 	response.writeHead(200,{'Content-Type':'text'});
// 	response.end('Hello World!');
// }).listen(3000);

var http = require('http');
var url =  require('url');

http.createServer(function(request, response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end(`<!DOCTYPE html>
<html>
<head>
	<title>Node app for first 20 fibonacci series</title>
</head>
<body>
	<div id="mydiv"></div>
<script>
	let arr = [0,1];
	function fibo(){
		for(let i = 2; i<20; i++){
			arr[i] = arr[i-1] + arr[i-2];
		}
		document.querySelector('#mydiv').innerHTML ="The first 20 fibonacci numbers are " + arr;
	}fibo();
</script>
</body>
</html>`)
}).listen(3000);