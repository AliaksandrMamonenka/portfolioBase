angular.module('portfolio.filters.paginationFilter', [])
    .filter('pagination', function ($timeout) {
        return function (allProjects, start) {
			if (allProjects) { 
				return allProjects.slice(start); 
			}
		}
    });
	
	
	 