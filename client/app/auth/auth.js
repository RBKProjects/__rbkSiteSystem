angular.module('rbkSiteSystem.auth', [])

.controller('authController', function ($scope, User) {
	

	$scope.test = function () {
		//console.log($scope.user)
		User.signup($scope.user).then((data)=> {
			console.log(data)
		})
	}

	$scope.test1 = function () {
		User.login($scope.userData).then((data)=>{
			console.log(data)
		})
	} 
});
