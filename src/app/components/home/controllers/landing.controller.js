(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('LandingController', landingController)
    ;

    landingController.$inject = ['$scope'];

    function landingController($scope) {
        console.log('landing');
    }
})();