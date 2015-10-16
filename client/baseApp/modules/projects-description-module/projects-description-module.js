'use strict';

angular.module('portfolio.module.projectDescription', [])
	.controller('ProjectDescriptionCtrl', ['$scope', 'projectsService', '$window', '$uibModal', function ($scope, projectsService, $window, $uibModal) {
		$scope.projectDescription = {};
		$scope.projectDescription = projectsService.getData();
		if (!$scope.projectDescription) {
			$window.location.assign('/#/');
			return
		}
		$scope.projectDescription.openPopup = function (img) { 
			$scope.projectDescription.imagePath = img;
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'imageView.html',
				controller: 'ModalInstanceCtrl', 
				resolve: {
					data: function () {
						return $scope.projectDescription.imagePath;
					}
				}
			}); 
		}
		//slider settings
		$scope.projectDescription.slider = {
			noWrapSlides: true
		};
	}]);