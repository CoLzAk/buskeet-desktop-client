(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('LoginController', loginController)
    ;

    loginController.$inject = [];

    function loginController() {
        var vm = this;

        vm.formData = {};

        vm.submit = function() {

        }
    }
})();
