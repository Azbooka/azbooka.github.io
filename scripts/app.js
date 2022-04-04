'use strict';

let myApp = angular
    .module('azbookaApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/app.html',
            controller: 'MainCtrl'
        })

});