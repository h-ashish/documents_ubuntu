let array = [];
	function addtoLocal(e){
		e.preventDefault();
		let arrayOb ={
			productName : document.querySelector('#name').value,
			productPrice : document.querySelector('#price').value,
			productBrand : document.querySelector('#brand').value,
			productDesc : document.querySelector('#desc').value,
			productAvailability: document.querySelector('#no').checked,
			productAvailability: document.querySelector('#yes').checked,
			
		};
		array.push(arrayOb);
		localStorage.setItem('array',JSON.stringify(array));
	}