'use strict';
var hackControllers = angular.module('hackControllers', []);
var remote = require("remote");
var shell = remote.require("shell");

hackControllers.controller('homeController', ['$scope', 'ProjectService', 'Project',
    function ($scope, ProjectService, Project) {
        $scope.menuOpened = [];
        $scope.projects = ProjectService.getAll();
                
        $scope.delete = function(name) {
            
        };
        
        $scope.toggleMenu = function(index) {
            if(typeof($scope.menuOpened[index]) == 'undefined')
                $scope.menuOpened[index] = false;
                
            $scope.menuOpened[index] = !$scope.menuOpened[index];
        };
        
        $scope.openExplorer = function(project) {
       		shell.openExternal(project.url);
        };
        
    }
]);