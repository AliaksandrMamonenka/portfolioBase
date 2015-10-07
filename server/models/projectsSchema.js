var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var projectsSchema = mongoose.Schema({
	images: Array,
	customerid: String,
	projectname: String,
	projecturl: String,
	description: String,
	technologies: String,
	tools: String
});

module.exports = mongoose.model('Projects', projectsSchema);