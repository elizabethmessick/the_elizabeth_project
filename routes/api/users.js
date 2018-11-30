var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/profile', usersCtrl.getProfile)
router.get('/:id', usersCtrl.getUser)


/*---------- Protected Routes ----------*/





module.exports = router;