//node, npm, tracer and nodemon are installed globally
//nodemon runs node continuously and restarts server when save changes occur

//Require dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var tracer = require('tracer').colorConsole();
//Instantiate an express object as app
var app = express();
//Server is only sending jsons so we only need body-parser json method
//If we used ejs to server html pages we would need also app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//Define static folder location using path
app.use(express.static(path.join(__dirname, '/client/static')));
//require the config file to connect to all models and the DB
require('./server/config/friend.js');
//require routes and store in variable in order to call and pass in express app
var routes = require('./server/config/routes.js');
//call routes with app
routes(app);

//Start server
app.listen(8000, function(){
    console.log('listening on port 8000');
});
