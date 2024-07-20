const mongoose = require('mongoose');

const WithdrawalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Withdrawal', WithdrawalSchema);