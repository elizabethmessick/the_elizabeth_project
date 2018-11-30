var express = require('express');
var router = express.Router();
var profilesCtrl = require('../../controllers/profiles');

/*---------- Public Routes ----------*/

router.post('/', profilesCtrl.createProfile);
router.get('/all', profilesCtrl.getAllProfiles);
router.post('/delete', profilesCtrl.deleteProfile);

/*---------- Protected Routes ----------*/





module.exports = router;