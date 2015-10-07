'use strict';

angular.module('portfolio.services.registrationService', [])
    .factory('registrationService', ['$rootScope', 'registrationFactory', '$window', 'cookieService', function ($rootScope, registrationFactory, $window, cookieService) {
        return {
            sendData: function (data) {
                registrationFactory.sendRequest(data).$promise.then(function (responce) {
                    cookieService.setCookie('userInfo', responce);
                    $window.location.assign('/');
                }, function (error) {
                    console.log("ERROR FROM REGISTRATION SERVICE!!!!!");
                });
            }
        };
    }]);

 


