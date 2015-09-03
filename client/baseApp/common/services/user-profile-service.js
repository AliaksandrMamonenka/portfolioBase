'use strict';

angular.module('portfolio.services.userProfileService', [])
	.factory('userProfileService', ['$rootScope', 'userProfileFactory', function ($rootScope, userProfileFactory) {
		return {
			getAllProfiles: function () { 
				
				userProfileFactory.userProfile.query({}, function (data) {
					console.log(data);

					$rootScope.$broadcast('getAllUserProfiles', data);
				});
			 },
			userProfile: function () { },
			upgradeProfile: function () { },
			deleteProfile: function () { },
			deleteAllProfiles: function () { }
		};
	}]);
