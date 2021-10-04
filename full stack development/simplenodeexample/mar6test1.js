var http = require('http');
var url = require('url');

http.createServer(function(request, response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end(`<!DOCTYPE html>
<html>
<head>
	<title>Node app for table of employees</title>
</head>
<body>
<table name="table" id="mytable" border="2">
	<tr><th>Employee Name</th> <th>Employee ID</th></tr>
	<tr><td>Ashish H</td> <td>12345</td></tr>
	<tr><td>Prajwal</td> <td>12346</td></tr>
	<tr><td>Munna</td> <td>12347</td></tr>
	<tr><td>Yogesh</td> <td>12348</td></tr>
	<tr><td>Sumit</td> <td>12349</td></tr>
</table>
</body>
</html>`)
}).listen(5000);
