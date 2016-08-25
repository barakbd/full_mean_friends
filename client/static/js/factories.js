// create the friendFactory and inject $http
fullMeanModule.factory('friendsFactory', function($http) {
    var factory = {};
    var friends = [];

    //Restful syntax: index = get all that object
    factory.index = function(callback) {
        $http.get('/friends').then(function(response) {
            // console.log('friendsFactory - index', response);
            callback(response.data);
        });
    };

    // Restful syntax: create = add one to that object
    factory.create = function(newFriend, callback) {
        $http.post('/friends', newFriend).then(function(response) {
            console.log('friendsFactory create method');
            // console.log(response);
            if('errors' in response.data){
                console.log('error in friendsFactory create method');
                callback(response);
            }else{
              console.log('success in friendsFactory create method');
                friends=response.data;
                callback(friends);
            }
        });
    };

    factory.delete = function(id, callback) {
        $http.delete('/friends/'+id).then(function(response){
            // console.log('friendsFactory delete method');
            if('errors' in response.data){
                console.log('error in friendsFactory delete method');
                callback(response);
            }else{
                friends=response.data;
                callback(friends);
            }
        });
    };

    //Return factory to make all methods available
    return factory;
});
