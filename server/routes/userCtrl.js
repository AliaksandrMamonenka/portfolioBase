var express = require('express');
var passport = require('passport');
var User = require('../models/userSchema');
var multer = require('multer');
var uploadAvatar = multer({ dest: 'client/uploads/avatar/' });

module.exports = function (router) {
	router.get('/', function (req, res) {
        res.render('layout', { user: req.user });
    });

    router.post('/registration', function (req, res) {
		var user = new User();
		user.username = req.body.username,
		user.email = req.body.email;

		User.register(user, req.body.password, function (err, user) {
            if (err) {
				err.success = false;
				return res.json(err);
            }
			passport.authenticate('local')(req, res, function () {
				res.json({ userId: req.user._id, success: true });
			});

        });
	});

	router.post('/authorization', passport.authenticate('local'), function (req, res) {
		// console.log(req.user._id );
		res.json({ userId: req.user._id });
	});

	router.get('/logout', function (req, res) {
		req.logout();
		res.json({ success: "ok" });
	});
	
	
	
	//get all users
	router.get('/userprofile', function (req, res) {
		User.find({}, function (err, data) {
			res.json(data);
		});
	});
	
	//get specific user
	router.get('/userprofile/:id', function (req, res) {
		User.findOne({ _id: req.params.id }, function (err, data) {
			res.json(data);
		});
	});
	
	//edit user
	router.post('/userprofile/:id', function (req, res) {
		User.findOne({ _id: req.params.id }, function (err, data) {
			var user = data;

			user.avtarurl = req.body.avtarurl;
			user.firstname = req.body.firstname;
			user.lastname = req.body.lastname;
			user.jobtitle = req.body.jobtitle;
			user.primaryskill = req.body.primaryskill;
			user.skype = req.body.skype;
			user.phonenumber = req.body.phonenumber;
			if (req.body.address) {
				user.address.country = req.body.address.country;
				user.address.city = req.body.address.city;
			}

			user.save(function (err, data) {
				if (err) {
					throw err;
				}
				res.json(data);
			});
		});
	});
	
	//avatar flow
	router.post('/useravatar/', uploadAvatar.single('avatar'), function (req, res, next) {
		User.update({ _id: req.user._id }, { $set: { avtarurl: req.file.filename } }, function () {
			res.json({
				destination: req.file.destination,
				filename: req.file.filename,
				mimetype: req.file.mimetype
			});
		});
	});

};