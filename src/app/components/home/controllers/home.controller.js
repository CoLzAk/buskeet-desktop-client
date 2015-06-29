(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', homeController)
    ;

    homeController.$inject = [];

    function homeController() {
        console.log('home');
    }
})();