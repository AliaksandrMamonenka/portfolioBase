/* global angular */
'use strict';

angular.module('portfolio.resources.portfolioFactory', [])
    .factory('portfolioFactory', ['$resource', function ($resource) {
        return {
            portfolio: $resource('portfolio/portfolio/:id', { id: '@id' })
        };
    }]);


