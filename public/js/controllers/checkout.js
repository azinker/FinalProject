'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
  .controller('CheckoutCtrl', function ($scope, $rootScope, $location, moltin, cart, options, fields) {
    $scope.data = {bill: {}, ship: {}, ship_bill: 0, notes: '', shipping: '', gateway: ''}
    $scope.cart = cart;
    $scope.options = options;
    $scope.fields = fields;
    $scope.customer =
    console.log($scope.customer);
    $scope.createOrder = function() {
      moltin.Cart.Order({
        customer: $scope.customer, //guest customer for now
        shipping: $scope.data.shipping,
        gateway: $scope.data.gateway,
        bill_to: $scope.data.bill,
        ship_to: $scope.data.ship_bill ? 'bill_to' : $scope.data.ship
      }, function(response) {
        $rootScope.order = response;
        $rootScope.$apply(function() {
          $location.path('/payment');
        });
      })
    }

  });
