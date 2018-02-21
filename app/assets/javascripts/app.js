angular
    .module('app', ['ui.router', 'templates', 'ui.bootstrap', 'Devise'])
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'html/_home.html',
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
            templateUrl: 'html/_sports.html',
            controller: 'MainCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'auth/login.html',
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
            templateUrl: 'auth/register.html',
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


    .controller('NavCtrl', function($scope, Auth) {
        $scope.signedIn = Auth.isAuthenticated;
        // $scope.logout = Auth.logout;
        if (Auth._currentUser) {
            Auth.currentUser().then(function(user) {
                // User was logged in, or Devise returned
                // previously authenticated session.
                console.log(Auth.isAuthenticated());
                console.log(user); // => {id: 1, ect: '...'}
            }, function(error) {
                console.log('asdasd');
            });
        }
        $scope.$on('devise:new-registration', function (e, user){
            $scope.user = user;
          });
        
          $scope.$on('devise:login', function (e, user){
            $scope.user = user;
          });
        
          $scope.$on('devise:logout', function (e, user){
            $scope.user = {};
          });
    })

    