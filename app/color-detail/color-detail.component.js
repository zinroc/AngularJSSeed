'use strict';

angular.
	module('colorDetail').
	component('colorDetail', {
		templateUrl: 'color-detail/color-detail.template.html',
		controller: ['$routeParams', 'Service', '$scope', 
			function colorDetailController ($routeParams, Service, $scope) {
				console.log('COLOR ID', $routeParams.colorId);
				var id = parseInt($routeParams.colorId);
				$scope.color = {};
				Service.getColors().then(function (response){
					console.log('fetching color based on id');
					console.log(response);
					$scope.colors = response;

					for (var i=0; i<$scope.colors.length; i++){
						console.log($scope.colors[i], id);
						if ($scope.colors[i].id === id) {
							$scope.color = $scope.colors[i];
						} else {
							continue;
						}
					}
					$scope.$apply();
				});
			}
		]
	})