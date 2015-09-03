var User = require('../models/user');

module.exports = function (router) {
	//add new user to DB
	router.post('/user', function (req, res) {
		var user = new User();

		user.firstname = req.body.firstname;
		user.lastname = req.body.lastname;
		user.jobtitle = req.body.jobtitle;
		user.primaryskill = req.body.primaryskill;
		user.email = req.body.email;
		user.skype = req.body.skype;
		user.phonenumber = req.body.phonenumber;
		user.address.country = req.body.address.country;
		user.address.city = req.body.address.city;

		user.save(function (err, data) {
			if (err) {
				throw err;
			}
			res.json(data);
		});
	});
	
	//get all users
	router.get('/user', function (req, res) {
		User.find({}, function (err, data) {
			res.json(data);
		});
	});
	
	//delete all users
	router.delete('/user', function (req, res) {
		User.remove({}, function (err) {
			res.json({ result: err ? 'error' : 'ok' });
		});
	});
	
	//get specific user
	router.get('/user/:id', function (req, res) {
		User.findOne({ _id: req.params.id }, function (err, data) {
			res.json(data);
		});
	});
	
	//delete specific user
	router.delete('/user/:id', function (req, res) {
		User.remove({ _id: req.params.id }, function (err) {
			res.json({ result: err ? 'error' : 'ok' });
		});
	});
	
	//edit user
	router.get('/user/:id', function (req, res) {
		User.findOne({ _id: req.params.id }, function (err, data) {
			var user = data;

			user.firstname = req.body.firstname;
			user.lastname = req.body.lastname;
			user.jobtitle = req.body.jobtitle;
			user.primaryskill = req.body.primaryskill;
			user.email = req.body.email;
			user.skype = req.body.skype;
			user.phonenumber = req.body.phonenumber;
			user.address.country = req.body.address.country;
			user.address.city = req.body.address.city;

			user.save(function (err, data) {
				if (err) {
					throw err;
				}
				res.json(data);
			});
		});
	});
};