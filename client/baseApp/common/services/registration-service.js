'use strict';

angular.module('portfolio.services.registrationService', [])
    .factory('registrationService', ['$rootScope', 'registrationFactory', '$window', function ($rootScope, registrationFactory,  $window) {
        return {
            sendData: function (data) {
                registrationFactory.sendRequest(data).$promise.then(function (responce) {
                     $window.location.assign('/');
                }, function (error) {
                    console.log("ERROR!!!!!");
                });
            }
        };
    }]);

 


