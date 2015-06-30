(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('SideNavController', sideNavController)
    ;

    sideNavController.$inject = ['$scope', '$mdUtil'];

    function sideNavController($scope, $mdUtil) {
        $scope.toggleLeft = buildToggler('left');
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildToggler(navID) {
            var debounceFn =  $mdUtil.debounce(function(){
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            },300);
            return debounceFn;
        }

        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
        console.log('sideNav');
    }
})();