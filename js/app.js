var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/table', {
                    templateUrl: 'templates/table.html',
                    controller: 'RouteController'
                }).
                when('/map', {
                    templateUrl: 'templates/map.html',
                    controller: 'RouteController'
                }).
                when('/graph', {
                    templateUrl: 'templates/graph.html',
                    controller: 'RouteController'
                }).
                otherwise({
                    templateUrl: 'templates/upload.html',
                    controller: 'RouteController'
                });
        }]);
app.controller("RouteController", function($scope, $routeParams) {
        $scope.param = $routeParams.param;
    })

 