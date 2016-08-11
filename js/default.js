function loadAndSetNavActive(activeItemId){
	$("#myPageHeader").load("header.html", function(){
		$(activeItemId).attr("class", "active");
	});
	
}

function loadFooter(){
	$("#myPageFooter").load("footer.html");
}