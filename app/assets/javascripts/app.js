angular
    .module('app', ['ui.router', 'templates', 'ui.bootstrap'])
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
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
        .state('registration', {
            url: '/registration',
            templateUrl: 'html/registration.html',
            controller: 'MainCtrl'
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

    .controller('Registration', function($scope) {
        
        $scope.test = function() {
            // console.log($scope.data.login);            
            // console.log($scope.data.pass);
        }

        // console.log($scope);
    })