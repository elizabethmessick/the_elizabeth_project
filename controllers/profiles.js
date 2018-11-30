var User = require('../models/user');

function createProfile(req, res) {
    User.findById(req.body.userId).exec().then(user => {
        user.profile = { name: req.body.profile.name, story: req.body.profile.story };
        user.save();
        return res.json(user);
    })
}

function getAllProfiles(req, res) {
    User.find({ profile: { $exists: true } }).exec().then(profiles => {
        console.log(profiles)
        return res.json(profiles);
    })
}

function deleteProfile(req, res) {
    const { userId } = req.body;
    User.findOne({ _id: userId }).exec().then(user => {
        user.profile = null
        user.save()
        return res.json(user);
    })
}

module.exports = {
    createProfile,
    getAllProfiles,
    deleteProfile
};