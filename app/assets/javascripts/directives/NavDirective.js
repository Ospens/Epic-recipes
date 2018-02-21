angular
    .module('app')
    .directive('navBar', function navBar() {
        return {
            templateUrl: 'views/nav/nav.html',
            controller: 'NavCtrl'
        }
    })