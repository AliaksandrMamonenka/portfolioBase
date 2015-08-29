/* global angular */
'use strict';

angular.module('portfolio.resources.api', [
]).factory('api', ['$resource', function ($resource) {
    return {
        Customer: $resource('api/customer/:id', {id:'@id'}) 
    };
}]);


