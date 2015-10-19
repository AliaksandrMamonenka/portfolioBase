'use strict';

angular.module('portfolio.module.homePage', [])
	.controller('HomePageCtrl', ['$scope', 'projectsService', '$window', function ($scope, projectsService, $window) {
		$scope.homePage = {};

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
	}]);