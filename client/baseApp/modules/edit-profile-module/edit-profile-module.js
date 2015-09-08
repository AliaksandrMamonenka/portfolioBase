'use strict';

angular.module('portfolio.module.editProfile', [])
    .controller('EditProfileCtrl', ['$scope', '$rootScope', 'uploadImagesService', function ($scope, $rootScope, uploadImagesService) {
        $scope.editPrifile = {};
        $scope.editPrifile.form = {};

        $scope.editPrifile.uploadAvatar = function () {
            var formData = new FormData();
            formData.append('avatar', $scope.files[0]);

            uploadImagesService.sendAvatar(formData);
        };

        $rootScope.$on('avatarUploated', function (event, data) {
            console.log(data);
            $scope.editPrifile.avatar = "../uploads/avatar/" + data.filename;
        });
    }]);