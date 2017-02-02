'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'colorList',
  'colorDetail',
  'core'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/view1/:colorId', {
    template: '<color-detail></color-detail>'
  })
  .otherwise('/view1');
  /**
  $routeProvider.
    when('/view1', {
      template: '<view1></view1>'
    }).
    when('/view2', {
      template: '<view2></view2>'
    }).
    otherwise('/view1');
	**/
}]);
