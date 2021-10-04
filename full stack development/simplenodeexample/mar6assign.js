var express = require('express');
var app = express();
app.get('/',function(request, response){
	response.send(`
		<style> 
		body{
			text-align: center;
			background-image: linear-gradient(to right, #C9D6FF , #E2E2E2); 
			font-family: Trebuchet MS;
			color: black;
			margin: 20px;
		}
		a{
			text-decoration: none;
			color: white;
		}
		h1{
			font-size: 35px;
			margin-top: 40px;
			margin-bottom: 40px;
		}
		button{
			width: 15%;
			height: 2.5rem;
			margin-right: 80px;
			margin-left: 80px;
			margin-top: 10px;
			text-align: center;
			color: white;
			background-image: linear-gradient(to right, #1CB5E0 , #000046); 
			border:2px solid #001433;
			border-radius: 5px;
			font-size: 18px;
			outline: none;
		}
		p{
			font-size: 27px;
			font-weight: bold;
			margin-top: 40px;
			margin-bottom: 20px;
		}
		div{
			margin: 20px;
			margin-left: auto;
			margin-right: auto;
			width: 70%;
		}

		</style>
		<h1>Express Registration</h1>
<button > <a href="/homepage"> Home Page </a></button>
<button ><a href="/employeeDetails">Employee Details</a></button>
<button ><a href="/contactUs">Contact Us</a></button>
`);
})

app.get('/homepage',function(request, response){
	response.send(`
		<style> 
		body{
			text-align: center;
			background-image: linear-gradient(to right, #C9D6FF , #E2E2E2); 
			font-family: Trebuchet MS;
			color: black;
			margin: 20px;
		}
		a{
			text-decoration: none;
			color: white;
		}
		h1{
			font-size: 35px;
			margin-top: 40px;
			margin-bottom: 40px;
		}
		button{
			width: 15%;
			height: 2.5rem;
			margin-right: 80px;
			margin-left: 80px;
			margin-top: 10px;
			text-align: center;
			color: white;
			background-image: linear-gradient(to right, #1CB5E0 , #000046); 
			border:2px solid #001433;
			border-radius: 5px;
			font-size: 18px;
			outline: none;
		}
		p{
			font-size: 27px;
			font-weight: bold;
			margin-top: 40px;
			margin-bottom: 20px;
		}
		div{
			margin: 20px;
			margin-left: auto;
			margin-right: auto;
			width: 70%;
		}
		#mydiv1{
			margin: 5px;
			margin-left: auto;
			margin-right: auto;
			width: 80%;
			text-align: justify;
		}
		</style>
		<h1>Express Registration</h1>
<button > <a href="/homepage"> Home Page</a></button>
<button ><a href="/employeeDetails">Employee Details</a></button>
<button ><a href="/contactUs">Contact Us</a></button>
<p> About Us </p> <br>	
<div> Bloomberg is the global leader in business and financial data, news and insight. 
Using the power of technology, we connect the world’s decision makers to accurate information
 on the financial markets – and help them make faster, smarter decisions.
But that’s not where our mission ends. We dedicate our profits to Bloomberg Philanthropies 
to help save and improve lives across the globe. So whether you work for Bloomberg or with 
us, know that together our work is changing the world.
It’s there in our products, which started a revolution in financial markets that reverberates 
to this day. It’s felt by our people, who we invest in through every stage of their careers. 
And it’s proven by our actions, which harness the resources, skills and profits of our company 
to transform lives around the world. 
</div>
`);
})

app.get('/employeeDetails',function(request, response){
	response.send(`
		<style> 
		body{
			text-align: center;
			background-image: linear-gradient(to right, #C9D6FF , #E2E2E2); 
			font-family: Trebuchet MS;
			color: black;
			margin: 20px;
		}
		a{
			text-decoration: none;
			color: white;
		}
		h1{
			font-size: 35px;
			margin-top: 40px;
			margin-bottom: 40px;
		}
		button{
			width: 15%;
			height: 2.5rem;
			margin-right: 80px;
			margin-left: 80px;
			margin-top: 10px;
			text-align: center;
			color: white;
			background-image: linear-gradient(to right, #1CB5E0 , #000046); 
			border:2px solid #001433;
			border-radius: 5px;
			font-size: 18px;
			outline: none;
		}
		p{
			font-size: 27px;
			font-weight: bold;
			margin-top: 40px;
			margin-bottom: 20px;
		}
		div{
			margin: 20px;
			margin-left: auto;
			margin-right: auto;
			width: 70%;
		}
		#mydiv1{
			margin: 5px;
			margin-left: auto;
			margin-right: auto;
			width: 80%;
			text-align: justify;
		}
		table,th,td{
			border: 3px solid black;
			margin-top: 50px;
			margin-left: auto;
			margin-right: auto;
			border-collapse: collapse;
			padding: 20px;
		}
		</style>
		<h1>Express Registration</h1>
<button > <a href="/homepage"> Home Page</a></button>
<button ><a href="/employeeDetails">Employee Details</a></button>
<button ><a href="/contactUs">Contact Us</a></button>
<table id="mytable" border="2"><tr><th>Employee Name</th> <th>Employee ID</th></tr>
	<tr><td>Ashish H</td> <td>12345</td></tr>
	<tr><td>Prajwal</td> <td>12346</td></tr>
	<tr><td>Munna</td> <td>12347</td></tr>
	<tr><td>Yogesh</td> <td>12348</td></tr>
	<tr><td>Sumit</td> <td>12349</td></tr></table>`);
})

