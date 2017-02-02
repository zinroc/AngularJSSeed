'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
	$scope.hello = "World";
	/**
	$scope.colors = [
		{id: 1, name: 'red'}, 
		{id: 2, name: 'blue'}
	]
	**/

});