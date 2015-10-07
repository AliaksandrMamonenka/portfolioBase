'use strict';

angular.module('portfolio.services.usersService', [])
	.factory('usersService', ['$rootScope', 'usersFactory','cookieService', function ($rootScope, usersFactory,cookieService) {
		return {
			getUserProfile: function (data) {
				usersFactory.userProfile.get({ id: data }, function (data) {

					$rootScope.$broadcast('getUserProfile', data);
				});
			},
			upgradeProfile: function (data) {
				usersFactory.userProfile.save({ id: data._id }, data);
			},
			uploadAvatar: function (data) {
				usersFactory.userAvatar.uploadAvatar(data).$promise.then(function (responce) { 
					
                    $rootScope.$broadcast('avatarUploated', responce);
                }, function (error) {
					
                    console.log("ERROR!!!!!");
                });
			}
		};
	}]);