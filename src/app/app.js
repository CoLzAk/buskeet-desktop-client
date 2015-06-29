'use strict';


// Declare app level module which depends on filters, and services
angular
    .module('myApp', [
        'ngAnimate',
        'ngResource',
        'ui.bootstrap',
        'ui-router',
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

config.$inject = [];
run.inject = [];

function config() {

}

function run() {

}