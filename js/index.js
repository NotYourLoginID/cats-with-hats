$(document).ready(function() {
	// get/call the default.js file to load headers then run custom functions
	$.getScript("js/default.js", function() {
		loadAndSetNavActive("#pageNav-Home");
		loadFooter();
		
		// custom functions
		loadCatsToCarousel();
	});
});

function loadCatsToCarousel() {
	$.getJSON("cat_photos.json", function(data) {
		$.each(data.photos, function(i, item) {
			var new_indicator = $('<li/>', {
				"data-target": "#myCarousel",
				"data-slide-to": "0"
			});

			var new_item = $("<div/>", {
				"class": "item"
			});

			var new_image = $("<img/>", {
				"src": item.src
			});

			new_item.append(new_image);

			var new_image_text = $("<div/>", {
				"class": "carousel-caption"
			});

			var new_image_title = $("<h2>" + item.title + "</h2>")
			var new_image_caption = $("<p>" + item.caption + "</p>")

			new_image_text.append(new_image_title);
			new_image_text.append(new_image_caption);

			new_item.append(new_image_text);


			if (i == 0) {
				new_item.attr("class", "item active");
				new_indicator.attr("class", "active");
			}

			$(".carousel-indicators").append(new_indicator);
			$(".carousel-inner").append(new_item);
		});
	});

}