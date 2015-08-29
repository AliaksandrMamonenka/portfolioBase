var Customer = require('../models/customer');

module.exports = function (router) {
	//add new customer to DB
	router.post('/customer', function (req, res) {
		var customer = new Customer();

		customer.firstname = req.body.firstname;
		customer.lastname = req.body.lastname;
		customer.jobtitle = req.body.jobtitle;
		customer.primaryskill = req.body.primaryskill;
		customer.email = req.body.email;
		customer.skype = req.body.skype;
		customer.phonenumber = req.body.phonenumber;
		customer.address.country = req.body.address.country;
		customer.address.city = req.body.address.city;

		customer.save(function (err, data) {
			if (err) {
				throw err;
			}
			res.json(data);
		});
	});
	
	//get all customers
	router.get('/customer', function (req, res) {
		Customer.find({}, function (err, data) {
			res.json(data);
		});
	});
	
	//delete all customers
	router.delete('/customer', function (req, res) {
		Customer.remove({}, function (err) {
			res.json({ result: err ? 'error' : 'ok' });
		});
	});
	
	//get specific customer
	router.get('/customer/:id', function (req, res) {
		Customer.findOne({ _id: req.params.id }, function (err, data) {
			res.json(data);
		});
	});
	
	//delete specific customer
	router.delete('/customer/:id', function (req, res) {
		Customer.remove({ _id: req.params.id }, function (err) {
			res.json({ result: err ? 'error' : 'ok' });
		});
	});
	
	//edit customer
	router.get('/customer/:id', function (req, res) {
		Customer.findOne({ _id: req.params.id }, function (err, data) {
			var customer = data;

			customer.firstname = req.body.firstname;
			customer.lastname = req.body.lastname;
			customer.jobtitle = req.body.jobtitle;
			customer.primaryskill = req.body.primaryskill;
			customer.email = req.body.email;
			customer.skype = req.body.skype;
			customer.phonenumber = req.body.phonenumber;
			customer.address.country = req.body.address.country;
			customer.address.city = req.body.address.city;

			customer.save(function (err, data) {
				if (err) {
					throw err;
				}
				res.json(data);
			});
		});
	});
};