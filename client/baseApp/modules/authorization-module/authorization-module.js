'use strict';

angular.module('portfolio.module.authorization', [])
	.controller('AuthorizationCtrl', ['$scope', 'authorizationService', function ($scope, authorizationService) {
		$scope.authorization = {};
		$scope.authorization.form = {};
		$scope.authorization.sendForm = function () {
			authorizationService.sendData($scope.authorization.form);
		};
	}]);