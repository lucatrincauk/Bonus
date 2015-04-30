'use strict';

/**
 * @ngdoc overview
 * @name bonusApp
 * @description
 * # bonusApp
 *
 * Main module of the application.
 */
angular
	.module('bonusApp', [
		'ngResource',
		'ngSanitize',
		'ui.router'
	])
	.config(function($stateProvider, $urlRouterProvider) {
		// For any unmatched url, redirect to '/''
		$urlRouterProvider.otherwise('/');

		$stateProvider
		// app.home
			.state('main', {
			url: '/',
			templateUrl: 'main.html',


		}).state('calculate', {
			url: '/calculate',
			templateUrl: 'calculate.html',
			controller: 'MainCtrl'


		});
	});