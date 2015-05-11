var hack = angular.module('hack');

hack.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider
			.otherwise("/");
			
		/**  # Modularization
		 * I think we should modularize the routes. Check here: http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state#go
		 * Each route can have a parent and/or children.
		 *
		 * ROUTES DIAGRAM: 
		 *
		 * 			Upload				Projects			Git Integration			 (About)(or in file menu)
		 * 								   |
		 * 						   -----------------
		 * 						  |					|
		 * 					    Search			  Home
		 * 
		 * 
		 * 
		 */

		$stateProvider
			/**
			 * Home would have the ability to sort projects by:
			 * 	1. Most popular projects (by number of lines, number of times opened)
			 *  2. Newest projects
			 *  3. Other criterias (number of lines, number of times opened, language, category (categories from github?), ...)
			 * Home should also have the capability to display projects with different views:
			 * 	1. Grid (current)
			 *  2. List (Would display: name, (github: number of stars and forks), short description, small icon)
			 */
		.state('home', {
			url: '/',
			templateUrl: 'app/components/home/view.html',
			controller: 'homeController'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'app/components/about/view.html'
		})
		.state('upload', {
			url: '/upload',
			templateUrl: 'app/shared/upload/view.html',
			controller: 'uploadController'
		})
		.state('project', {
			url: '/project/{name}',
			templateUrl: 'app/components/project/view.html',
			controller: 'projectController'
		})
	}]);