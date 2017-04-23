angular.module('rbkSiteSystem', [
  'rbkSiteSystem.services',
  'rbkSiteSystem.auth',
  'rbkSiteSystem.update',
  'ngRoute'
])
.config(($routeProvider, $httpProvider) =>{
  $routeProvider
    .when('/', {
      templateUrl: 'app/home/home.html',
      controller: 'headerController'
    })
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'authController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'authController'
    })
    .when('/verify/:id', {
      templateUrl: 'app/auth/verify.html',
      controller: 'authController'
    })
    .when('/update/:id', {
      templateUrl: 'app/updateInfo/updateInfo.html',
      controller: 'updateController'
    })
    .when('/ChkMail', {
      templateUrl: 'app/updateInfo/ChkMail.html',
      controller: 'updateController'
    })
    .when('/admin', {
      templateUrl: 'app/admin/admin.html',
      controller: 'updateController'
    })
    .otherwise({
      redirectTo: '/'
  })
})



.controller('headerController', ($scope, $window) => {

    $scope.myVar = false;
    //console.log($scope.myVar)
    if( $window.localStorage['isLogin'] === 'false'){
        $scope.myVar = false;
    }else if($window.localStorage['isLogin'] === 'true'){
        $scope.myVar = true;
    }

    $scope.logout = ()=>{
        $window.localStorage.clear();
        $window.localStorage['isLogin'] = false;
        $scope.myVar = false;
        $window.location.reload();
    }
})
