'use strict';

angular.module('portfolio.module.projectDescription', [])
	.controller('ProjectDescriptionCtrl', ['$scope', 'projectsService', '$window', function ($scope, projectsService, $window) {
		$scope.projectDescription = {};   
		$scope.projectDescription = projectsService.getData();
		
		if (!$scope.projectDescription) { 
			$window.location.assign('/#/');
			return
		}
		
		//slider settings
		$scope.projectDescription.slider = { 
			noWrapSlides : true
		}; 
	}]);