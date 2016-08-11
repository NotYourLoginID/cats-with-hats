$(document).ready(function() {
	// get/call the default.js file to load headers then run custom functions
	$.getScript("js/default.js", function() {
		loadAndSetNavActive("#pageNav-About");
		loadFooter();
		initMap();

	});
});


function initMap() {
	navigator.geolocation.getCurrentPosition(function(pos) {
		var latlon = pos.coords.latitude + "," + pos.coords.longitude;
		var img_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false&markers=color:blue|"+latlon;
		$("#myMap").append($("<img/>", {
			"src": img_url
		}));
	});
}

// function initMap() {
// 	navigator.geolocation.getCurrentPosition(function(pos) {
// 		var my_location = {
// 			"lat": pos.coords.latitude,
// 			"lon": pos.coords.longitude
// 		};

// 		var map = new google.maps.Map(document.getElementById('myMap'),{
// 			zoom: 10,
// 			center: my_location
// 		});


// 	});
// }