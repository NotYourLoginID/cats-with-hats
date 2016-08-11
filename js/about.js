$(document).ready(function() {
	// get/call the default.js file to load headers then run custom functions
	$.getScript("js/default.js", function() {
		loadAndSetNavActive("#pageNav-About");
		loadFooter();
		
		// custom functions
	});
});