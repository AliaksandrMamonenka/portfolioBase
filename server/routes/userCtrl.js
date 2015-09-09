var express = require('express');
var passport = require('passport');
var User = require('../models/userSchema');

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
                console.log(err);
            }

            passport.authenticate('local')(req, res, function () {
                res.json({ success: true })
            });
        });
	});

	router.post('/authorization', passport.authenticate('local'), function (req, res) {
		res.json({ success: true })
	});

	router.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});
	
	//edit user
	router.get('/edituserprofile/:id', function (req, res) {
		User.findOne({ _id: req.params.id }, function (err, data) {
			var user = data;

			user.firstname = req.body.firstname || null;
			user.lastname = req.body.lastname || null;
			user.jobtitle = req.body.jobtitle || null;
			user.primaryskill = req.body.primaryskill || null;
			user.skype = req.body.skype || null;
			user.phonenumber = req.body.phonenumber || null;
			
			if(user.address && user.address.country){
				user.address.country = req.body.address.country
			}
			
			if(user.address && user.address.city){
				user.address.country = req.body.address.city
			}
			
			user.save(function (err, data) {
				if (err) {
					throw err;
				}
				res.json(data);
			});
		});
	});
	
	//add new user to DB
	// router.post('/user', function (req, res) {
	// 	var user = new User();

	// 	user.firstname = req.body.firstname;
	// 	user.lastname = req.body.lastname;
	// 	user.jobtitle = req.body.jobtitle;
	// 	user.primaryskill = req.body.primaryskill;
	// 	user.email = req.body.email;
	// 	user.skype = req.body.skype;
	// 	user.phonenumber = req.body.phonenumber;
	// 	user.address.country = req.body.address.country;
	// 	user.address.city = req.body.address.city;

	// 	user.save(function (err, data) {
	// 		if (err) {
	// 			throw err;
	// 		}
	// 		res.json(data);
	// 	});
	// });
	
	//get all users
	// router.get('/user', function (req, res) {
	// 	User.find({}, function (err, data) {
	// 		res.json(data);
	// 	});
	// });
	
	//delete all users
	// router.delete('/user', function (req, res) {
	// 	User.remove({}, function (err) {
	// 		res.json({ result: err ? 'error' : 'ok' });
	// 	});
	// });
	
	//get specific user
	// router.get('/user/:id', function (req, res) {
	// 	User.findOne({ _id: req.params.id }, function (err, data) {
	// 		res.json(data);
	// 	});
	// });
	
	//delete specific user
	// router.delete('/user/:id', function (req, res) {
	// 	User.remove({ _id: req.params.id }, function (err) {
	// 		res.json({ result: err ? 'error' : 'ok' });
	// 	});
	// });
};