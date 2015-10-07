'use strict';

angular.module('portfolio.module.editProfile', [])
    .controller('EditProfileCtrl', ['$scope', '$window', '$rootScope', 'usersService', 'cookieService', function ($scope, $window, $rootScope, usersService, cookieService) {
        $scope.editProfile = {};
        $scope.editProfile.form = {};

        $scope.editProfile.userId = cookieService.getCookie('userInfo').userId;

        usersService.getUserProfile($scope.editProfile.userId);


        $rootScope.$on('getUserProfile', function (event, data) {

            $scope.editProfile.form = data;

            $scope.editProfile.avatar = (data.avtarurl) ? "../uploads/avatar/" + data.avtarurl : "../uploads/avatar/noavatar.png";
        });

        $scope.editProfile.downloadChanges = function () {

            usersService.upgradeProfile($scope.editProfile.form);
            $window.location.assign('/#/profail');
        }

        $scope.editProfile.uploadAvatar = function () {

            var formData = new FormData();
            formData.append('avatar', $scope.files[0]);
            usersService.uploadAvatar(formData);
            $window.location.assign('/#/profail');
        };

        $rootScope.$on('avatarUploated', function (event, data) {

            $scope.editProfile.avatar = "../uploads/avatar/" + data.filename;
        });
    }]);