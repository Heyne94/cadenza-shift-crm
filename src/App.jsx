import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import AutoSchedule from './pages/AutoSchedule';
import Approvals from './pages/Approvals';
import Plugins from './pages/Plugins';
import Analytics from './pages/Analytics';
import EmployeeRecord from './pages/EmployeeRecord';
import Settings from './pages/Settings';
import './App.css';

// Placeholder components for other pages
const Notifications = () => <div className="p-6"><h2 className="text-2xl font-bold">Notifications</h2></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="schedule/auto-schedule" element={<AutoSchedule />} />
          <Route path="approvals" element={<Approvals />} />
          <Route path="employee-record" element={<EmployeeRecord />} />
          <Route path="plugins" element={<Plugins />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
