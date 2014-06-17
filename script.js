var onepageApp = angular.module('onepageApp', ['ngRoute']);

onepageApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller : 'aboutController'
		})
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller : 'contactController'
		});
	
});

onepageApp.controller('mainController', function($scope) {
	$scope.message = 'Welcome to the wonderful world of AngularJS!';
});
onepageApp.controller('aboutController', function($scope) {
	$scope.message = 'This an exemple of AngularJS one page';
});
onepageApp.controller('contactController', function($scope) {
	$scope.message = 'Keep in touch!';
});