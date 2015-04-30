'use strict';

/**
 * @ngdoc function
 * @name bonusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bonusApp
 */
angular.module('bonusApp')
  .controller('MainCtrl', function ($scope, $http) {
  $http.get('data/bonus.json').
    success(function(data) {
      $scope.bonus = data;
      console.log('success');
    }).
    error(function(status) {
      console.log(status);
    });
    $scope.selected = {};
    $scope.filterResult = function(target, level) {
    return function(result) {
        return (level === undefined || level.length === 0 || result.level === level);
    };
};
});

