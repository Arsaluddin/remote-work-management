import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-10">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">Task Overview</h2>
          <p className="mt-2">Track and manage your tasks efficiently.</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">Time Tracking</h2>
          <p className="mt-2">Monitor and log your working hours.</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">Performance Analytics</h2>
          <p className="mt-2">Analyze your team's performance and productivity.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

