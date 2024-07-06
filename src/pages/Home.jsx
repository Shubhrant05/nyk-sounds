import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://www.jbmusictherapy.com/wp-content/uploads/2015/08/iStock_000062358630_Large.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-opacity-75 backdrop-filter backdrop-blur-lg">
        {/* Blur overlay to be used as the background */}
      </div>
      {/* Content container with background overlay */}
      <div className="relative z-10 text-white py-20 md:px-4 lg:w-3/5 mx-auto text-center bg-black bg-opacity-80 px-5 w-4/5">
        <img
          src="https://www.freepnglogos.com/uploads/beats-music-logo-png-6.png"
          alt="Music Logo"
          className="w-24 h-24 mb-4 mx-auto"
        />
        <h1 className="text-4xl text-white font-bold mb-4">NYK Sounds</h1>
        <p className="text-lg mb-8">Sampling strange equipments</p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link
            to="/samples"
            className="w-full md:w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Get Started
          </Link>
          <a
            href="https://drive.google.com/drive/folders/12tRmVh9bO8i11hdfyEj4wIf549jIcIQn?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Upload Your Own Pack
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
