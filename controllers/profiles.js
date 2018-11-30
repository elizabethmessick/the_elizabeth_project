var User = require('../models/user');

function createProfile(req, res) {
    User.findById(req.body.userId).exec().then(user => {
        user.profile = { name: req.body.name, story: req.body.story };
        user.save();
        return res.json(user);
    })
}

module.exports = {
    createProfile
};