const Profile = require('../models/Profile');

exports.createProfile = async (req, res) => {
    const { userId, exchange, walletAddress } = req.body;
    try {
        const profile = new Profile({ userId, exchange, walletAddress });
        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    const { userId, exchange, walletAddress } = req.body;
    try {
        const profile = await Profile.findOneAndUpdate(
            { userId },
            { exchange, walletAddress },
            { new: true }
        );
        res.status(200).json(profile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
