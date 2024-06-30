const express = require('express');
const { getChats, sendChat } = require('../controllers/ChatController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, getChats);
router.post('/', auth, sendChat);

module.exports = router;
