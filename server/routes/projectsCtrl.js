var Projects = require('../models/projectsSchema');
var multer = require('multer');
var uploadImages = multer({ dest: 'client/uploads/images/' });

module.exports = function (router) { 
	
	//add new project	
	router.post('/addproject', uploadImages.array('file', 12), function (req, res, next) {
		var projects = new Projects();

		projects.customerid = req.user._id;
		projects.projectname = req.body.projectname;
		projects.projecturl = req.body.projecturl;
		projects.description = req.body.description;
		projects.technologies = req.body.technologies;
		projects.tools = req.body.tools;
		projects.images = req.files;

		projects.save(function (err, data) {
			if (err) {
				throw err;
			}
			res.json(data);
		});
	});
	
	//get all projects
	router.get('/projects', function (req, res) {
		Projects.find({}, function (err, data) {
			res.json(data);
		});
	});
	
	//get user projects
	router.get('/projects/:cid', function (req, res) {
		Projects.find({ customerid: req.params.cid }, function (err, data) {
			res.json(data);
		});
	}); 
	
	//delete specific project
	router.delete('/projects/:id', function (req, res) {
		Projects.remove({ _id: req.params.id }, function (err) {
			res.json({ result: err ? 'error' : 'ok' });
		});
	}); 
	 
	//edit project
	router.post('/projects/:id', function (req, res) {
		Projects.findOne({ _id: req.params.id }, function (err, data) {
			var projects = data;

			projects.projectname = req.body.projectname;
			projects.projecturl = req.body.projecturl;
			projects.description = req.body.description;
			projects.technologies = req.body.technologies;
			projects.tools = req.body.tools;

			projects.save(function (err, data) {
				if (err) {
					throw err;
				}
				res.json(data);
			});
		});
	}); 
	
	//edit project images
	router.post('/editprojectimages/', uploadImages.array('file', 12), function (req, res, next) {

		Projects.update({ _id: req.body.projectID }, { $set: { images: req.files } }, function () {
			res.json({
				succsess: "ok"
			});
		});
	});
};