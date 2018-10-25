var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.htm',
            controller: 'mainController'
        })

        .when('/todo', {
            controller: 'secondController',
            templateUrl: 'pages/todo.htm'
        })
        .when('/example', {
            controller: 'thirdController',
            templateUrl: 'pages/example.htm'
        })
        .when('/game', {
            templateUrl: 'pages/game.htm',
            controller: 'fourthController'
        })
        .when('/feedback', {
            templateUrl: 'pages/feedback.htm',
            controller: 'fifthController'
        })
        .when('/resource', {
            templateUrl: 'pages/resources.htm',
            controller: 'sixthController'
        })
        .otherwise({
            redirectTo: '/'
        });
});



myApp.controller('mainController', ['$scope', function ($scope) {

    $scope.papa = 'Ofcourse';
}]);

myApp.controller('secondController', ['$scope', function ($scope) {
    $scope.image = {
        src: "img/tododo.png"
    };
        
    $scope.todoList = [
        {
            todoText: 'Learn AngularJS',
            done: true
                },
        {
            todoText: 'Score a goal or two in the last league game',
            done: true
                },        
        {
            todoText: 'Angular 6 course',
            done: false
                },        
        {
            todoText: 'Go for a walk with my dog-mate Bob',
            done: true
                },
        {
            todoText: 'Look at the API stuff',
            done: true
                }, 
        {
            todoText: 'Learn and understand JAVA',
            done: false
                },
        {
            todoText: 'Finish AngularJS project',
            done: true
                }
     ];

    $scope.todoAdd = function () {
        $scope.todoList.push({
            todoText: $scope.todoInput,
            done: false
        });
        $scope.todoInput = "";
    };

    $scope.remove = function () {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function (x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
}]);
myApp.controller('thirdController', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.image = [{
        src: 'img/angularpaigaldus.PNG'},
        {src: 'img/angularpaigaldus1.PNG'},
        {src: 'img/angularpaigaldus2.PNG'},
        {src: 'img/angularpaigaldus3.PNG'},
        {src: 'img/inter.PNG'},
        {src: 'img/inter2.PNG'},
        {src: 'img/inter3.PNG'},
        {src: 'img/inter4.PNG'},
        {src: 'img/Route.PNG'},
        {src: 'img/Route1.PNG'},
        {src: 'img/timeout.PNG'},
        {src: 'img/timeout1.PNG'}
];
    $scope.boxx = '';
    $scope.$watch('boxx', function(newValue, oldValue){
        $scope.newValue = newValue;
        $scope.oldValue = oldValue;
    });
    $scope.name = "Visitor";
    
    $timeout(function(){
        $scope.name = " your name is now Gandalf";
    }, 5000);
}]);

myApp.factory('game', function () {
    var tileNames = ['Messi', 'Zizou', 'Zidane', 'Henry', 'Rooney', 'Modric',
    'papa Ricardo', 'Vidic'];

    return new Game(tileNames);
});

myApp.controller('fourthController', function ($scope, game) {
    $scope.game = game;
});

myApp.directive('mgCard', function () {
    return {
        restrict: 'E',
        // instead of inlining the template string here, one could use templateUrl: 'mg-card.html'
        // and then either create a mg-card.html file with the content or add
        // <script type="text/ng-template" id="mg-card.html">.. template here.. </script> element to
        // index.html
        template: '<div class="container">' +
            '<div class="card" ng-class="{flipped: tile.flipped}">' +
            '<img class="front" ng-src="img/taust.jpg">' +
            '<img class="back" ng-src="img/{{tile.title}}.png">' +
            '</div>' +
            '</div>',
        scope: {
            tile: '='
        }
    }
});

myApp.controller('fifthController', ['$scope', function ($scope) {

}]);

myApp.controller('sixthController', ['$scope', function ($scope) {
    $scope.materjal = [{
            "Name": "Routing",
            "Description": 'I had couple errors with routing and couldn\'t find solution from online, so here\'s how you should mark href in your index.html file href="#!/".',
            "Link": "https://www.w3schools.com/angular/angular_routing.asp"
    },
        {
            "Name": "W3Schools",
            "Description": "Ofcourse, good old W3Schools, you can learn a lot from there.",
            "Link": "https://www.w3schools.com/angular/default.asp"
    },
        {
            "Name": "TutorialsPoint",
            "Description": "Some people suggest this website for AngularJS learning, it seems fine and informative, but I did not use it.",
            "Link": "https://www.tutorialspoint.com/angularjs/index.htm"
    },
        {
            "Name": "CodeAcademy",
            "Description": "Codeacademy offers a course for learning AngularJS.",
            "Link": "https://www.codecademy.com/learn/learn-angularjs"
    }
];
    $scope.materjal1 = [{
            "Name": "AngularJS Tutorial video",
            "Description": "1-hour tutorial, I have watched many of these, but this one I found the most educative.",
            "Link": "https://www.youtube.com/watch?v=0kmdjqgO9IY&t"
    },
        {
            "Name": "Another tutorial video",
            "Description": "Anything from Travesy Media is useful, you should really follow this channel!",
            "Link": "https://www.youtube.com/watch?v=KhzGSHNhnbI&t=910s"
    }];
}]);