var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
    
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
    
        .when('/second', {
            controller: 'secondController',
            templateUrl: 'pages/todo.html'
        })
});



myApp.controller('mainController', ['$scope', function ($scope) {

    $scope.name = 'Main';
    $scope.papa = 'Test works? Angular is not defined: but works... U wut M8, should I continue? Ofc.';
}]);

myApp.controller('secondController', ['$scope', function ($scope) {
    $scope.name = 'GGGGG';
}]);
