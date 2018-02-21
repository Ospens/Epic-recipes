angular
    .module('app')
    .controller('MainCtrl', function($scope, $rootScope, Auth){
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
    })