const Task = require('../models/Task');
const TimeLog = require('../models/TimeLog');

exports.getPerformanceMetrics = async (req, res) => {
  try {
    const userId = req.user.id;
    const tasks = await Task.find({ assignedTo: userId });
    const timeLogs = await TimeLog.find({ user: userId });

    // Calculate performance metrics
    const completedTasks = tasks.filter(task => task.status === 'Done').length;
    const totalTasks = tasks.length;
    const productivity = (completedTasks / totalTasks) * 100;

    res.json({
      completedTasks,
      totalTasks,
      productivity,
      timeLogs,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
