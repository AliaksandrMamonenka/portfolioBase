/* global angular */
'use strict';

angular.module('portfolio.resources.userProfileFactory', [])
    .factory('userProfileFactory', ['$resource', function ($resource) {
        return {
            userProfile: $resource('userprofile/user/:id', { id: '@id' })
        };
    }]);


