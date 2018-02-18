angular
    .module('app', ['ui.router', 'templates'])
    .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'html/_home.html',
            controller: 'MainCtrl'
        })

        .state('sports', {
            url: '/sports',
            templateUrl: 'html/_sports.html',
            controller: 'MainCtrl'
        })
        $urlRouterProvider.otherwise('home');
    }])