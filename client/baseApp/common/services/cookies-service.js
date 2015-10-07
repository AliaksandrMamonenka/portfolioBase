'use strict';

angular.module('portfolio.services.cookieService', [])
    .factory('cookieService', ['ipCookie', function (ipCookie) {
        return {
            setCookie: function (name, data) {
                ipCookie(name, data, { expires: 7 });
            },
            removeCookie: function (name) {
                ipCookie.remove(name);
            },
            getCookie: function (name) { 
                if (name) {
                    return ipCookie(name);
                } else {
                    //get all    
                   return ipCookie();
                }
            }
        };
    }]);

 


