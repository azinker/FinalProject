angular.module('storefrontApp.moltin', [])
  .factory('MoltinAuth', function($q) {
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: 'mipDNUidZJx1iEOjibmySAjOU3MF5XRwPYTPkJt4'});
    moltin.Authenticate(function() {
      deferred.resolve(moltin);
    });

    return deferred.promise;
  });
