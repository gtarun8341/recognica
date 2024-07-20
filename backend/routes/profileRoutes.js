const express = require('express');
const { createProfile, updateProfile } = require('../controllers/profileController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createProfile);
router.put('/', auth, updateProfile);

module.exports = router;
