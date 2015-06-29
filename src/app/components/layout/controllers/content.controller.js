(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ContentController', contentController)
    ;

    contentController.$inject = [];

    function contentController() {
        console.log('content');
    }
})();