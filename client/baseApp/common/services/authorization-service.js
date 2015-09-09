'use strict';

angular.module('portfolio.services.authorizationService', [])
    .factory('authorizationService', ['$rootScope', '$window', 'authorizationFactory', function ($rootScope, $window, authorizationFactory) {
        return {
            sendData: function (data) {
                authorizationFactory.sendRequest(data).$promise.then(function (responce) {
                    console.log(responce);
                    $window.location.assign('/');
                }, function (error) {
                    console.log("ERROR!!!!!");
                });
            }
        };
    }]);

 


