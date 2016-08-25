fullMeanModule.controller('friendsController', function($scope, $route, friendsFactory, $routeParams) {
    $scope.friends = [];
    $scope.errors = [];
    $scope.route = $route;
    $scope.newFriendValidations = {
            minLength: 3,
            maxLength: 20,
            minAge: 13,
            maxAge: 120
        };
        // use a callback to avoid asynchrounous handling
    $scope.friends = friendsFactory.index(function(data) {
        $scope.friends = data;
    });
    // console.log('friendsController called, friends array - ', $scope.friends);

    $scope.addFriend = function() {
        friendsFactory.create($scope.newFriend, function(response) {
          console.log('response from friendsFactory to friendsController create method ');
          console.log(response);
            if ('data' in response) {
              //Can't check for 'error' - if successesful, returning friends and not full reponse
                console.log('error in friendsController - addFriend method');
                console.log(response);
                $scope.errors = response;
            } else {
                $scope.friends = response;
            }
        });
        $scope.newFriend = {};
    };

    $scope.deleteFriend = function(id) {
        // console.log(id);
        friendsFactory.delete(id, function(response){
            if ('data' in response) {
                // console.log('error in friendsController - deleteFriend method');
                console.log(response);
                $scope.errors = response;
            } else {
                $scope.friends = response;
            }
        });
    };

}); // END friendsController
