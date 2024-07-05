import React, { useEffect, useState } from 'react';
import API from '../services/api';

const TimeTracking = () => {
  const [timeLogs, setTimeLogs] = useState([]);

  useEffect(() => {
    const fetchTimeLogs = async () => {
      const response = await API.get('/time-logs');
      setTimeLogs(response.data);
    };

    fetchTimeLogs();
  }, []);

  const handleClockIn = async () => {
    const response = await API.post('/time-logs/clock-in');
    setTimeLogs([...timeLogs, response.data]);
  };

  const handleClockOut = async (id) => {
    const response = await API.put(`/time-logs/clock-out/${id}`);
    setTimeLogs(timeLogs.map((log) => (log._id === id ? response.data : log)));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-10">Time Tracking</h1>
      <button onClick={handleClockIn} className="bg-blue-500 text-white p-2 rounded mb-4">Clock In</button>
      <div className="grid grid-cols-1 gap-4">
        {timeLogs.map((log) => (
          <div key={log._id} className="bg-white p-4 shadow-lg rounded-lg">
            <p className="text-lg">Clock In: {new Date(log.clockIn).toLocaleString()}</p>
            <p className="text-lg">Clock Out: {log.clockOut ? new Date(log.clockOut).toLocaleString() : 'N/A'}</p>
            <p className="text-lg">Duration: {log.duration ? `${log.duration} minutes` : 'N/A'}</p>
            {!log.clockOut && <button onClick={() => handleClockOut(log._id)} className="bg-red-500 text-white p-2 rounded mt-2">Clock Out</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTracking;
