let responseData;
function doLogin(e){
	e.preventDefault();
	let selectOb = document.getElementById('hobby');
	let selectedArr = [];
		console.log(selectOb.options);
		for(let i =0;i<selectOb.options.length; i++){
			if(selectOb.options[i].selected)
				selectedArr.push(selectOb.options[i].value);
		}
		
	axios.get(`/submission?username=${e.target.username.value}
		&location=${e.target.userlocation.value}
		&hobby=${selectedArr}`).then(function(res){
		createUI(res.data);
		responseData = res;
	})
	let formOb = document.getElementById('myform');
}
function createUI(res){
	console.log(res.data);
	let innerHTMLData = `<tr> <th colspan="3">${res.msg} </th> </tr> 
	<tr> <th> Username </th>  
	 <th> Location </th> 
	<th> Hobbies </th> </tr> `;
	document.getElementById("output").innerHTML = innerHTMLData + 
	`<tr> <td> ${res.data.username} </td>  
	 <td> ${res.data.location} </td> 
	 <td> ${res.data.hobby} </td> </tr> `;
}