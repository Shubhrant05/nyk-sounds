import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-sm">© {new Date().getFullYear()} NYK Sounds. All rights reserved.</p>
    
      </div>
    </footer>
  );
};

export default Footer;
