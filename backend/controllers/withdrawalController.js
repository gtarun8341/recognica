const Withdrawal = require('../models/Withdrawal');

exports.createWithdrawal = async (req, res) => {
    const { userId, amount, password } = req.body;
    try {
        const withdrawal = new Withdrawal({ userId, amount, password });
        await withdrawal.save();
        res.status(201).json(withdrawal);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
