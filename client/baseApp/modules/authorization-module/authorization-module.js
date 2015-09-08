'use strict';

angular.module('portfolio.module.authorization', ['ngRoute'])
	.controller('AuthorizationCtrl', ['$scope', 'authorizationService', function ($scope, authorizationService) {
		$scope.authorization = {};
		$scope.authorization.form = {};
		$scope.authorization.sendForm = function () {
			console.log("SEND authorization FORM");
		};
	}]);