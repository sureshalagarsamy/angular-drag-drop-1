angular.module('portalApp', ['ngRoute','globalServices','homeController', 'as.sortable']).config(function ($routeProvider,$locationProvider)
{
	$routeProvider
		.when("/home",		{templateUrl: "views/home.html",		controller: "homeCtrl"  	})
		.otherwise({redirectTo: '/home'});
});