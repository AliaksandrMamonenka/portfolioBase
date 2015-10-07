'use strict';

angular.module('portfolio.module.addProject', [])
	.controller('AddProjectCtrl', ['$scope', 'projectsService', '$window', function ($scope, projectsService, $window) {
		$scope.project = {};

		$scope.project.form = {};
		$scope.customer = {};

		$scope.project.addProject = function () {

			var formData = new FormData();
			angular.forEach($scope.project.form.files, function (file) {
				formData.append('file', file);
			})

			for (var key in $scope.project.form) {
				formData.append(key, $scope.project.form[key]);
			}

			projectsService.addProject(formData);

			$window.location.assign('/#/myprojects');
		};
	}]);