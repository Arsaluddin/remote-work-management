import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 w-64 h-screen p-4 flex flex-col space-y-4">
      <Link to="/dashboard" className="text-white">Dashboard</Link>
      <Link to="/tasks" className="text-white">Tasks</Link>
      <Link to="/time-tracking" className="text-white">Time Tracking</Link>
      <Link to="/chat" className="text-white">Chat</Link>
      <Link to="/performance-analytics" className="text-white">Performance Analytics</Link>
      <Link to="/wellbeing" className="text-white">Well-being</Link>
    </div>
  );
};

export default Sidebar;
