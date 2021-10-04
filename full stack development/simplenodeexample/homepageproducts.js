let retItem = localStorage.getItem('array');
		let myObj = JSON.parse(retItem);

		let divObj ='';
		let result = myObj.forEach(function(val){
			divObj = divObj + 
			`<tr> <td> ${val.productName} </td> 
			<td> ${val.productPrice} </td> 
			<td> ${val.productBrand} </td> 
			<td> ${val.productDesc} </td> 
			</tr>`;

		})
		document.querySelector('#table').innerHTML = 
		`<table id="table" border="2"> 
		<tr> <th colspan="4">  Local Storage Values </th> </tr>
		<tr> <th> Product Name </th> 
		<th> Product Price </th> 
		<th> Brand </th> 
		<th> Product Description </th> 
		 </tr> </table>${divObj}`;

