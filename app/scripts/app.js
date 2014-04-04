angular.module('llprk', ['ngRoute'])

.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider
            .when('/login', { templateUrl: 'partials/login.html' })
            .when('/dashboard', { templateUrl: 'partials/dashboard.html' })
            .otherwise({ redirectTo: '/login' });
    }]);
