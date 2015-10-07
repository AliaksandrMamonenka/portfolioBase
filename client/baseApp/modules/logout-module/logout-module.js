'use strict';

angular.module('portfolio.module.logout', [])
	.controller('LogoutCtrl', ['$http', 'cookieService', '$window', function ($http, cookieService, $window) {

		cookieService.removeCookie("userInfo");
		$http.get('/logout').
			then(function (response) {
				$window.location.assign('/');
			}, function (err) {
				console.log("ERROR: " + err);
			});
	}]);