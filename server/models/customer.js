var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var customerSchema = mongoose.Schema({
	firstname:  String,
	lastname:  String,
	jobtitle:  String,
	primaryskill:  String,
	email:  String,
	skype:  String,
	phonenumber:  String,
	address:{
		country:  String,
		city:  String	
	}
});

module.exports = mongoose.model('Customer', customerSchema);
