'use strict';

angular.module('portfolio.module.profail', [])
	.controller('ProfileCtrl', ['$scope', '$rootScope', 'usersService', 'cookieService', function ($scope, $rootScope, usersService, cookieService) {
		$scope.profile = {};
		$scope.profile.userInfo = [];

		$scope.profile.userId = cookieService.getCookie('userInfo').userId;

        usersService.getUserProfile($scope.profile.userId);

        $rootScope.$on('getUserProfile', function (event, data) {

			$scope.profile.userInfo = data;

			$scope.profile.avatar = (data.avtarurl) ? "../uploads/avatar/" + data.avtarurl : "../uploads/avatar/noavatar.png";
		});
	}]);