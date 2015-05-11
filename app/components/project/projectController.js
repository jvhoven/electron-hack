'use strict';
var hackControllers = angular.module('hackControllers');

hackControllers.controller('projectController', ['$scope', '$state', '$stateParams', '$timeout', 'ProjectService', 'Project',
    function ($scope, $state, $stateParams, $timeout, ProjectService, Project) {
		
		// TODO check if not empty
		var name = $stateParams.name;
		$scope.master = ProjectService.read(name);
		$scope.project = angular.copy($scope.master);	
		
		// Save the project
		$scope.update = function() {
			ProjectService.update(name, $scope.project);
		};
		
		
	}
]);