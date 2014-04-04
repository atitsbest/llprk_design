angular.module('llprk')
.controller('LoginCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        $rootScope.title = 'Anmelden'
    }])

.controller('DashboardCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        $rootScope.title = 'Deine Produkte'
        $scope.products = [
            {name: 'Tasche 1', price: 34.99, available: 1},
            {name: 'Tasche 2', price: 45.00, available: 1},
            {name: 'Tasche 3', price: 54.99, available: 0},
            {name: 'Tasche 4', price: 19.99, available: 3}
        ];
    }]);
