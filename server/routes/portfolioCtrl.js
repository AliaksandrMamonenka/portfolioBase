var Portfolio = require('../models/portfolio');

module.exports = function (router) {
	//add new portfolio to DB
	router.post('/portfolio', function (req, res) {
		var portfolio = new Portfolio();

		portfolio.projectname = req.body.projectname;
		portfolio.projecturl = req.body.projecturl;
		portfolio.description = req.body.description;
		portfolio.technologies = req.body.technologies;
		portfolio.tools = req.body.tools;
		
		portfolio.save(function (err, data) {
			if (err) {
				throw err;
			}
			res.json(data);
		});
	});
	
	
	//get all portfolios
	router.get('/portfolio', function (req, res) {
		Portfolio.find({}, function (err, data) {
			res.json(data);
		});
	});
	
	//delete all portfolios
	router.delete('/portfolio', function (req, res) {
		Portfolio.remove({}, function (err) {
			res.json({ result: err ? 'error' : 'ok' });
		});
	});
	
	//get specific portfolio
	router.get('/portfolio/:id', function (req, res) {
		Portfolio.findOne({ _id: req.params.id }, function (err, data) {
			res.json(data);
		});
	});
	
	//delete specific portfolio
	router.delete('/portfolio/:id', function (req, res) {
		Portfolio.remove({ _id: req.params.id }, function (err) {
			res.json({ result: err ? 'error' : 'ok' });
		});
	});
	
	//edit portfolio
	router.get('/portfolio/:id', function (req, res) {
		Portfolio.findOne({ _id: req.params.id }, function (err, data) {
			var portfolio = data;

			portfolio.firstname = req.body.firstname;
			portfolio.lastname = req.body.lastname;
			portfolio.jobtitle = req.body.jobtitle;
			portfolio.primaryskill = req.body.primaryskill;
			portfolio.email = req.body.email;
			portfolio.skype = req.body.skype;
			portfolio.phonenumber = req.body.phonenumber;
			portfolio.address.country = req.body.address.country;
			portfolio.address.city = req.body.address.city;

			portfolio.save(function (err, data) {
				if (err) {
					throw err;
				}
				res.json(data);
			});
		});
	});
};