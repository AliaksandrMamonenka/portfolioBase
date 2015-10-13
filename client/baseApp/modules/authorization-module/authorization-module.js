'use strict';

angular.module('portfolio.module.authorization', [])
	.controller('AuthorizationCtrl', ['$scope','$rootScope', 'authorizationService', function ($scope,$rootScope, authorizationService) {
		$scope.authorization = {};
		$scope.authorization.form = {};
		$scope.authorization.invalidData = false; 
		
		$scope.authorization.sendForm = function () {
			authorizationService.sendData($scope.authorization.form);
		};
		
		 $rootScope.$on('invalidData', function (event, data) {

			$scope.authorization.invalidData = true; 
			$scope.authorization.form = {}
		});
	}]);