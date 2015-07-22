(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('RegisterController', registerController)
    ;

    registerController.$inject = ['UserResource'];

    function registerController(UserResource) {
        var vm = this;

        vm.formData = {};
        vm.genderTypes = [
            {
                label: 'un homme',
                value: 'MALE'
            },
            {
                label: 'une femme',
                value: 'FEMALE'
            }
        ];

        vm.submit = function() {
            UserResource
                .create(vm.formData,
                function(data) {
                    console.log(data);
                })
            ;

            console.log(vm.formData);
        }
    }
})();
