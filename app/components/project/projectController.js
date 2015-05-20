'use strict';
var hackControllers = angular.module('hackControllers');

hackControllers.controller('projectController', ['$scope', '$stateParams', '$timeout', 'ProjectService', 'Project',
    function ($scope, $stateParams, $timeout, ProjectService, Project) {

		// TODO check if not empty
		// For editing
		var name = $stateParams.name;
		$scope.master = ProjectService.read(name);
		$scope.project = angular.copy($scope.master);	
		
		// Save the project
		$scope.update = function() {
			ProjectService.update(name, $scope.project);
		};		
		
		// New project
		$scope.$on("upload", function(event, file) {
			var proj = new Project({
				url: file.path
			});
			
			console.log(proj);
		});
	}
]);