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

        $scope.closeAllMenus = function () {
            $scope.menuOpened.forEach(function (element, index) {
                if (element)
                    $scope.menuOpened[index] = false;
            });
            
            //check if $apply() is already running
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        }

        $scope.toggleMenu = function (index, event) {
            if (typeof ($scope.menuOpened[index]) == 'undefined')
                $scope.menuOpened[index] = false;
                
            if(!($scope.menuOpened[index]))
                $scope.closeAllMenus();

            $scope.menuOpened[index] = !($scope.menuOpened[index]);
            event.stopPropagation();
        };

        $scope.openExplorer = function (project) {
            shell.openExternal(project.url);
        };

        window.onclick = function (event) {
            $scope.closeAllMenus();
        };
    }
]);