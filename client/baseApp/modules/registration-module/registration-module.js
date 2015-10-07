'use strict';

angular.module('portfolio.module.registration', [])
	.controller('RegistrationCtrl', ['$scope', 'registrationService', function ($scope, registrationService) {
		$scope.registration = {};
		$scope.registration.form = {};

		if (!$scope.registration.isValid) {

			$scope.registration.isValid = true;
		}

		$scope.registration.sendForm = function () {
			if ($scope.registration.form.password === $scope.registration.form.confirmpassword) {

				registrationService.sendData($scope.registration.form);
			} else {

				$scope.registration.isValid = false;
				$scope.registration.form.password = null;
				$scope.registration.form.confirmpassword = null;
			}
		};
	}]);