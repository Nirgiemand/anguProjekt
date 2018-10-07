var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.htm',
            controller: 'mainController'
        })

        .when('/second', {
            controller: 'secondController',
            templateUrl: 'pages/todo.htm'
        })
        .when('/third', {
            templateUrl: 'pages/example.htm',
            controller: 'thirdController'

        })
        .when('/fourth', {
            templateUrl: 'pages/game.htm',
            controller: 'fourthController'
        })
        .when('/fifth', {
            templateUrl: 'pages/feedback.htm',
            controller: 'fifthController'
        })
        .otherwise({
        redirectTo: '/'
    });
});



myApp.controller('mainController', ['$scope', function ($scope) {

    $scope.papa = 'Test works? Angular is not defined: but works... U wut M8, should I continue? Ofcourse';
}]);

myApp.controller('secondController', ['$scope', function ($scope) {
     $scope.todoList = [
         {todoText:'Learn AngularJS', done:false},
         {todoText:'Score a goal or two in the last league game', done:false},
         {todoText:'Look at the API stuff', done:true},
         {todoText:'Finish AngularJS project', done:false}
     ];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
}]);