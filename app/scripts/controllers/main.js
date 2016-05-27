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
				$scope.selected = {};

			})
			.error(function(status) {
				console.log(status);
			});

			$scope.calculateMoney = function(salary, score) {
				return salary * score / 100;
			}

		$scope.filterResult = function(rating, level) {
			return function(result) {
				console.log(result)
				result.money = $scope.calculateMoney($scope.selected.salary, result.score);
				return (level === undefined || level.length === 0 || result.level === level) && (rating === undefined || rating.length === 0 || result.rating === rating);
			};
		};


	});
