function loadAndSetNavActive(activeItemId){
	$("#myPageHeader").load("header.html", function(){
		$(activeItemId).attr("class", "active");
	});
}

function loadFooter(){
	$("#myPageFooter").load("footer.html");
}

$("head").append($("<link/>",{
	"rel":"icon",
	"href":"cat_favicon.ico",
	"type":"image/x-icon",
	"sizes":"48x48"
}));