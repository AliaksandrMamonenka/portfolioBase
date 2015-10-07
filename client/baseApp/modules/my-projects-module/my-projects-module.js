'use strict';

angular.module('portfolio.module.myProjects', [])
	.controller('MyProjectsModuleCtrl', ['$scope', '$window', 'projectsService', function ($scope, $window, projectsService) {
		$scope.userProjects = {};
		projectsService.getUserProjects();

		$scope.$on('getDataProjects', function (event, data) {

			$scope.userProjects.allProjects = data;
		});

		$scope.userProjects.deleteProject = function (project, index) {
			projectsService.deletePproject(project._id);

			$scope.userProjects.allProjects.splice(index, 1);
		};

		$scope.userProjects.editProject = function (project) {
			projectsService.setData(project);
			$window.location.assign('/#/editproject');
		};
	}]);