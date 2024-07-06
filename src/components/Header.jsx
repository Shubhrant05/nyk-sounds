import React, { useState } from "react";
import { motion } from "framer-motion";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import '../components/components.css'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-6 px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold tracking-wide">
            NYK <span className="text-blue-500">Sounds</span>
          </h1>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="hover:text-blue-500 transition duration-300"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/samples"
            className="hover:text-blue-500 transition duration-300"
            onClick={handleLinkClick}
          >
            Samples
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500 transition duration-300"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-y-0 left-0 w-3/5 bg-gray-800 p-6 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-4">
          <li>
            <Link to="/" className="block text-white" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/samples"
              className="block text-white"
              onClick={handleLinkClick}
            >
              Samples
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-white"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </motion.div>
      <div className="bg-blue-500 text-white text-center py-2 overflow-hidden">
      <div className="marquee">
        <p className="inline-block">
          If you enjoy our content, please consider making a donation to support us!
        </p>
        <a
          href="https://www.paypal.me/geetnayak001@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold ml-4 hover:underline"
        >
          Donate via PayPal
        </a>
      </div>
    </div>
    </header>
  );
};

export default Header;
