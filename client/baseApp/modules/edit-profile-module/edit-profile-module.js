'use strict';

angular.module('portfolio.module.editProfile', ['ngRoute'])
	.controller('EditProfileCtrl', ['$scope', 'userProfileService', function ($scope, userProfileService) {
		$scope.editPrifile = {};
		$scope.editPrifile.form = {};
		$scope.editPrifile.users = [];
		
		userProfileService.getAllProfiles();
		
		$scope.$on('getAllUserProfiles', function (event, data) {

			$scope.editPrifile.users = data;
		});
		
		$scope.editPrifile.addToDB = function () {
			api.Customer.save({}, $scope.form, function () {
				$scope.form = {};
			});
		};
		
		
		
		
		
		// // console.log(api.Customer);
		// api.Customer.query({}, function (data) {
		// 	$scope.customers = data;
		// });

		// $scope.delete = function (index) {
		// 	api.Customer.delete({ id: $scope.customers[index]._id }, function (data) {
		// 		$scope.customers.splice(index, 1);
		// 	});
		// };

		
	}]);