angular.module('rbkSiteSystem.update', [])
.controller('updateController', function ($scope, User, $location, $window, User) {

	$scope.updateCandidateInfo = function () {
		if ($window.localStorage['token']) {
            $scope.user.id = $window.localStorage['id'];
            User.update($scope.user).then((data) => {
            	console.log(data)
				User.sendNextStepEmail($window.localStorage['id']).then((resp)=>{
					console.log(resp)
				})
        	})
		} else {
            console.log("log in plz");
            $location.path('/signin/');
            $window.location.reload();
		}
	}



});
