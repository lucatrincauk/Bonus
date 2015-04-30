'use strict';

/**
 * @ngdoc function
 * @name bonusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bonusApp
 */
angular.module('bonusApp')
	.controller('MainCtrl', function($scope, $http) {

		$http.get('data/bonus.json')
			.success(function(data) {
				$scope.bonus = data;
						$scope.bonus.selected = {};

			})
			.error(function(status) {
				console.log(status);
			});

		$scope.filterResult = function(rating, level) {
			return function(result) {
				result.money = $scope.bonus.selected.salary * result.score / 100;
				return (level === undefined || level.length === 0 || result.level === level) && (rating === undefined || rating.length === 0 || result.rating === rating);
			};
		};
	});