var hackServices = angular.module('hackController', []);
var remote = require('remote');
var dialog = remote.require('dialog');

hackControllers.controller('uploadController', ['$scope', 'Project', 'ProjectService',
    function ($scope, Project, ProjectService) {
	
	var dropbox = document.getElementById('upload');
	
	// init event handlers
	function dragEnterOverLeave(evt) {
        evt.stopPropagation();
        evt.preventDefault();
	}
	
	dropbox.addEventListener("dragenter", dragEnterOverLeave, false);
    dropbox.addEventListener("dragleave", dragEnterOverLeave, false);
	dropbox.addEventListener("dragover", dragEnterOverLeave, false);
	dropbox.addEventListener("drop", function(e) {
		e.preventDefault();
		
		var file = e.dataTransfer.files[0];
		var proj = new Project({
			url: file.path
		});
		
		ProjectService.create(proj);
		dialog.showMessageBox(remote.getCurrentWindow(), { type: "info", message: "Project was successfully added!", title: "Success", buttons: [ "Ok" ]});
		
		return false;
	});
	
}]);