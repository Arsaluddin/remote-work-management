const express = require('express');
const { getPerformanceMetrics } = require('../controllers/performanceController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', auth, getPerformanceMetrics);

module.exports = router;
