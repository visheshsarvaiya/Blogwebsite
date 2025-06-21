import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-blue-50 border-t border-blue-200 py-12 px-6 text-blue-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div className="flex flex-col justify-between h-full">
          <div className="mb-4">
            <Logo width="140px" />
          </div>
          <p className="text-sm text-blue-700">
            &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-sm font-bold uppercase text-blue-800 mb-4">Company</h4>
          <ul className="space-y-2">
            {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item, idx) => (
              <li key={idx}>
                <Link
                  to="/"
                  className="text-blue-700 hover:text-blue-500 transition duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-sm font-bold uppercase text-blue-800 mb-4">Support</h4>
          <ul className="space-y-2">
            {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item, idx) => (
              <li key={idx}>
                <Link
                  to="/"
                  className="text-blue-700 hover:text-blue-500 transition duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-sm font-bold uppercase text-black-800 mb-4">Legal</h4>
          <ul className="space-y-2">
            {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item, idx) => (
              <li key={idx}>
                <Link
                  to="/"
                  className="text-black-700 hover:text-blue-500 transition duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
