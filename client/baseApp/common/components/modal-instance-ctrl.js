angular.module('portfolio.component.modalInstanceCtrl', [])
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, data) { 
        
        $scope.data = data; 
        $scope.ok = function () {
            $scope.ans = true;
            $modalInstance.close($scope.ans);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });