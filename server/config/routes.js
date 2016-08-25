var tracer = require('tracer').colorConsole();
//require controllers and store in variable in order to call
var friends = require('../controllers/friends.js');
module.exports = function(app){

    //display all friends
    app.get('/friends', function(req, res){
        friends.index(req, res);
    });

    app.post('/friends', function(req, res){
        friends.create(req, res);
    });
    app.delete('/friends/:id', function(req, res){
        friends.delete(req, res);
    });

    app.delete('/friends', function(req, res){
      console.log('delete route for redirect after succesful delete');
        friends.index(req, res);
    });

};//END ROUTES EXPORT
