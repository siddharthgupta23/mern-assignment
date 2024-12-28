// import React from 'react';
// import { Link } from 'react-router-dom';  // Use react-router for navigation in React
// import { Navbar } from '../components/navbar';
// import { FeaturesBanner } from '../components/features-banner';
// import { HeroSection } from '../components/hero-section';

// const Home: React.FC = () => {
//   return (
//     <main className="min-h-screen">
//       <Navbar />
//       <FeaturesBanner />
//       <HeroSection />
//       <footer className="text-center py-4">
//         <Link to="/admin/login" className="text-sm text-gray-500 hover:text-gray-700">
//           Admin Login
//         </Link>
//       </footer>
//     </main>
//   );
// };

// export default Home;
import React from 'react';
import { useNavigate } from 'react-router-dom'; // For programmatic navigation
import { Navbar } from '../components/navbar';
import { FeaturesBanner } from '../components/features-banner';
import { HeroSection } from '../components/hero-section';
import "./global.css"

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleAdminLoginClick = () => {
    navigate('/admin/login'); // Navigate to the admin login page
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <FeaturesBanner />
      <HeroSection />
      <footer className="text-center py-4">
        <button
          onClick={handleAdminLoginClick}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Admin Login
        </button>
      </footer>
    </main>
  );
};

export default Home;

