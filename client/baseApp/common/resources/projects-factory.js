/* global angular */
'use strict';

angular.module('portfolio.resources.projectsFactory', [])
    .factory('projectsFactory', ['$resource', function ($resource) {
        return {
            request: $resource('projects/:id', { id: '@id' }),
            addProject: $resource('/addproject/', {}, {
                project: { method: 'POST',transformRequest: angular.identity, headers: { 'Content-Type': undefined } }
            }),
            editImages: $resource('/editprojectimages/', {}, {
                images: { method: 'POST',transformRequest: angular.identity, headers: { 'Content-Type': undefined } }
            })
        };
    }]);