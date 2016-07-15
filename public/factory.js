(function() {
  'use strict';


  angular.module('app', [])
  .factory('factory', factory)

  function factory ($http){
    return {
      get,
      post,
    }

    function get (params = '/') {
      return $http({
        method: 'GET',
        url: 'http://localhost:3000'
      })
    }
    function post (newUrl) {
      return $http.post( 'http://localhost:3000/', {url: newUrl})
    }


  }
}());
