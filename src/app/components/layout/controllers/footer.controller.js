(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('FooterController', footerController)
    ;

    footerController.$inject = [];

    function footerController() {
        console.log('footer');
    }
})();