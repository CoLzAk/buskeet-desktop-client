(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('ParametersService', parametersService);

    parametersService.$inject = ['API'];

    function parametersService(API) {
        return {
            getApiUrl: function() {
                return ((typeof API.PROTOCOL === "undefined") ? '//' : API.PROTOCOL +'://') +
                    API.URL +
                    (this.getApiDebug() ? '/app_dev.php' : '');
            },
            getApiDebug: function() {
                return API.DEBUG;
            }
        };
    }
})();
