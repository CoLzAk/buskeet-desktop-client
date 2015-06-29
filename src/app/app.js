(function() {
    'use strict';

    // Declare app level module which depends on filters, and services
    angular
        .module('myApp', [
            //'ngAnimate',
            'ngResource',
            'ui.bootstrap',
            'ui.router',
            'angular-jwt',
            'http-auth-interceptor',
            'angular-storage',
            'ngMap',
            'angularMoment',
            'pascalprecht.translate'
        ])
        .config(config)
        .run(run)
    ;

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    run.inject = [];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                views: {
                    header: {
                        templateUrl: '/dist/app/components/layout/views/header.html',
                        controller: 'HeaderController',
                        controllerAs: 'header'
                    },
                    content: {
                        templateUrl: '/dist/app/components/layout/views/content.html',
                        controller: 'ContentController',
                        controllerAs: 'content',
                        abstract: true
                    },
                    footer: {
                        templateUrl: '/dist/app/components/layout/views/footer.html',
                        controller: 'FooterController',
                        controllerAs: 'footer'
                    }
                }
            })

            .state('app.home', {
                url: '/',
                templateUrl: '/dist/app/components/home/views/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
        ;

        $urlRouterProvider.otherwise('/');
    }

    function run() {
    }
})();