'use strict';

angular.module('portfolio.services.authorizationService', [])
    .factory('authorizationService', ['$rootScope', 'authorizationFactory', function ($rootScope, authorizationFactory) {
        return {
            sendData: function (data) {
                authorizationFactory.sendRequest(data);
            }
            //     sendAvatar: function (data) {

            //         uploadImagesFactory.uploadAvatar(data).$promise.then(function (responce) {
            //             $rootScope.$broadcast('avatarUploated', responce);
            //         }, function (error) {
            //             console.log("ERROR!!!!!");
            //         });;
            //     }
        };
    }]);

 


