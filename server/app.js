/* global __dirname */
/* global process */
var express = require('express');
var app = express();

//native node module for resolving paths
var path = require('path');

//connect to DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/portfolio');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

//need for deleting
var methodOverride = require('method-override');
app.use(methodOverride());

var port = process.env.PORT || 3000;

app.set('view engine', 'jade');

//path to views
app.set('views', path.resolve(__dirname, '../client','views'));

app.use(express.static(path.resolve(__dirname, '../client')));

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
   res.render('index', {});
});

//define routing
var routing = express.Router();

require('./routes/userCtrl')(routing);
require('./routes/portfolioCtrl')(routing);
require('./routes/uploadImagesCtrl')(routing);

app.use('/userprofile', routing);
app.use('/portfolio', routing);
app.use('/photos', routing);
//photos/avatar
app.listen(port, function(){});

console.log("Server is running... PORT: " + port);