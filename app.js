var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function ($scope) {

    $scope.name = 'Main';
    $scope.papa = 'Test works? Angular is not defined: but works... U wut M8, should I continue? Ofc.';
}]);

myApp.controller('secondController', ['$scope', function($scope) {
    $scope.name = 'GGGGG';
}]);