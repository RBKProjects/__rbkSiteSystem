angular.module('rbkSiteSystem.services',[])
.factory('User', ($http, $window)=> {

	let login = function (userData) {
		return $http({
			method : 'POST',
			url : '/api/user/signin',
			data : userData
		}).then((resp)=> {
			return resp;
		})
	}	

	let signup = function (userData) {
		return $http({
			method : 'POST',
			url : '/api/user/signup',
			data : userData
		}).then((resp)=> {
			return resp;
		})
	}


	let update = function (userData) {
		return $http({
			method : 'PUT',
			url : '/api/user/update/:' + userData.id,
			data : userData
		}).then((resp)=> {
			return resp;
		})
	}

	return {
		login : login,
		signup : signup,
		update : update
	}
})