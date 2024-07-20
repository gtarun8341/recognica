const express = require('express');
const { createRecharge } = require('../controllers/rechargeController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createRecharge);

module.exports = router;
