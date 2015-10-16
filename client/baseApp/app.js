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
  
//service 
  'portfolio.services.usersService',
  'portfolio.services.registrationService',
  'portfolio.services.authorizationService',
  'portfolio.services.cookieService',
  'portfolio.services.projectsService', 
  
//directive
  'portfolio.directives.fileInput',
  
//components
  'portfolio.component.modalInstanceCtrl'



])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

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
      controller: 'AddProjectCtrl'
    });

    $routeProvider.when('/myprojects', {
      templateUrl: 'baseApp/modules/my-projects-module/my-projects-module.html',
      controller: 'MyProjectsModuleCtrl'
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
      controller: 'EditProfileCtrl'
    });

    $routeProvider.when('/editproject', {
      templateUrl: 'baseApp/modules/edit-project-module/edit-project-module.html',
      controller: 'EditProjectCtrl'
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
    // $locationProvider.html5Mode({ enabled: true, requireBase: false });
  }]);

