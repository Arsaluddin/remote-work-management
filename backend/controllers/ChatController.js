const Chat = require('../models/Chat');

exports.getChats = async (req, res) => {
  try {
    const chats = await Chat.find({
      $or: [
        { sender: req.user.id },
        { receiver: req.user.id },
      ],
    }).populate('sender receiver', 'name');
    res.json(chats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.sendChat = async (req, res) => {
  const { receiverId, message } = req.body;
  try {
    const chat = new Chat({
      sender: req.user.id,
      receiver: receiverId,
      message,
    });
    await chat.save();
    res.json(chat);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
