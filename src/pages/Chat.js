import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import API from '../services/api';

const socket = io('http://localhost:5000');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    const fetchMessages = async () => {
      const response = await API.get('/chats');
      setMessages(response.data);
    };

    fetchMessages();

    return () => {
      socket.off('message');
    };
  }, []);

  const handleSendMessage = async () => {
    const message = { content: newMessage, sender: 'currentUserId', receiver: 'receiverId' }; // Adjust according to your user context
    socket.emit('sendMessage', message);
    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-10">Chat</h1>
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <div className="mb-4">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <p className={`p-2 rounded ${message.sender === 'currentUserId' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>{message.content}</p>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded ml-2">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
