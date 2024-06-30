const express = require('express');
const { clockIn, clockOut, getTimeLogs } = require('../controllers/timeLogController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/clock-in', auth, clockIn);
router.put('/clock-out/:id', auth, clockOut);
router.get('/', auth, getTimeLogs);

module.exports = router;
