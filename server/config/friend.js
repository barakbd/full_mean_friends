var mongoose = require('mongoose');
mongoose.set('debug', true);
var fs = require('fs'); //included in express or node - reading file system
var path = require('path'); //included in express or node - reading file system

//Need to create data/db directories in ubuntu root in order for mongodb to run
// ******************** Connect to DB and automatically create DB *******************
mongoose.connect('mongodb://localhost/friends');
//Define path to models directory to read and require all models
var models_path = path.join(__dirname, './../models');

//Load all models
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>=0){
        require(models_path + '/' + file);
    }
});
