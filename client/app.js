(functon() {
  var app = angular.module('app', ['ngRoute']);
  app.config(function($routeProvider) {
    $routeProvider
    .when('/index', {
      templateUrl: 'partials/login.html'
    })
  });

}())