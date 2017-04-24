angular.module('rbkSiteSystem', [
  'rbkSiteSystem.services',
  'rbkSiteSystem.auth',
  'rbkSiteSystem.update',
  'ngRoute'
])
.config(($routeProvider, $httpProvider) =>{
  $routeProvider
    .when('/', {
      templateUrl: 'app/auth/signup.html',
      controller: 'authController'
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
})



.controller('headerController', ($scope, $window, $location) => {
    $scope.myVar = false;
    $window.localStorage['path'] = '/'
    //console.log(myVar)

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

    $scope.savePath = ()=>{
        $scope.logout();
      if($window.localStorage['path'] !== $location.path() && $location.path() !== '/'){
        $window.localStorage['path'] = $location.path()
      }
    }

    $scope.complete = ()=>{
      $location.path($window.localStorage['path']);
    }
})
