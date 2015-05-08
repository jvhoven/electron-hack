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
	
	// Deleting a project
	$(document).on("click", "a[data-action='delete']", function() {
		var name = $(this).attr("data-value");
		var result = dialog.showMessageBox(remote.getCurrentWindow(), { 
			type: "info", message: "Are you sure you want to remove " + name + "?", 
			title: "Confirm", 
			buttons: [ "Yes", "No" ]
		});
		
		// The user has chosen the option no
		if(result == 1)
			return false;
		
		//projects.remove(name);
		
		// Settimeout because deleting project takes some time
		setTimeout(function(){
			window.location.assign("/");
		}, 200);
	});
	
	// Opening a project
	$(document).on("click", "a[data-action='open-explorer']", function() {
		var file = $(this).attr("data-value");
		shell.openExternal(file);
		
		// Close menu
		$(".open").fadeToggle(100).removeClass("open");
	});
});