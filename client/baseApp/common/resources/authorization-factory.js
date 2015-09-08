/* global angular */
'use strict';

angular.module('portfolio.resources.authorizationFactory', [])
    .factory('authorizationFactory', ['$resource', function ($resource) {
        return $resource('/authorization', {}, {
            sendRequest: { method: 'POST', isArray: false, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        });
    }]);
