angular
    .module('app', ['ui.router', 'templates', 'ui.bootstrap', 'Devise'])
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/_home.html',
            controller: 'MainCtrl',
            onEnter: ['$state', 'Auth', function($state, Auth) {
                if (Auth.isAuthenticated()) {
                    Auth.currentUser().then(function (){
                    $state.go('home');
                    })
                }
            }]
        })
        .state('sports', {
            url: '/sports',
            templateUrl: 'views/_sports.html',
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
        $urlRouterProvider.otherwise('/');
    }])
    
    .controller('AlertDemoCtrl', function($scope) {
        $scope.alerts = [{
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.'
            }
        ];
    
        $scope.addAlert = function() {
            $scope.alerts.push({
                msg: 'Another alert!'
            });
        };
    
        

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
    })

    