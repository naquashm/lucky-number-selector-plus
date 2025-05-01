
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-24 border-t pt-8 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">NumberPicker.Live</h3>
            <p className="text-gray-600 text-sm">
              Free online random number generator and wheel picker tool. Perfect for giveaways, contests, classroom activities, and fair selections.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link to="/" className="hover:text-picker-purple">Home</Link></li>
              <li><Link to="/generator" className="hover:text-picker-purple">Number Generator</Link></li>
              <li><Link to="/wheel" className="hover:text-picker-purple">Wheel Picker</Link></li>
              <li><Link to="/blog" className="hover:text-picker-purple">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link to="/about" className="hover:text-picker-purple">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-picker-purple">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-picker-purple">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-picker-purple">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-center text-gray-500 text-sm">
          <p>© {currentYear} NumberPicker.Live. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
