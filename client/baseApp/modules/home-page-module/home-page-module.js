'use strict';

angular.module('portfolio.module.homePage', [])
	.controller('HomePageCtrl', ['$scope', '$rootScope', 'portfolioService', function ($scope, $rootScope, portfolioService) {
		$scope.homePage = {};

		portfolioService.getAllPortfolios();

		$scope.$on('getAllPortfolios', function (event, data) {

			$scope.homePage.getAllPortfolios = data;
		});
	}]);