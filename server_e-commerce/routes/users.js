var express 		        = require('express'),
	router 			        = express.Router(),
	controller 				= require('../controllers/users');

router.get('/', controller.find);
router.post('/register', controller.register);
router.post('/login',controller.login);
router.post('/sendEmail', controller.email)
module.exports = router