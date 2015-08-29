'use strict';

// Declare app level module which depends on views, and components
angular.module('baseApp', [
  'ngRoute',
  'ngResource',
  'portfolio.module.homePage',
  'portfolio.module.addProject',
  'portfolio.module.myProjects',
  'portfolio.module.editProfile',
  'portfolio.module.profail',
  'portfolio.module.logout',
  'portfolio.resources.api'
  
])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
    templateUrl: 'baseApp/modules/home-page-module/home-page-module.html',
    controller: 'HomePageCtrl'
  });
  
  $routeProvider.when('/addproject', {
    templateUrl: 'baseApp/modules/add-project-module/add-project-module.html',
    controller: 'AddProjectCtrl'
  });
  
  $routeProvider.when('/myprojects', {
    templateUrl: 'baseApp/modules/my-projects-module/my-projects-module.html',
    controller: 'MyProjectsModuleCtrl'
  });
  
  $routeProvider.when('/editprofail', {
    templateUrl: 'baseApp/modules/edit-profile-module/edit-profile-module.html',
    controller: 'EditProfileCtrl'
  });
  
  $routeProvider.when('/profail', {
    templateUrl: 'baseApp/modules/profile-module/profile-module.html',
    controller: 'ProfileCtrl'
  });
  
  $routeProvider.when('/logout', {
    templateUrl: 'baseApp/modules/logout-module/logout-module.html',
    controller: 'LogoutCtrl'
  });
  
  $routeProvider.otherwise({ redirectTo: '/' });
  
  // this string removed #/ from url 
  $locationProvider.html5Mode({ enabled: true, requireBase: false });
}]);

