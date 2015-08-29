/* global __dirname */
/* global process */
var express = require('express');
var app = express();

//native node module for resolving paths
var path = require('path');

//connect DB
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

app.get('/usage', function (req, res) {
   res.render('usage', {});
});

app.get('/signup', function (req, res) {
   res.render('signup', {});
});



// accept POST request on the homepage
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});



var api = express.Router();
require('./routes/api')(api);
app.use('/api', api);

app.listen(port, function(){});

console.log("Server is running... PORT: " + port);