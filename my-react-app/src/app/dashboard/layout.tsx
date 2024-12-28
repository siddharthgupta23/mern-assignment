import React from 'react';
import { Helmet } from 'react-helmet';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>SkillUp Admin Dashboard</title>
        <meta name="description" content="Admin dashboard for SkillUp enrollment management" />
      </Helmet>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
