var mongoose = require('mongoose');
// ******************** Define a schema *******************
var FriendSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 3},
    last_name: {type: String, required: true, minlength: 3},
    age: {type: Number, required: true, min: 13, max: 120},
}, {timestamps: true});
// ******************** Register the as a model and give it a name *******************
var Friend = mongoose.model('Friend', FriendSchema);

//No need to export this file. The Model will be called from mongoose
