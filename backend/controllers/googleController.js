const googleService = require('../services/googleService');

exports.createMeeting = async (req, res) => {
  const { summary, description, start, end } = req.body;

  try {
    const meeting = await googleService.createMeeting(summary, description, start, end);
    res.json(meeting);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};
    