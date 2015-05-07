var $ = require("jquery");

$(document).ready(function(){
	
	// Open our fancy project option menu
	$(document).on("click", ".project-options", function() {
		var $menu = $(this).next();
		if($menu.hasClass("open") == false)
			$menu.fadeToggle(100, function() {
				$(this).addClass("open");	
			});
	});
	
	// Close menu when clicking somewhere else
	$(document).on("click", function() {
		$(".open").fadeToggle(100).removeClass("open");
	});
	
	// But if we click on the element we want to keep it open
	$(document).on("click", ".menu-options", function(e) {
	    e.stopPropagation(); 
	    return false;
	});
});