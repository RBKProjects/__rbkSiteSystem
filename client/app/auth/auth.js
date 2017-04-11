angular.module('rbkSiteSystem.auth', [])

.controller('authController', function ($scope, User, $location, $window ) {
	

	$scope.signup = function () {
		User.signup($scope.user).then((data)=> {
	        $location.path('/signin');
    	    $window.location.reload();
		})
	}

	$scope.signin = function () {
		User.login($scope.userData).then((data)=>{
			console.log(data)
		})
	} 
});
