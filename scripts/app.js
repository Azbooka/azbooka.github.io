'use strict';

/**
 * @ngdoc overview
 * @name azbookaApp
 * @description
 * # azbookaApp
 *
 * Main module of the application.
 */
var myApp = angular
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