const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const timeLogRoutes = require('./routes/timeLogRoutes');
const chatRoutes = require('./routes/ChatRoutes');
const discussionRoutes = require('./routes/discussionRoutes');
const performanceRoutes = require('./routes/performanceRoutes');
const wellbeingRoutes = require('./routes/wellbeingRoutes');
const zoomRoutes = require('./routes/zoomRoutes');
const googleRoutes = require('./routes/googleRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes

app.use('/api/performance', performanceRoutes);
app.use('/api/discussions', discussionRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/time-logs', timeLogRoutes);
app.use('/api/wellbeing', wellbeingRoutes);
app.use('/api/zoom', zoomRoutes);
app.use('/api/google', googleRoutes);


// Socket.io setup
io.on('connection', socket => {
  console.log('New WebSocket connection');

  socket.on('join', ({ userId }) => {
    socket.join(userId);
  });

  socket.on('sendMessage', (message, callback) => {
    io.to(message.receiverId).emit('message', message);
    callback();
  });

  socket.on('disconnect', () => {
    console.log('User had left');
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));


