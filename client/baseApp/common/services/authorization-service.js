'use strict';

angular.module('portfolio.services.authorizationService', [])
    .factory('authorizationService', ['$rootScope', '$window', 'authorizationFactory', 'cookieService', function ($rootScope, $window, authorizationFactory, cookieService) {
        return {
            sendData: function (data) {
                authorizationFactory.sendRequest(data).$promise.then(function (responce) {
                    cookieService.setCookie('userInfo', responce);
                    $window.location.assign('/');
                }, function (error) {
                    console.log("ERROR!!!!!");
                });
            }
        };
    }]);

 


