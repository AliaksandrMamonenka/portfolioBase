var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var portfolioSchema = mongoose.Schema({
	projectname:  String,
	projecturl:  String,
	description:  String,
	technologies:  String,
	tools:  String
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
