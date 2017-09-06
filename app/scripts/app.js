'use strict';

/**
 * @ngdoc overview
 * @name angularUnderscoreExample
 * @description
 * # angularUnderscoreExample
 *
 * Main module of the application.
 */

var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);

angular
  .module('angularUnderscoreExample', [
    'ngRoute',
    'underscore'
  ])
  .config(['$routeProvider',
    function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
