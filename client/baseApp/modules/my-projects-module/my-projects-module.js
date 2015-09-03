'use strict';

angular.module('portfolio.module.myProjects', ['ngRoute'])
	.controller('MyProjectsModuleCtrl', ['$scope', '$rootScope', 'portfolioService', function ($scope, $rootScope, portfolioService) {
		$scope.myportfolios = {};
		portfolioService.getAllPortfolios();

		$scope.$on('getAllPortfolios', function (event, data) {
			
			$scope.myportfolios.allportfolios = data;
		});
		
		$scope.myportfolios.removePortfolio = function(portfolio, index){
			portfolioService.deletePortfolio(portfolio._id);
			
			$scope.myportfolios.allportfolios.splice(index, 1);
		};
		
		$scope.myportfolios.editPortfolio = function (portfolio) {

			console.log("EDIT");
		};
	}]);