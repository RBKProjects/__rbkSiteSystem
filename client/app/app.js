angular.module('rbkSiteSystem', [
  'rbkSiteSystem.services',
  'rbkSiteSystem.auth',
  'rbkSiteSystem.update',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
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
    // .otherwise({
    //   redirectTo: '/signin'
    // });
})
