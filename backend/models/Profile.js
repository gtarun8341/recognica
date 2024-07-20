const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    exchange: { type: String, required: true },
    walletAddress: { type: String, required: true }
});

module.exports = mongoose.model('Profile', ProfileSchema);
