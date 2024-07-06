import React from 'react';
import AudioPlayer from 'react-audio-player';
import { motion } from 'framer-motion';
import { saveAs } from 'file-saver';

const Samples = () => {
  const samples = [
    { name: 'Matka Sounds', file: require('../sounds/Matka-Preview.mp3') },
    { name: 'Penguin Pack', file: require('../sounds/Penguin_Pack_Preview') }
    // Add more samples as needed
  ];

  const handleDownload = (fileUrl, fileName) => {
    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, fileName);
      })
      .catch((error) => console.error('Error downloading file:', error));
  };

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url('https://www.jbmusictherapy.com/wp-content/uploads/2015/08/iStock_000062358630_Large.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-opacity-75 backdrop-filter backdrop-blur-lg">
        {/* Blur overlay to be used as the background */}
      </div>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Samples</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {samples.map((sample, index) => (
            <div key={index} className="p-4 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg">
              <h2 className="text-lg font-semibold">{sample.name}</h2>
              <div className="flex justify-center items-center mt-4 mb-2">
                <AudioPlayer
                  src={sample.file}
                  controls
                  className="w-full"
                  style={{ maxWidth: '300px' }} // Adjust as needed
                />
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                <button
                  onClick={() => handleDownload(sample.file, `${sample.name}.mp3`)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500 w-full mt-2"
                >
                  Download
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Samples;
