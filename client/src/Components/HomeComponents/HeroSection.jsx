import React from 'react';
import heroImage from '../../assets/hero image.png';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between bg-white min-h-screen">
      {/* Text Content */}
      <div className="max-w-[700px] md:pl-25 p-8 lg:mt-16">
        <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">ALL RELIGION</button>
        <h1 className="text-5xl font-bold my-4 leading-snug">
          How’s your <br /> <span className="text-orange-500">SPIRITUAL JOURNEY</span> <br /> going?
        </h1>
        <p className="text-gray-600 mb-6">
          "Isn’t it incredible how this journey reveals new insights every day? Do you feel the same calm and purpose growing within?"
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-orange-600 shadow-lg">
          <span>EXPLORE</span>
          <span>→</span>
        </button>
      </div>

      {/* Image Section */}
      <div className="ml-12 flex items-center">
        <img src={heroImage} alt="Spiritual Journey" className="w-[700px] h-auto rounded-lg" />
      </div>
    </section>
  );
};

export default HeroSection;
