const TimeLog = require('../models/TimeLog');

exports.clockIn = async (req, res) => {
  try {
    const timeLog = new TimeLog({
      user: req.user.id,
      task: req.body.taskId,
      clockIn: new Date(),
    });
    await timeLog.save();
    res.json(timeLog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.clockOut = async (req, res) => {
  try {
    let timeLog = await TimeLog.findById(req.params.id);
    if (!timeLog) {
      return res.status(404).json({ msg: 'TimeLog not found' });
    }
    timeLog.clockOut = new Date();
    timeLog.duration = (timeLog.clockOut - timeLog.clockIn) / (1000 * 60); // Convert ms to minutes
    await timeLog.save();
    res.json(timeLog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getTimeLogs = async (req, res) => {
  try {
    const timeLogs = await TimeLog.find({ user: req.user.id }).populate('task');
    res.json(timeLogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
