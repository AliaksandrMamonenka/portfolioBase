'use strict';

angular.module('portfolio.services.portfolioService', [])
	.factory('portfolioService', ['$rootScope', 'portfolioFactory', function ($rootScope, portfolioFactory) {
		return {
			getAllPortfolios: function () {
				
				portfolioFactory.portfolio.query({}, function (data) {

					$rootScope.$broadcast('getAllPortfolios', data);
				});
			},

			addPortfolio: function (data) {

				portfolioFactory.portfolio.save({}, data);

			},

			updatePortfolio: function () {
				//todo
			},
			
			getCurrentUserPortfolios: function () {
				//todo
				console.log("Current user portfolios")
			},

			deletePortfolio: function (id) {

				portfolioFactory.portfolio.delete({ id: id });
			}
		};
	}]);

