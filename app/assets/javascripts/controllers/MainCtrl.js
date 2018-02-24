angular
    .module('app')
    .controller('MainCtrl', function($scope, $rootScope, Auth, $state){

        
        // if (Auth._currentUser) {
            Auth.currentUser().then(function(user) {
            }, function(error) {
                console.log('asdasd');
            });
        // }
    })