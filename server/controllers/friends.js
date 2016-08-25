var tracer = require('tracer').colorConsole();

var mongoose = require('mongoose');
//Get the model and store in a variable for local ref
var Friend = mongoose.model('Friend');

module.exports = {
    index: function(req, res) {
        Friend.find({}, function(err, friends) {
            if (err) {
                var error = err.errors.name.message;
                res.json(error);
            } else {
                res.json(friends);
            }
        });
    }, //End index
    create: function(req, res) {
        // console.log('friends controller - create method');
        // console.log(req.body.first_name);
        var friend = new Friend({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age
        });
        friend.save({}, function(err) {
            if (err) {
                console.log(err);
                // var error = {error: err};
                res.json(err);
            } else {
                res.redirect('/friends');
            }
        });
    }, //End index
    delete: function(req, res) {
        console.log('friends controller - delete method');
        console.log(req.params.id);
        Friend.remove({
            _id: req.params.id
        }, function(err) {
            if (err) {
                console.log(err);
                // var error = {error: err};
                res.json(err);
            } else {
                res.redirect('/friends');
            }
        });
    }, //End index


};
