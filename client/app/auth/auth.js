angular.module('rbkSiteSystem.auth', [])
.controller('authController', function($scope, User, $location, $window) {
  $scope.master = {};
  $scope.Lvar = $window.localStorage['isLogin']
  $scope.signup = (user) => {
    User.signup(user).then((data) => {
      if (data.data.isUserExist) {
          console.log(data.data.isUserExist)
        $('#msgWrongPass').remove();
        $('#msgEmail').append('<div id="msgWrongPass" class="alert alert-danger error-msg">email already registered</div>')
      } else {
        $scope.signin({email: user.email, password: user.password})
      }
    })
  }

  $scope.signin = (user) => {
    User.login(user).then((data) => {
      if (data.data.isValidPass === false || data.data.isUser === false) {
        $('#msgWrongPass').remove();
        $('#loginMsg').append('<div id="msgWrongPass" class="alert alert-danger error-msg">Invalid Information </div>')
        //alert("wrong password")
      } else {
        $window.localStorage['isLogin'] = true;
        $window.localStorage['token'] = data.data.token;
        $window.localStorage['userName']
        $window.localStorage['id'] = data.data.id;

        $location.path('/ChkMail');
        $window.location.reload();
        // User.isEmailVerified(data.data).then((resp) => {
        //   if (resp.data) {
        //     $location.path('/update/' + data.data['id']);
        //     $window.location.reload();
        //   } else {
        //     $location.path('/verify/' + data.data['id']);
        //     $window.location.reload();
        //   }
        // })
      }
    })
  }

  $scope.sendNextSteps = () => {

  }

  $scope.verify = (code) => {
    User.verifyUser({id: $window.localStorage['id'], code: code}).then((resp) => {
      if (resp.data.isEmailVerified) {
        $location.path('/update/:' + $window.localStorage['id']);
        $window.location.reload();

      }
    })
  }

  $scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.userData = angular.copy($scope.master);
  };

});
