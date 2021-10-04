let responseData;
function doLogin(e){
	e.preventDefault();
	axios.get(`/submission?username=${e.target.username.value}&password = ${e.target.password.value}`)
	.then(function(res){
		createUI(res.data);
		responseData = res;
	})
	let formOb = document.getElementById('myform');
}
function createUI(res){
	console.log(res.data);
	let innerHTMLData = `<div>${res.msg}</div> <div>username = ${res.data.username} </div> 
	<div> password = ${res.data.password}</div>`;
	document.getElementById("output").innerHTML = innerHTMLData;
}