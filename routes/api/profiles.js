var express = require('express');
var router = express.Router();
var usersCtrl = require('../../controllers/profiles');

/*---------- Public Routes ----------*/

router.post('/', usersCtrl.createProfile);


/*---------- Protected Routes ----------*/





module.exports = router;