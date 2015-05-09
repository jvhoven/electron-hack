var hack = angular.module('hack');

hack.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider
			.otherwise("/");

		$stateProvider
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
		});
	}]);