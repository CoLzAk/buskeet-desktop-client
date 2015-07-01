(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', homeController)
    ;

    homeController.$inject = ['$scope'];

    function homeController($scope) {
        console.log('home');
    }
})();