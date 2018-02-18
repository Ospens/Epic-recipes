angular
    .module('app', ['ui.router', 'templates'])
    .config(['$stateProvider', '$locationProvider',
    function($stateProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'html/_home.html',
            controller: 'MainCtrl'
        })

        .state('sports', {
            url: '/sports',
            templateUrl: 'html/_sports.html',
            controller: 'MainCtrl'
        })
        // $locationProvider.otherwise('home');
    }]);