'use strict';

angular.module('portfolio.services.projectsService', [])
	.factory('projectsService', ['$rootScope', 'projectsFactory', 'cookieService', function ($rootScope, projectsFactory, cookieService) {

		var projectSettings = {};
		projectSettings.userId = (cookieService.getCookie('userInfo') && cookieService.getCookie('userInfo').userId) ? cookieService.getCookie('userInfo').userId : "";

		return {
			getAllProjects: function () {

				projectsFactory.request.query({}, function (data) {

					$rootScope.$broadcast('getAllProjects', data);
				});
			},
			getUserProjects: function (flag, id) {

				projectsFactory.request.query({ id: id || projectSettings.userId }, function (data) {

					$rootScope.$broadcast('getDataProjects', data);
				});
			},
			deletePproject: function (projectId) {

				projectsFactory.request.delete({ id: projectId });
			},
			setData: function (project) {
				projectSettings.projectData = project;
			},
			getData: function (project) {
				if (!projectSettings.projectData) {
					return
				}
				return projectSettings.projectData;
			},
			sendUpdatedProjectdata: function (project) {
				projectsFactory.request.save({ id: project._id }, project);
			},
			sendUpdatedImagese: function (img) {
				 
				projectsFactory.editImages.images(img).$promise.then(function (responce) { 
					
                    $rootScope.$broadcast('avatarUploated', responce);
                }, function (error) {
					
                    console.log("ERROR!!!!!");
                });
			},
			addProject: function (data) { 
				
				projectsFactory.addProject.project(data).$promise.then(function (responce) { 
                    // $rootScope.$broadcast('avatarUploated', responce);
                }, function (error) {
					
                    console.log("ERROR!!!!!");
                });
			}
		};
	}]);

