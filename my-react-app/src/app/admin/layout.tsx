import React from 'react';
import { Helmet } from 'react-helmet';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>SkillUp Admin</title>
        <meta name="description" content="Admin portal for SkillUp enrollment management" />
      </Helmet>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
