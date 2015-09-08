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
var methodOverride = require('method-override');

var app = express();
var port = process.env.PORT || 3000;

//connect to DB
mongoose.connect('mongodb://localhost/portfolio');

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
app.use(methodOverride());
app.use(express.static(path.resolve(__dirname, '../client')));

// passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

//define routing
var routing = express.Router();

require('./routes/indexCtrl')(routing);
require('./routes/userCtrl')(routing);
require('./routes/portfolioCtrl')(routing);
require('./routes/uploadImagesCtrl')(routing);

app.use('/', routing);
app.use('/userprofile', routing);
app.use('/portfolio', routing);
app.use('/photos', routing);
//photos/avatar
app.listen(port, function(){});

console.log("Server is running... PORT: " + port);