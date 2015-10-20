'use strict';

angular.module('portfolio.module.homePage', [])
	.controller('HomePageCtrl', ['$scope', 'projectsService', '$window', 'filterFilter', function ($scope, projectsService, $window, filterFilter) {
		$scope.homePage = {};
		$scope.homePage.filtersParams = {};

		projectsService.getAllProjects();

		$scope.homePage.getFullInfo = function (data) {

			projectsService.setData(data);
			$window.location.assign('/#/projectdescription');
		}
		$scope.$on('getAllProjects', function (event, data) {

			$scope.homePage.allProjects = data;

			$scope.homePage.totalItems = $scope.homePage.allProjects.length;
			$scope.homePage.itemPerPage = 5;
			$scope.homePage.currentPage = 1;
		});
		
		// $watch search to update pagination
		$scope.$watch('homePage.filtersParams.searchigData', function (newVal, oldVal) { 
			if (newVal && newVal.length) {  
				$scope.filtered = filterFilter($scope.homePage.allProjects, newVal);  
				$scope.homePage.totalItems = $scope.filtered.length; 
				$scope.homePage.currentPage = 1;
			}
		}, true);
	}]);