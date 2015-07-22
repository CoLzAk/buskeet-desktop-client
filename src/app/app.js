(function() {
    'use strict';

    angular
        .module('myApp', [
            'ngAnimate',
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
        .constant('API', {
            PROTOCOL: 'http',
            URL: 'api.buskeet.dev',
            DEBUG: true
        })
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
                    // sidenav: {
                    //     templateUrl: '/dist/app/components/layout/views/sidenav.html',
                    //     controller: 'SideNavController',
                    //     controllerAs: 'sidenav'
                    // },
                    content: {
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
                    content: {
                        templateUrl: '/dist/app/components/home/views/home.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    }
                }
            })

            .state('app.login', {
                url: '/login',
                templateUrl: '/dist/app/components/user/views/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            })
            .state('app.register', {
                url: '/register',
                templateUrl: '/dist/app/components/user/views/register.html',
                controller: 'RegisterController',
                controllerAs: 'register'
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

        // $rootScope.$on("$stateChangeSuccess", function (event, currentState, previousState) {
        //     if (!UserFactory.isAuthenticated()) {
        //         $state.go('home');
        //     }
        // });
    }
})();
