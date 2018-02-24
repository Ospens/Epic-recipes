angular
    .module('app', ['ui.router', 'templates', 'ui.bootstrap', 'Devise'])
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('');
        
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/_home.html',
            controller: 'MainCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/auth/login.html',
            controller: 'AuthCtrl',
            onEnter: ['$state', 'Auth', function($state, Auth) {
                if (Auth.isAuthenticated()) {
                    Auth.currentUser().then(function (){
                    $state.go('home');
                    })
                }
            }]
        })
        .state('register', {
            url: '/register',
            templateUrl: 'views/auth/register.html',
            controller: 'AuthCtrl',
            onEnter: ['$state', 'Auth', function($state, Auth) {
                if (Auth.isAuthenticated()) {
                    Auth.currentUser().then(function (){
                    $state.go('home');
                    })
                }
            }]
        })
        $locationProvider.html5Mode({
            enabled:true,
            requireBase: false
          });
        $urlRouterProvider.otherwise('/');
    }])

    