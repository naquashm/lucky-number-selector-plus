
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-16 border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <Link to="/about" className="text-gray-600 hover:text-picker-purple transition-colors">
              About NumberPicker.Live
            </Link>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <Link to="/feedback" className="text-gray-600 hover:text-picker-purple transition-colors block mb-2">
              Feedback & Contact Us
            </Link>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="text-gray-600 hover:text-picker-purple transition-colors block">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-picker-purple transition-colors block">
                Terms and Conditions
              </Link>
              <Link to="/cookies" className="text-gray-600 hover:text-picker-purple transition-colors block">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-gray-500">© 2025 NumberPicker.Live | Support for large data sets via CSV import</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
