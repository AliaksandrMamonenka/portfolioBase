'use strict';

angular.module('portfolio.services.uploadImagesService', [])
    .factory('uploadImagesService', ['$rootScope', 'uploadImagesFactory', function ($rootScope, uploadImagesFactory) {
        return {
            sendAvatar: function (data) {

                uploadImagesFactory.uploadAvatar(data).$promise.then(function (responce) {
                    $rootScope.$broadcast('avatarUploated', responce);
                }, function (error) {
                    console.log("ERROR!!!!!");
                });;
            }
        };
    }]);

 


