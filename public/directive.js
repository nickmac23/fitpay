(function() {
  'use strict';

  angular.module('app')
  .directive('home', directive)
  function directive () {

    return {
      templateUrl: '/dir.html',
      controller,
    }


    function controller ($scope, factory) {
      $scope.newIds = newIds,

      factory.get().then(data => {
        $scope.people = data.data.results
        $scope.links = data.data._links
      })

      function newIds(url){
        factory.post(url).then(data => {
          console.log(data);
          $scope.people = data.data.results
          $scope.links = data.data._links
        })
      }
    }
  }
}());
