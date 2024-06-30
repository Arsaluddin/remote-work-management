const zoomService = require('../services/zoomService');

exports.createMeeting = async (req, res) => {
  const { topic, startTime, duration } = req.body;

  try {
    const meeting = await zoomService.createMeeting(topic, startTime, duration);
    res.json(meeting);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};
