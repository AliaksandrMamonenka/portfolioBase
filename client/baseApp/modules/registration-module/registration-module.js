'use strict';

angular.module('portfolio.module.registration', ['ngRoute'])
	.controller('RegistrationCtrl', ['$scope', 'registrationService', function ($scope, registrationService) {
		$scope.registration = {};
		$scope.registration.form = {};
		$scope.registration.sendForm = function () {
			console.log("SEND REGISTRATION FORM");
			registrationService.sendData($scope.registration.form);
		};
	}]);