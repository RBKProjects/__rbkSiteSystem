angular.module('rbkSiteSystem.firstGate', [])
.controller('firstGate', function($scope, User, $location, $window) {
  $scope.Users = [];
  $scope.display = () => {
    User.getAllUser().then((data) => {
      $scope.Users = data.data;
    })
  }

  $scope.display();  

});
