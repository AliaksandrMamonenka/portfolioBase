/* global angular */
'use strict';

angular.module('portfolio.resources.usersFactory', [])
    .factory('usersFactory', ['$resource', function ($resource) {
        return {
            userProfile: $resource('/userprofile/:id', { id: '@id' }),
            userAvatar: $resource('/useravatar/:id', { id: '@id' }, {
                uploadAvatar: { method: 'POST', isArray: false, transformRequest: angular.identity, headers: { 'Content-Type': undefined } }
            })
        }
    }]);