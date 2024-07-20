const express = require('express');
const { createWithdrawal } = require('../controllers/withdrawalController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createWithdrawal);

module.exports = router;
