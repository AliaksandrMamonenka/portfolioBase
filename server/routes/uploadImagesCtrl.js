// var User = require('../models/user');
var multer = require('multer');
var uploadAvatar = multer({ dest: 'client/uploads/avatar/' });
var uploadImages = multer({ dest: 'client/uploads/images/' });



module.exports = function (router) {

	router.post('/avatar', uploadAvatar.single('avatar'), function (req, res, next) {

		res.json({
			destination: req.file.destination,
			filename: req.file.filename,
			mimetype: req.file.mimetype
		});
	})
};

