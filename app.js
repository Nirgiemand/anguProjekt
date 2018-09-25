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
        .when('/third', {
            templateUrl: 'pages/example.html',
            controller: 'thirdController'

        })
        .when('/fourth', {
            templateUrl: 'pages/game.html',
            controller: 'fourthController'
        })
        .when('/fifth', {
            templateUrl: 'pages/feedback.html',
            controller: 'fifthController'
        })
});



myApp.controller('mainController', ['$scope', function ($scope) {

    $scope.papa = 'Test works? Angular is not defined: but works... U wut M8, should I continue? Ofc.';
}]);

myApp.controller('secondController', ['$scope', function ($scope) {
    $scope.todos = [
        {text:'Learn AngularJS', done:false},
        {text:'Build an app', done:false}
    ];
      
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
}]);
