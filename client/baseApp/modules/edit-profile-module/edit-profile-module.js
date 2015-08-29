'use strict';

angular.module('portfolio.module.editProfile', ['ngRoute'])
	.controller('EditProfileCtrl', ['$scope', 'api', function ($scope, api) {
		$scope.form = {};
		$scope.customers = [];
		// console.log(api.Customer);
		api.Customer.query({}, function (data) {
			$scope.customers = data;
		});

		$scope.delete = function (index) {
			api.Customer.delete({ id: $scope.customers[index]._id }, function (data) { 
					$scope.customers.splice(index, 1);
			});
		};

		$scope.addToDB = function () {
			api.Customer.save({}, $scope.form, function () {
				// $scope.form = {};
			});
		};
	}]);