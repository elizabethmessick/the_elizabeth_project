var express = require('express');
var router = express.Router();
var profilesCtrl = require('../../controllers/profiles');

/*---------- Public Routes ----------*/

router.post('/', profilesCtrl.createProfile);
router.get('/all', profilesCtrl.getAllProfiles);

/*---------- Protected Routes ----------*/





module.exports = router;