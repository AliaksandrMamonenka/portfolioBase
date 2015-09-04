/* global angular */
'use strict';

angular.module('portfolio.resources.uploadImagesFactory', [])
    .factory('uploadImagesFactory', ['$resource', function ($resource) {
        return $resource('photos/avatar/', {}, {
            uploadAvatar: { method: 'POST', isArray: false, transformRequest: angular.identity, headers: { 'Content-Type': undefined } }
        });
    }]);
