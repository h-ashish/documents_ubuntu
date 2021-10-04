let array = [];
function addTodo(e){
	e.preventDefault();
	
	let arrayOb = {
		thingsTodo : document.querySelector('#thingstodo').value,
		todoDate: document.querySelector('#date').value,
		todoTime: document.querySelector('#time').value,
	}
	array.push(arrayOb);
	localStorage.setItem('array',JSON.stringify(array));
	
}