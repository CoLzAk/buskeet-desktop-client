(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ContentController', contentController)
    ;

    contentController.$inject = ['$scope', '$mdUtil'];

    function contentController($scope, $mdUtil) {
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
        console.log('content');
    }
})();