/* global __dirname */
/* global process */
// dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//need for deleting
// var methodOverride = require('method-override');
// app.use(methodOverride());

var app = express();
var port = process.env.PORT || 3000;



// view engine setup
app.set('views', path.resolve(__dirname, '../client','views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'bananaaa',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// console.log(path.resolve(__dirname, '../client'));
app.use(express.static(path.resolve(__dirname, '../client')));


// passport config
var User = require('./models/userSchema');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//connect to DB
mongoose.connect('mongodb://localhost/portfolio');

//define routing
var routing = express.Router();

require('./routes/userCtrl')(routing);
require('./routes/portfolioCtrl')(routing);
require('./routes/uploadImagesCtrl')(routing);

app.use('/', routing);
app.use('/usersettings', routing);
app.use('/portfoliosettings', routing);
app.use('/imagesettings', routing);

app.listen(port, function(){});
console.log("Server is running... PORT: " + port);