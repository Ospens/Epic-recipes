angular
    .module('app')
    .controller('NavCtrl', function($scope, $rootScope, Auth){
        $scope.signedIn = Auth.isAuthenticated;
        $scope.logout = Auth.logout;
        
        if (Auth.isAuthenticated()) { 
            Auth.currentUser().then(function(user) {
                $rootScope.user = user;
                }, function(errorResponse) {
            });
        }

        $scope.$on('devise:new-registration', function (e, user){
            $rootScope.user = user;
        });
    
        $scope.$on('devise:login', function (e, user){
            $rootScope.user = user;
        });
    
        $scope.$on('devise:logout', function (e, user){
            $rootScope.user = undefined;
        });



        // if (Auth._currentUser) {
        //     Auth.currentUser().then(function(user) {
        //         // User was logged in, or Devise returned
        //         // previously authenticated session.
        //         console.log(Auth.isAuthenticated());
        //         console.log(user); // => {id: 1, ect: '...'}
        //     }, function(error) {
        //         console.log('asdasd');
        //     });
        // // }
        // $scope.$on('devise:new-registration', function (e, user){
        //     $scope.user = user;
        //   });
        
        //   $scope.$on('devise:login', function (e, user){
        //     $scope.user = user;
        //   });
        
        //   $scope.$on('devise:logout', function (e, user){
        //     $scope.user = {};
        //   });
    })