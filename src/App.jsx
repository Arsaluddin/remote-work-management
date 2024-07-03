// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Tasks from './pages/Tasks';
import TimeTracking from './pages/TimeTracking';
import Chat from './pages/Chat';
import PerformanceAnalytics from './pages/PerformanceAnalytics';
import Wellbeing from './pages/Wellbeing';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/login" element={Login} />
          <Route path="/register" element={Register} />
          <ProtectedRoute path="/dashboard" element={Dashboard} />
          <ProtectedRoute path="/tasks" element={Tasks} />
          <ProtectedRoute path="/time-tracking" element={TimeTracking} />
          <ProtectedRoute path="/chat" element={Chat} />
          <ProtectedRoute path="/performance-analytics" element={PerformanceAnalytics} />
          <ProtectedRoute path="/wellbeing" element={Wellbeing} />
        </Routes>
      </Layout>
      <ToastContainer />
    </Router>
  );
}

export default App;


