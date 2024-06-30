const express = require('express');
const { getDiscussions, addDiscussion } = require('../controllers/discussionController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:taskId', auth, getDiscussions);
router.post('/:taskId', auth, addDiscussion);

module.exports = router;
