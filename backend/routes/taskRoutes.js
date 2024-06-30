const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/', auth, role(['Admin', 'Manager']), createTask);
router.get('/', auth, getTasks);
router.put('/:id', auth, role(['Admin', 'Manager']), updateTask);
router.delete('/:id', auth, role(['Admin']), deleteTask);

module.exports = router;

