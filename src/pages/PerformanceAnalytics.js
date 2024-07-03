import React, { useEffect, useState } from 'react';
import API from '../services/api';

const PerformanceAnalytics = () => {
  const [performance, setPerformance] = useState({});

  useEffect(() => {
    const fetchPerformance = async () => {
      const response = await API.get('/performance');
      setPerformance(response.data);
    };

    fetchPerformance();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-10">Performance Analytics</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">Completed Tasks</h2>
          <p className="mt-2 text-3xl">{performance.completedTasks}</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">Total Tasks</h2>
          <p className="mt-2 text-3xl">{performance.totalTasks}</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">Productivity</h2>
          <p className="mt-2 text-3xl">{performance.productivity}%</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