app.get('/contactUs',function(request, response){
	response.send(`
		<style> 
		body{
			text-align: center;
			background-image: linear-gradient(to right, #C9D6FF , #E2E2E2); 
			font-family: Trebuchet MS;
			color: black;
			margin: 20px;
		}
		a{
			text-decoration: none;
			color: white;
		}
		h1{
			font-size: 35px;
			margin-top: 40px;
			margin-bottom: 40px;
		}
		button{
			width: 15%;
			height: 2.5rem;
			margin-right: 80px;
			margin-left: 80px;
			margin-top: 10px;
			text-align: center;
			color: white;
			background-image: linear-gradient(to right, #1CB5E0 , #000046); 
			border:2px solid #001433;
			border-radius: 5px;
			font-size: 18px;
			outline: none;
		}
		p{
			font-size: 27px;
			font-weight: bold;
			margin-top: 40px;
			margin-bottom: 20px;
		}
		div{
			margin: 20px;
			margin-left: auto;
			margin-right: auto;
			width: 70%;
		}
		#mydiv1{
			margin: 5px;
			margin-left: auto;
			margin-right: auto;
			width: 80%;
			text-align: justify;
		}
		input {
			width: 30%;
			height: 30px;
			margin: 15px;
			margin-top: 30px;
			text-align: center;
			background-color: #e6e6ff;
			border:2px solid #001433 ;
			border-radius: 5px;
		}
		textarea {
			width: 30%;
			height: 100px;
			margin: 15px;
			margin-top: 30px;
			text-align: center;
			background-color: #e6e6ff;
			border:2px solid #001433 ;
			border-radius: 5px;
		}
		
		</style>

		<h1>Express Registration</h1>
<button > <a href="/homepage"> Home Page</a></button>
<button ><a href="/employeeDetails">Employee Details</a></button>
<button ><a href="/contactUs">Contact Us</a></button>
		<form name="myForm" action="/contactformsubmission" onsubmit="register(event)" id="myForm">
		<input type="text" name="username" placeholder="Enter name"><br>
		<input type="email" name = "useremail" placeholder="Enter Email"><br>
		<textarea rows="10" cols="22" name="userdesc" placeholder="Add Description"></textarea><br>
		<button>Submit</button>
		</form>
		<script>
		function register(e){
			let formOb = document.querySelector('#myForm');
			console.log(formOb.username.value);
			console.log(formOb.useremail.value);
			console.log(formOb.userdesc.value);
		}
		</script>`);
})

app.get('/contactformsubmission',function(request, response){
	var requestOb = request.query;
	response.send(`
		<style>
		body{
			text-align: center;
			background-image: linear-gradient(to right, #C9D6FF , #E2E2E2); 
			font-family: Trebuchet MS;
			color: black;
			margin: 20px;
		}
		a{
			text-decoration: none;
			color: white;
		}
		h1{
			font-size: 35px;
			margin-top: 40px;
			margin-bottom: 40px;
		}
		button{
			width: 15%;
			height: 2.5rem;
			margin-right: 80px;
			margin-left: 80px;
			margin-top: 10px;
			text-align: center;
			color: white;
			background-image: linear-gradient(to right, #1CB5E0 , #000046); 
			border:2px solid #001433;
			border-radius: 5px;
			font-size: 18px;
			outline: none;
		}
		p{
			font-size: 27px;
			font-weight: bold;
			margin-top: 40px;
			margin-bottom: 20px;
		}
		div{
			margin: 20px;
			margin-left: auto;
			margin-right: auto;
			width: 70%;
		}
		#mydiv1{
			margin: 5px;
			margin-left: auto;
			margin-right: auto;
			width: 80%;
			text-align: justify;
		}
		input {
			width: 30%;
			height: 30px;
			margin: 15px;
			margin-top: 30px;
			text-align: center;
			background-color: #e6e6ff;
			border:2px solid #001433 ;
			border-radius: 5px;
		}
		textarea {
			width: 30%;
			height: 100px;
			margin: 15px;
			margin-top: 30px;
			text-align: center;
			background-color: #e6e6ff;
			border:2px solid #001433 ;
			border-radius: 5px;
		}
		
		</style>
		<h1>Express Registration</h1>
<button > <a href="/homepage"> Home Page</a></button>
<button ><a href="/employeeDetails">Employee Details</a></button>
<button ><a href="/contactUs">Contact Us</a></button>
		<div> <p> The Details are given below </p> 
		Username: ${requestOb.username} <br>
	 Email: ${requestOb.useremail} <br>
	 Description: ${requestOb.userdesc} </div>`)
});
app.listen(100);