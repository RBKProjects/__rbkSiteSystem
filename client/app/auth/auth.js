angular.module('rbkSiteSystem.auth', [])

.controller('authController', function ($scope, User, $location, $window ) {


	$scope.signup = function (user) {
		User.signup(user)
		.then((data)=> {
			$scope.signin({email : user.email, password : user.password })
		})
	}

	//console.log(data.data['_id'])

	$scope.signin = function (user) {
		User.login(user).then((data)=>{
			console.log(data.data.id)
			User.isEmailVerified(data.data).then((resp)=>{
				if (resp.data){
					$location.path('/update/:'+ data.data['id']);
					$window.location.reload();
				}else{
					$location.path('/verify/:'+ data.data['id']);
					$window.location.reload();
				}
			})
		})
	}
});
