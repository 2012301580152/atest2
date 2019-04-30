'use strict';

var myTableApp = angular.module('myTable', ['ngTable']);
myTableApp.controller('myCtrl',['$scope',function($scope){
    $scope.users = [
        {name: "Moroni", age: 0},
        {name: "Enos", age: 0}
    ];

    setInterval(function(){
        $scope.users = [
            {name: "Moroni", age: Math.random()*100},
            {name: "Enos", age: Math.random()*100}
        ];
        $scope.$apply();
        console.log($scope.users[0]);
    },2000);
}]);