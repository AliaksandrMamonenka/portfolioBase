var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
	avtarurl: String,
    username: String,
    password: String,
	firstname: String,
	lastname: String,
	jobtitle: String,
	primaryskill: String,
	email: String,
	skype: String,
	phonenumber: String,
	address: {
		country: String,
		city: String
	}
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
