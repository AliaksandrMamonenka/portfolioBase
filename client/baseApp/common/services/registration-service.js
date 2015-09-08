'use strict';

angular.module('portfolio.services.registrationService', [])
    .factory('registrationService', ['$rootScope', 'registrationFactory', function ($rootScope, registrationFactory) {
        return {
            sendData: function (data) {
                registrationFactory.sendRequest(data);
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

 


