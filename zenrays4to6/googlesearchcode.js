<script>
		function search(event){
			if(event.key == "Enter"){
			searchText = document.getElementById("searchbox").value;
			return doSearch();
		}
		}
		function doSearch(){
			let searchResult = '';
			let searchText = '';
			let searchContent = '';
			let outputDiv = document.getElementById("output");
			searchText = document.getElementById("searchbox").value;
			/*searchText = event.target.value;*/
			searchText = searchText.toLowerCase();
			if(searchText == "zenrays"){
				searchResult= " Zenrays is a year old company in training and consulting.";
				searchContent = "We offer 20 + Programming languages Training in Bangalore - Koramangala, BTM Layout and Marathahalli. We also offer fast track Coding Bootcamps in Bangalore on Angular 2, JavaScript, ReactJS, AI and Spring and Hibernate. Our Trainers are 10+ years of experienced industry experts, and presently consulting many MNCs and Corporate organisations. All our classroom based courses also include students participating via Online facilities from various parts of India and across the Globe. ";
			}
			if(searchText =="react"){
				searchResult = " React is a javascript framework to create awesome web applications.";
				searchContent = " React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. ";
			}outputDiv.innerHTML ="<h1>" + searchResult + "</h1>" +"<br>" +"<p>" + searchContent + "</p>" ;
		}
	</script>