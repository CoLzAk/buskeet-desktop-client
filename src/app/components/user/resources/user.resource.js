(function() {

	'use strict';

    angular
        .module('myApp')
        .factory('UserResource', userResource);

    userResource.$inject = ['$resource', 'ParametersService'];

    function userResource($resource, ParametersService) {
        return $resource(ParametersService.getApiUrl() + '/users/:id/:action', { id: '@_id', action: '@_action' }, {
            create: {
                method: 'POST'
            }
        });
    }
})();
