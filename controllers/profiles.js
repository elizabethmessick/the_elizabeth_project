var User = require('../models/user');

function createProfile(req, res) {
    User.findById(req.user._id).then(user => {
        user.profile = req.body.profile;
        user.save(() => {
            return res.json(user);
        });
    });
}

function getAllProfiles(req, res) {
    User.find({ profile: { $exists: true } }).exec().then(profiles => {
        return res.json(profiles);
    })
}


module.exports = {
    createProfile,
    getAllProfiles
};