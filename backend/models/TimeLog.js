const mongoose = require('mongoose');

const TimeLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  },
  clockIn: {
    type: Date,
    required: true,
  },
  clockOut: {
    type: Date,
  },
  duration: {
    type: Number, // Duration in minutes
  },
});

module.exports = mongoose.model('TimeLog', TimeLogSchema);
