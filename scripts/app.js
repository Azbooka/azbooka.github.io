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
        // главная, состояние и вид ========================================
        .state('home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })

});