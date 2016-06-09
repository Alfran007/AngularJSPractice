/**
 * Created by anubhavshrimal on 9/6/16.
 */

'use strict';

var app1 = angular.module("myApp",["test"]);

// strict dependencies injection for minified version
app1.controller("firstCtrl", ["$scope", "dataService", "PI", function ($scope, dataService, PI) {
    $scope.name = "abc";
    $scope.country = dataService.data[0];
    $scope.pi = PI;
}]);
