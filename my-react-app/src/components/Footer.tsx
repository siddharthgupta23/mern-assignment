import React from 'react';
import { ArrowRight, Linkedin, Facebook, Instagram } from 'lucide-react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
  >
    {children}
  </a>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-gray-900 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left Section */}
          <div className="max-w-xl">
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Earn industry-recognized certificates with each workshop you complete, 
              showcasing your expertise and commitment to professional excellence.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon href="https://linkedin.com">
                <Linkedin className="w-5 h-5" />
              </SocialIcon>
              <SocialIcon href="https://facebook.com">
                <Facebook className="w-5 h-5" />
              </SocialIcon>
              <SocialIcon href="https://instagram.com">
                <Instagram className="w-5 h-5" />
              </SocialIcon>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <FooterLink href="/terms">Terms & Conditions</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/refund">Refund Policy</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
            </nav>
            <button className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors text-sm">
              Enroll Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-right">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} SkillUp. All rights reservedBy @Hubnex Labs
          </p>
        </div>
      </div>
    </footer>
  );
};