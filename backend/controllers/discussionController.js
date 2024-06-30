const Discussion = require('../models/Discussion');

exports.getDiscussions = async (req, res) => {
  try {
    const discussions = await Discussion.find({ task: req.params.taskId }).populate('user', 'name');
    res.json(discussions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addDiscussion = async (req, res) => {
  const { message } = req.body;
  try {
    const discussion = new Discussion({
      task: req.params.taskId,
      user: req.user.id,
      message,
    });
    await discussion.save();
    res.json(discussion);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
