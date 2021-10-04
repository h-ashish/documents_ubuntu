var express = require('express');
var app = express();

app.get('/',function(request, response){
	response.send(`<!DOCTYPE html>
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
})

app.get('/result',function(request, response){
	var responseOb = request.query;
	response.send(`<!DOCTYPE html>
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
    findPrime(${responseOb.entrynum});
</script>    
</body>
</html>`)
})
app.listen(490);