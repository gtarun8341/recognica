const Recharge = require('../models/Recharge');

exports.createRecharge = async (req, res) => {
    const { userId, amount } = req.body;
    try {
        const recharge = new Recharge({ userId, amount });
        await recharge.save();
        res.status(201).json(recharge);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
