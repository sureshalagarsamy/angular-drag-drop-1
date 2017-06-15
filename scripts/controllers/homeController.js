angular.module("homeController", []).controller("homeCtrl", function($http, $rootScope, $scope, globalService)
{
	console.log("home page");
	
	$rootScope.homeMenu 	= true;

	$scope.productList = [{id:1,name:'Electronics'},{id:2,name:'Books'},{id:3,name:'Furnitures'},{id:4,name:'Movies'}];
	$scope.myCart = [];
	
	
});