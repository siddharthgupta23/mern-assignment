import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { EnrollmentForm } from './enrollment-form';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [showMovingText, setShowMovingText] = useState(true);

  // Hide moving text on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowMovingText(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-green-600">
                <h1 className="font-semibold text-xl lg:text-4xl text-green-primary">
                  Skillup
                  <p className="font-base text-xs text-green-primary tracking-wide">
              An initiative By Hubnex Labs
            </p>
                </h1>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-green-600">
                Pricing
              </Link>
              <Link to="/features" className="text-gray-700 hover:text-green-600">
                Features
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600">
                About
              </Link>
              <Button
                onClick={() => setShowEnrollForm(true)}
                className="bg-green-600 text-white hover:bg-green-700"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Pricing
              </Link>
              <Link to="/features" className="text-gray-700 hover:text-green-600">
                Features
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                About
              </Link>
              <Button
                onClick={() => setShowEnrollForm(true)}
                className="w-full bg-green-600 text-white hover:bg-green-700"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        )}

        {/* Moving text */}
        {showMovingText && (
          <div className="bg-green-600 text-white py-2 overflow-hidden">
            <div className="marquee flex space-x-8 animate-marquee">
              <span>✔️ Job Placement/Assistance</span>
              <span>💰 100% Money Back Guarantee</span>
              <span>✔️ 100% Job Placement/Assistance</span>
              <span>💰 100% Money Back Guarantee</span>
            </div>
          </div>
        )}

        {/* Enrollment Form Modal */}
        {showEnrollForm && <EnrollmentForm onClose={() => setShowEnrollForm(false)} />}
      </nav>

      {/* Inline Styles */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-marquee {
            display: flex;
            white-space: nowrap;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </>
  );
}
