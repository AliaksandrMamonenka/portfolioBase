/* global angular */
'use strict';

angular.module('portfolio.resources.registrationFactory', [])
    .factory('registrationFactory', ['$resource', function ($resource) {
        return $resource('usersettings/registration', {}, {
            sendRequest: { method: 'POST', isArray: false}
        });
    }]);
