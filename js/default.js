function loadAndSetNavActive(activeItemId) {
	$("#myPageHeader").load("header.html", function() {
		$(activeItemId).attr("class", "active");
	});
}

function loadFooter(loadProgressBar = false) {
	$("#myPageFooter").load("footer.html", function() {
		if (loadProgressBar == true) {
			$("#pageloadProgress").parent().css("display", "block");
		}
	});


}

//set the favicon
$("head").append($("<link/>", {
	"rel": "icon",
	"href": "cat_favicon.ico",
	"type": "image/x-icon",
	"sizes": "48x48"
}));