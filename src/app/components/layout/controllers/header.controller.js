(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('HeaderController', headerController)
    ;

    headerController.$inject = [];

    function headerController() {
        console.log('header');
    }
})();