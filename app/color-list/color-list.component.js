'use strict';

// Register `colorList` component, 
//along with its associated controller and template

angular.
	module('colorList').
	component('colorList', {
		templateUrl: 'color-list/color-list.template.html',
		controller: [ '$scope', "Service", 
			function ColorListController ($scope, Service) {

				$scope.colors = [];

				$scope.redirectToColorDetail = function (color_id) {
					
					console.log(Service.prefix() + "/view1/" + color_id);
					window.location.href = Service.prefix() + "/view1/" + color_id;
				}
								
				$scope.getColors = function () {
					Service.getColors().then(function (response){
						$scope.colors = response;
						console.log($scope.colors);
						$scope.$apply();
					});
				}

				$scope.getColors();

			}
		]
	});