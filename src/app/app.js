(function() {
    'use strict';

    // Declare app level module which depends on filters, and services
    angular
        .module('myApp', [
            'ngAnimate',
            'ngResource',
            //'ngMaterial',
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

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', 'jwtInterceptorProvider'];
    run.inject = [];

    function config($stateProvider, $urlRouterProvider, $httpProvider, jwtInterceptorProvider) {
        jwtInterceptorProvider.tokenGetter = function() {
            return localStorage.getItem('jwt');
        };
        //jwtInterceptorProvider.tokenGetter = ['store', function(store) {
        //    return store.get('jwt');
        //}];

        $httpProvider.interceptors.push('jwtInterceptor');

        $stateProvider
            .state('app', {
                views: {
                    header: {
                        templateUrl: '/dist/app/components/layout/views/header.html',
                        controller: 'HeaderController',
                        controllerAs: 'header'
                    },
                    sidenav: {
                        templateUrl: '/dist/app/components/layout/views/sidenav.html',
                        controller: 'SideNavController',
                        controllerAs: 'sidenav'
                    },
                    content: {
                        //templateUrl: '/dist/app/components/layout/views/content.html',
                        //controller: 'ContentController',
                        //controllerAs: 'content',
                        template: '<ui-view/>',
                        abstract: true
                    },
                    footer: {
                        templateUrl: '/dist/app/components/layout/views/footer.html',
                        controller: 'FooterController',
                        controllerAs: 'footer'
                    }
                }
            })
        ;

        if (!!localStorage.getItem('jwt')) {
            $stateProvider
                .state('app.home', {
                    url: '/',
                    templateUrl: '/dist/app/components/home/views/home.html',
                    controller: 'HomeController',
                    controllerAs: 'home'
                })
            ;
        } else {
            $stateProvider
                .state('app.home', {
                    url: '/',
                    templateUrl: '/dist/app/components/home/views/landing.html',
                    controller: 'LandingController',
                    controllerAs: 'landing'
                })
            ;
        }
        $urlRouterProvider.otherwise('/');
    }

    function run() {
    }
})();