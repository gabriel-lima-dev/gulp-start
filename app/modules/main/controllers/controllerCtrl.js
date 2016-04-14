(function () {
  'use-strict';

  angular.module('app').angular.controller('controllerCtrl', ['$scope', function() {
    console.log($scope.$id);
  }]);
});
