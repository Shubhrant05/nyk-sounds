import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen flex flex-col justify-center items-center relative"
     
    >
      {/* Blurred background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://www.jbmusictherapy.com/wp-content/uploads/2015/08/iStock_000062358630_Large.jpg')`,
          filter: 'blur(8px)', 
        }}
      ></div>

      {/* Content container with background overlay */}
      <div className="relative z-10 text-white py-20 md:px-4 md:max-w-4xl mx-auto text-center bg-black bg-opacity-80 px-5">
        <img
          src="https://www.freepnglogos.com/uploads/beats-music-logo-png-6.png"
          alt="Music Logo"
          className="w-24 h-24 mb-4 mx-auto"
        />
        <h1 className="text-4xl text-white font-bold mb-4">NYK Sounds</h1>
        <p className="text-lg mb-8">Sampling strange equipments</p>
        <div className="space-x-4">
          <Link
            to="/samples"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Get Started
          </Link>
          <a
            href="https://drive.google.com/drive/folders/12tRmVh9bO8i11hdfyEj4wIf549jIcIQn?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Upload Your Own Pack
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
