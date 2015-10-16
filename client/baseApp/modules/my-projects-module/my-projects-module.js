'use strict';

angular.module('portfolio.module.myProjects', [])
	.controller('MyProjectsModuleCtrl', ['$scope', '$window', 'projectsService', '$uibModal', function ($scope, $window, projectsService, $uibModal) {
		$scope.userProjects = {};
		projectsService.getUserProjects();

		$scope.$on('getDataProjects', function (event, data) {

			$scope.userProjects.allProjects = data;
		});

		$scope.userProjects.deleteProject = function (project, index) {

			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'confirmationRequest.html',
				controller: 'ModalInstanceCtrl',
				// size: 'sm',
				resolve: {
					data: function () {
						return project.projectname;
					}
				}
			});

			modalInstance.result.then(function (ans) {
				projectsService.deletePproject(project._id);
				$scope.userProjects.allProjects.splice(index, 1); 
			}, function () {
				// console.log('Modal dismissed at: ' + new Date());
			});
		};

		$scope.userProjects.editProject = function (project) {
			projectsService.setData(project);
			$window.location.assign('/#/editproject');
		};
	}]);