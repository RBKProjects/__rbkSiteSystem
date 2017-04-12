angular.module('rbkSiteSystem.auth', [])

.controller('authController', function ($scope, User, $location, $window ) {


	$scope.signup = function (user) {
		User.signup(user)
		.then((data)=> {
			$scope.signin({email : user.email, password : user.password })
		})
	}

	//console.log(data.data['_id'])
	//$location.path('/verify/:'+ data.data['_id']);
	//$window.location.reload();

	$scope.signin = function (user) {
		console.log(user)
		User.login(user).then((data)=>{
			//console.log(data.data.userId)
			User.isEmailVerified(data.data.userId).then((resp)=>{

			})
		})
	}
});
