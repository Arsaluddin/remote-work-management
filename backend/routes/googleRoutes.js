const express = require('express');
const { createMeeting } = require('../controllers/googleController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create-meeting', auth, createMeeting);

module.exports = router;
