angular.module('llprk')
.controller('LoginCtrl', ['$scope', '$rootScope', '$location',
    function($scope, $rootScope, $location) {
        $rootScope.title = 'Anmelden'

    $scope.login = function() {
        alert('SUBMIT');
        $location.path('/dashboard');
    }
    }])

.controller('DashboardCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        $rootScope.title = 'Deine Produkte'
        $scope.products = [
            {name: 'Tasche 1', image: 'tasche1.png', price: 34.99, available: 1},
            {name: 'Tasche 2', image: 'tasche1.png', price: 45.00, available: 1},
            {name: 'Tasche 3', image: 'tasche1.png', price: 54.99, available: 0},
            {name: 'Tasche 4', image: 'tasche1.png', price: 19.99, available: 3}
        ];
    }]);
