'use strict';

angular.module('portfolio.module.editProject', [])
	.controller('EditProjectCtrl', ['$scope', '$window', 'projectsService', function ($scope, $window, projectsService) {
		$scope.editProject = {};

		$scope.editProject.form = {};

		$scope.editProject.getData = projectsService.getData();

		$scope.editProject.form = ($scope.editProject.getData) ? $scope.editProject.getData : $window.location.assign('/#/myprojects');;

		$scope.editProject.editProject = function () {
			projectsService.sendUpdatedProjectdata($scope.editProject.form);

			$window.location.assign('/#/myprojects');
		};


		$scope.editProject.editProjectImages = function () {

			var formData = new FormData();
			angular.forEach($scope.editProject.form.files, function (file) {
				formData.append('file', file);
			})

			formData.append("projectID", $scope.editProject.form._id);

			projectsService.sendUpdatedImagese(formData);
			$window.location.assign('/#/myprojects');
		}
	}]);