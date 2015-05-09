'use strict';
var hackControllers = angular.module('hackControllers', []);
var remote = require("remote");
var shell = remote.require("shell");
var dialog = remote.require('dialog');

hackControllers.controller('homeController', ['$scope', 'ProjectService', 'Project',
    function ($scope, ProjectService, Project) {
        $scope.menuOpened = [];
        $scope.projects = ProjectService.getAll();

        $scope.delete = function (name) {
            var result = dialog.showMessageBox(remote.getCurrentWindow(), { type: "info", message: "Are you sure you want to remove " + name + "?", title: "Confirm", buttons: ["Yes", "No"] });
    		
            // The user has chosen the option no
            if (result == 1)
                return false;

            ProjectService.delete(name);
        };

        $scope.toggleMenu = function (index) {
            if (typeof ($scope.menuOpened[index]) == 'undefined')
                $scope.menuOpened[index] = false;

            $scope.menuOpened[index] = !($scope.menuOpened[index]);
        };

        $scope.openExplorer = function (project) {
            shell.openExternal(project.url);
        };
        
        window.onclick = function(event) {
            console.log("Clicked anywhere.");
            $scope.menuOpened.forEach(function(element, index) {
                $scope.menuOpened[index] = false;
                $scope.$apply();
            });
        }
    }
]);