
/*

	1.Define variables
	2.Register click event listener to button
	3.When user clicks Update button, get the textfield.value and store to var city
	4.Do if else depending on the input city and choose the background image
	5.Update background image
	6.Clear textfield

*/

//Define variables

var $submitButton = document.getElementById("submit-button");
var $inputField = document.getElementById("city-type");
var city;

$submitButton.addEventListener("click",function(){

	event.preventDefault();
	city = $inputField.value.trim();

	if (city === "New York" || city === "New York City" || city === "NYC" ){
		document.body.style.backgroundImage = "url('../starter_code/images/nyc.jpg')";
	}else if (city === "San Francisco" || city === "SF" || city === "Bay Area"){
		document.body.style.backgroundImage = "url('../starter_code/images/sf.jpg')";
	}else if (city === "Los Angeles" || city === "LA" || city === "LAX"){
		document.body.style.backgroundImage = "url('../starter_code/images/la.jpg')";
	}else if (city === "Austin" || city === "ATX"){
		document.body.style.backgroundImage = "url('../starter_code/images/austin.jpg')";
	}else if (city === "Sydney" || city === "SYD"){
		document.body.style.backgroundImage = "url('../starter_code/images/sydney.jpg')";
	}else {
		document.body.style.backgroundImage = "url('../starter_code/images/citipix_skyline.jpg')";
	}

	$inputField.value = "";

})