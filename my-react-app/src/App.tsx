import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from "./app/Page"
import AdminLogin from './app/admin/login/page'; // Import your AdminLogin component
import AdminDashboard from './app/admin/dashboard/page';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
      
      {/* Add other routes here */}
    </Routes>
  );
};

export default App;
