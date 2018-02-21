function MainCtrl() {

}

angular
    .module('app')
    .controller('AuthCtrl', function($scope, $rootScope, $state, Auth) {
        var config = {headers: {'X-HTTP-Method-Override': 'POST'}}

        $scope.register = function() {
            Auth.register($scope.user, config).then(function(user) {
                $rootScope.user = user;
                console.log('success');                
                $state.go('home');
            }, function(errorResponse) {
                console.log('error');
            });
        };

        $scope.login = function() {
            Auth.login($scope.user, config).then(function(user) {
                $rootScope.user = user;
                console.log('success');                
                $state.go('home');
            }, function(errorResponse) {
                console.log('error');
            });
        };
    })