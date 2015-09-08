/* global angular */
'use strict';

angular.module('portfolio.resources.registrationFactory', [])
    .factory('registrationFactory', ['$resource', function ($resource) {
        return $resource('/registration', {}, {
            sendRequest: { method: 'POST', isArray: false}
        });
    }]);
