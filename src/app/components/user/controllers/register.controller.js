(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('RegisterController', registerController)
    ;

    registerController.$inject = [];

    function registerController() {
        var vm = this;

        vm.formData = {};

        vm.submit = function() {

        }
    }
})();
