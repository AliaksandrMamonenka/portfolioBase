'use strict';

angular.module('portfolio.module.allUsers', [])
	.controller('allUsersCtrl', ['$scope', 'userProfileService', function ($scope, userProfileService) {
		$scope.allUsers = {};

		userProfileService.getAllProfiles();

		$scope.$on('getAllUserProfiles', function (event, data) {

			$scope.allUsers.getAllUserProfiles = data;
		});
	}]);