$(document).ready(function() {
	$.getJSON("assets/cats/cat_photos.json", function(data) {
		var indicators = [];
		var image_items = [];
		$.each(data.photos, function(i, item) {
			var new_item = $("<div/>", {
				"class": "item"
			});

			var new_image = $("<img/>", {
				"src": "assets/cats/" + item.src
			});

			new_item.append(new_image);
			var new_indicator = $('<li/>', {
				"data-target": "#myCarousel",
				"data-slide-to": "0"
			});

			if (i == 0) {
				new_item.attr("class", "item active");
				new_indicator.attr("class", "active");
			}

			$(".carousel-indicators").append(new_indicator);
			$(".carousel-inner").append(new_item);
		});
	});
});