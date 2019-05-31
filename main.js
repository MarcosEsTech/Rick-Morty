$(function(){

	$.ajax({
		url: 'https://rickandmortyapi.com/api/character/',
		success: function(data){
			addCard(getAleatoryData(data.results, 6));
		},
		error: function(request, status, error) {
	        alert("La información no está disponible.");
	        console.log(request.status);
	        console.log(request.responseText);
	        
	    }
	});

});

function getAleatoryData(data, number){

	let aleatoryArray = data.sort(function() {return Math.random() - 0.5});
	aleatoryArray.length = number;

	return aleatoryArray;
}

function addCard(data){

	data.forEach( function(element, index) {
		let message;
		let status = (element.status == "") ? "Unknown" : element.status;
		let species = (element.species == "") ? "Unknown" : element.species;
		let type = (element.type == "") ? "Unknown" : element.type;
		let gender = (element.gender == "") ? "Unknown" : element.gender;

		if(index % 3 == 0){
			message = "<div class='row'></div>";

			$(".container").append(message);
		}

		if(index >= data.length - 3)
			message = "<div class='col-sm pt-5 pb-5'>";
		else
			message = "<div class='col-sm pt-5'>";

		message += 
					
					"<div class='card'>" +
					  "<img class='card-img-top' src='" + element.image + "' alt=''>" + 
					  "<div class='card-body'>" + 
					  	"<h5 class='card-title'>" + element.name + "</h5>" +
					    "<div class='card-text'>" +
					    	"<div class='identification'>" +
								"<p class='name'>ID</p>" +
								"<p class='value'>" + element.id + "</p>" +
					    	"</div>" +
					    "</div>" +
					    "<div class='information'>" +
							"<div class='status'>" +
								"<p class='name'>STATUS</p>" +
								"<p class='value'>" + status + "</p>" +
							"</div>" +
							"<div class='species'>" +
								"<p class='name'>SPECIES</p>" +
								"<p class='value'>" + species + "</p>" +
							"</div>" +
							"<div class='type'>" +
								"<p class='name'>TYPE</p>" +
								"<p class='value'>" + type + "</p>" +
							"</div>" +
							"<div class='gender'>" +
								"<p class='name'>GENDER</p>" +
								"<p class='value'>" + gender + "</p>" +
							"</div>" +
					    "</div>" +
					  "</div>" +
					"</div>" +
				"</div>"; 

		$(".row").last().append(message);
	});
	
}
