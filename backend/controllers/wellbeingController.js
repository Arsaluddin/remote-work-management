const Wellbeing = require('../models/Wellbeing');

exports.getWellbeing = async (req, res) => {
  try {
    const wellbeing = await Wellbeing.find({ user: req.user.id });
    res.json(wellbeing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addWellbeing = async (req, res) => {
  const { mood, feedback } = req.body;
  try {
    const wellbeing = new Wellbeing({
      user: req.user.id,
      mood,
      feedback,
    });
    await wellbeing.save();
    res.json(wellbeing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
