angular.module('rbkSiteSystem', [
  'rbkSiteSystem.services',
  'rbkSiteSystem.auth',
  'rbkSiteSystem.update',
  'ngRoute'
])
.config(($routeProvider, $httpProvider) =>{
  $routeProvider
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
    }).when('/home', {
      templateUrl: 'app/home/home.html',
      controller: 'auth'
    })

    .otherwise({
      redirectTo: '/home'
  })
})

.controller('headerController', ($scope, $window) => {
    $scope.myVar = false;

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
