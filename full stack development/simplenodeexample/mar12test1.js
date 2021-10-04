var http = require("http");
var url = require("url");

http.createServer(function(request, response){
	const queryOb = url.parse(request.url,true).query;
	if(Object.keys(queryOb).length !==0){
		response.writeHead(200,{'Content-type':'text/html'})
		response.end(`<!DOCTYPE html>
<html>
<head>
	<title>find number prime number or not</title>
</head>
<body>
    <div id="mydiv"></div>
    <script>
        function findPrime(n){
         
           let i;
           let flag = true;
           for(i=2; i<=n/2; i++)
           {
            console.log(i);
            if(n%i == 0)
            {
                flag = false;
                break;
                console.log(flag);
            }
        }
        if(flag == true)
        {
            document.getElementById('mydiv').innerHTML = n + " is a prime number"
        }else
        {
            document.getElementById('mydiv').innerHTML = n + " is not a prime number";
        }
    }
    findPrime(${queryOb.entrynum});
</script>    
</body>
</html>`)
	}
	response.writeHead(200,{'Content-type':'text/html'});
	response.end(`<!DOCTYPE html>
<html>
<head>
	<title>find number prime number or not</title>
</head>
<body>
  
    <form id="myForm" action="/result" onsubmit="findPrime(event)">
    <input type="number" id="no" name="entrynum" placeholder="Enter a number">
    <button>Check Prime</button>
    </form>
    <div id="mydiv"></div>
    <script>
        	function findPrime(e){
        		let formOb = e.target;
        	}
        </script>  
</body>
</html>`)

}).listen(2000);