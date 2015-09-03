'use strict';

angular.module('portfolio.module.addProject', ['ngRoute'])
	.controller('AddProjectCtrl', ['$scope', 'portfolioService', function ($scope, portfolioService) {
		$scope.portfolio = {};
		
		$scope.portfolio.form = {};
		
		$scope.portfolio.addPortfolio = function (){
			portfolioService.addPortfolio($scope.portfolio.form);
			// $scope.portfolio.form = {};
		};

	}]);