const express = require('express');
const { getWellbeing, addWellbeing } = require('../controllers/wellbeingController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, getWellbeing);
router.post('/', auth, addWellbeing);

module.exports = router;
