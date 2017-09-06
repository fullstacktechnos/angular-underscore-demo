'use strict';
/**
 * @ngdoc function
 * @name angularUnderscoreExample.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularUnderscoreExample
 */
angular.module('angularUnderscoreExample')
  .controller('MainCtrl', ['$scope', '_',
  function ($scope, _) {

    console.log("main controller loaded");

    $scope.time = 3;
    $scope.data = [];

    _($scope.time).times(function(n){
      $scope.data.push((n+1) + ") Hello World !!")
    });

  }])
