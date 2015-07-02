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
    run.inject = ['$rootScope', 'UserFactory', '$state'];

    function config($stateProvider, $urlRouterProvider, $httpProvider, jwtInterceptorProvider) {
        jwtInterceptorProvider.tokenGetter = function(UserFactory) {
            return UserFactory.get('token');
        };

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

            .state('home', {
                url: '/',
                views: {
                    home: {
                        templateUrl: '/dist/app/components/home/views/home.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/');
    }

    function run($rootScope, UserFactory, $state) {
        $rootScope._app = {
            user: {
                isAuthenticated: function() {
                    return UserFactory.isAuthenticated();
                }
            }
        };

        $rootScope.$on("$stateChangeSuccess", function (event, currentState, previousState) {
            if (!UserFactory.isAuthenticated()) {
                $state.go('home');
            }
        });
    }
})();