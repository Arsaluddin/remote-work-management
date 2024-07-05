import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Wellbeing = () => {
  const [wellbeingLogs, setWellbeingLogs] = useState([]);
  const [mood, setMood] = useState('Happy');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const fetchWellbeingLogs = async () => {
      const response = await API.get('/wellbeing');
      setWellbeingLogs(response.data);
    };

    fetchWellbeingLogs();
  }, []);

  const handleAddLog = async () => {
    const response = await API.post('/wellbeing', { mood, feedback });
    setWellbeingLogs([...wellbeingLogs, response.data]);
    setMood('Happy');
    setFeedback('');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-10">Well-being</h1>
      <div className="bg-white p-4 shadow-lg rounded-lg mb-4">
        <h2 className="text-2xl font-semibold mb-4">Add Well-being Log</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Mood</label>
          <select value={mood} onChange={(e) => setMood(e.target.value)} className="w-full p-2 border border-gray-300 rounded">
            <option value="Happy">Happy</option>
            <option value="Neutral">Neutral</option>
            <option value="Sad">Sad</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Feedback</label>
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <button onClick={handleAddLog} className="bg-blue-500 text-white p-2 rounded">Add Log</button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {wellbeingLogs.map((log) => (
          <div key={log._id} className="bg-white p-4 shadow-lg rounded-lg">
            <p className="text-lg">Mood: {log.mood}</p>
            <p className="text-lg">Feedback: {log.feedback}</p>
            <p className="text-sm text-gray-600">Date: {new Date(log.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wellbeing;
