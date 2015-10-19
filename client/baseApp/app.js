'use strict';

// Declare app level module which depends on views, and components
angular.module('baseApp', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'ipCookie',
  'ui.bootstrap', 
  
//modules
  'portfolio.module.homePage',
  'portfolio.module.addProject',
  'portfolio.module.myProjects',
  'portfolio.module.projectDescription',
  'portfolio.module.editProfile',
  'portfolio.module.profail',
  'portfolio.module.logout',
  'portfolio.module.allUsers',
  'portfolio.module.registration',
  'portfolio.module.authorization',
  'portfolio.module.editProject', 
  
//resource
  'portfolio.resources.usersFactory',
  'portfolio.resources.registrationFactory',
  'portfolio.resources.authorizationFactory',
  'portfolio.resources.projectsFactory',
  'portfolio.resources.checkAuthorizationFactory',
  
//service 
  'portfolio.services.usersService',
  'portfolio.services.registrationService',
  'portfolio.services.authorizationService',
  'portfolio.services.cookieService',
  'portfolio.services.projectsService',
  'portfolio.services.checkAuthorizationService',
  
//directive
  'portfolio.directives.fileInput',
  
//components
  'portfolio.component.modalInstanceCtrl',
  
//filters
  'portfolio.filters.paginationFilter'



])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) { 
    
    // Check if the user is connected
    var checkLoggedin = function ($q, $timeout, $http, $location, $rootScope) {
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/loggedin').success(function (user) {
        
        // Authenticated
        if (user !== '0') {
          deferred.resolve();
          
          // Not Authenticated 
        } else {
          deferred.reject();
          $location.url('/authorization');
        }
      });
      return deferred.promise;
    };
    
    // Add an interceptor for AJAX errors
    $httpProvider.interceptors.push(function ($q, $location) {
      return {
        response: function (response) {
          return response;
        },
        responseError: function (response) {
          if (response.status === 401)
            $location.url('/authorization');
          return $q.reject(response);
        }
      };
    });

    $routeProvider.when('/', {
      templateUrl: 'baseApp/modules/home-page-module/home-page-module.html',
      controller: 'HomePageCtrl'
    });

    $routeProvider.when('/registration', {
      templateUrl: 'baseApp/modules/registration-module/registration-module.html',
      controller: 'RegistrationCtrl'
    });

    $routeProvider.when('/authorization', {
      templateUrl: 'baseApp/modules/authorization-module/authorization-module.html',
      controller: 'AuthorizationCtrl'
    });

    $routeProvider.when('/addproject', {
      templateUrl: 'baseApp/modules/add-project-module/add-project-module.html',
      controller: 'AddProjectCtrl',
      resolve: {
        loggedin: checkLoggedin
      }
    });

    $routeProvider.when('/myprojects', {
      templateUrl: 'baseApp/modules/my-projects-module/my-projects-module.html',
      controller: 'MyProjectsModuleCtrl',
      resolve: {
        loggedin: checkLoggedin
      }
    });

    $routeProvider.when('/projectdescription', {
      templateUrl: 'baseApp/modules/projects-description-module/projects-description-module.html',
      controller: 'ProjectDescriptionCtrl'
    });

    $routeProvider.when('/allusers', {
      templateUrl: 'baseApp/modules/all-users-module/all-users-module.html',
      controller: 'allUsersCtrl'
    });

    $routeProvider.when('/editprofail', {
      templateUrl: 'baseApp/modules/edit-profile-module/edit-profile-module.html',
      controller: 'EditProfileCtrl',
      resolve: {
        loggedin: checkLoggedin
      }
    });

    $routeProvider.when('/editproject', {
      templateUrl: 'baseApp/modules/edit-project-module/edit-project-module.html',
      controller: 'EditProjectCtrl',
      resolve: {
        loggedin: checkLoggedin
      }
    });

    $routeProvider.when('/profail', {
      templateUrl: 'baseApp/modules/profile-module/profile-module.html',
      controller: 'ProfileCtrl',
      resolve: {
        loggedin: checkLoggedin
      }
    });

    $routeProvider.when('/logout', {
      templateUrl: 'baseApp/modules/logout-module/logout-module.html',
      controller: 'LogoutCtrl',
      resolve: {
        loggedin: checkLoggedin
      }
    });

    $routeProvider.otherwise({ redirectTo: '/' });
  
    // this string removed #/ from url 
    // $locationProvider.html5Mode({ enabled: true, requireBase: false });
  }]);

