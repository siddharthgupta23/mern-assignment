import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import './globals.css'; // Global CSS

// Define the type for children prop to accept ReactNode (which can be any renderable content)
const inter = {
  fontFamily: 'Inter, sans-serif',
};

interface AppProps {
  children: ReactNode; // This allows children of any type that React can render
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <div style={{ fontFamily: inter.fontFamily }}>
      {/* Set metadata for the page */}
      <Helmet>
        <title>SkillUp Admin</title>
        <meta
          name="description"
          content="Admin portal for SkillUp enrollment management"
        />
      </Helmet>

      {/* Main Content */}
      <div>{children}</div>
    </div>
  );
};

export default App;
