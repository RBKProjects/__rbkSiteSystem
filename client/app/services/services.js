angular.module('rbkSiteSystem.services',[])
.factory('User', ($http, $window)=> {

	let login = (userData)=> {
		return $http({
			method : 'POST',
			url : '/api/user/signin',
			data : userData
		}).then((resp)=> {
			console.log(resp)
			return resp;
		})
	}

	let signup = (userData)=> {
		return $http({
			method : 'POST',
			url : '/api/user/signup',
			data : { user : userData }
		}).then((resp)=> {
			return resp;
		})
	}

	let update = (userData)=> {
		return $http({
			method : 'PUT',
			url : '/api/user/update/' + userData.id,
			data : userData
		}).then((resp)=> {
			return resp;
		})
	}

	let isEmailVerified = (userData)=> {
		return $http({
			method : 'POST',
			url : '/api/user/verify/isEmailVerified',
			data : userData
		}).then((resp)=> {
			return resp;
		})
	}

	let sendNextStepEmail = (id)=>{
		return $http({
			method : 'GET',
			url : '/api/user/nextSteps/' + id
		}).then((resp)=> {
			return resp;
		})
	}

	let verifyUser =  (userData)=> {
		return $http({
			method : 'POST',
			url : '/api/user/verify/' + userData.id,
			data : { emailCode : userData.code}
		}).then((resp)=> {
			return resp;
		})
	}

	let sendCodeAgain = (id)=>{
		return $http({
			method : 'POST',
			url : '/api/user/sendCodeAgain/' + id
		}).then((resp)=>{
			return resp;
		})
	}
	let getAllUser = ()=>{
		return $http({
			method : 'GET',
			url : '/api/user/getAll' 
		}).then((resp)=>{
			return resp;
		})
	}

	return {
		sendCodeAgain : sendCodeAgain,
		login : login,
		signup : signup,
		update : update,
		isEmailVerified : isEmailVerified,
		verifyUser : verifyUser,
		sendNextStepEmail : sendNextStepEmail,
		getAllUser : getAllUser
	}
})
