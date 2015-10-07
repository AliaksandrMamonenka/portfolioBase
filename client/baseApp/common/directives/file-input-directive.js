angular.module('portfolio.directives.fileInput', [])
    .directive('fileInput', ['$parse', function ($parse) {

        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {

                var model = $parse(attrs.fileInput),
                    modelSetter = model.assign;

                elem.bind('change', function () {
                    scope.$apply(function () {
                        modelSetter(scope, elem[0].files);
                    })
                });
            }
        }
    }]);