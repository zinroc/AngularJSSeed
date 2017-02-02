'use strict';

angular.
	module('core').
	factory('Service', 
		function($http) {
			"use strict";
			var serviceAPI = {};
			var colors = colors = [
					{id: 1, name: 'red'},
					{id: 2, name: 'blue'}
				];

			serviceAPI.getColors = function () {
				return Promise.resolve(colors);
			};


			serviceAPI.getJSONDummy = function (data) {
					
				return $http({
					method: 'POST',
					url: '../controllers/color.php',
					headers: {
						'Content-Type': 'application/json'
					},
				})
			};

			/**
			 * Return the URL prefix that should go before the /controller/function part of the URL
			 */
			serviceAPI.prefix = function () {
				// this won't always work, but should work for now
				var href = window.location.href;
				return href.substr(0, href.indexOf("#!") + "#!".length);
				//return href;
			};


		    serviceAPI.getURL = function (controller, fn) {
		       return this.prefix() + "/controllers/" + controller + "/" + fn;
		    };

			/**
			 * Get JSON from the controller with no parameters, from the given controller and function
			 * @param  {string}   controller The controller
			 * @param  {string}   fn         The function in the controller
			 */
			serviceAPI.getJSON = function (controller, fn) {
				return $http.post(
					this.getURL(controller, fn),
					{}
				);
			};

			/**
			 * Get JSON from the controller with given parameters
			 * @param  {string}   controller The controller
			 * @param  {string}   fn         The function in the controller
			 * @param  {Object}   data       The data to send
			 */
			serviceAPI.getJSONWithParams = function (controller, fn, data) {
				return $http({
					method: 'POST',
					data: this.serializeObject(data),
					url: this.prefix() + '/' + controller + '/' + fn,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				});
			};


			/**
			 * Return True iff the given server JSON response is an error
			 * @param  {Object}  response The server's JSON response
			 * @return {Boolean}          True iff the given server JSON response is an error
			 */
			serviceAPI.isError = function (response) {
				return response.hasOwnProperty('status') && response.status === 'error';
			};


			return serviceAPI;
		}
	);