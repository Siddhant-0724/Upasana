import React from 'react';
import sampleImage from '../../assets/ChildernImage.png';
import { FaArrowRight } from 'react-icons/fa';

const Contribution = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center bg-[#fdece6] p-8">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img src={sampleImage} alt="Creative Concept" className="w-full max-w-lg rounded-lg" />
      </div>
      {/* Text Content */}
      <div className="md:w-1/2 text-left md:pr-12 mb-8 md:mb-0">
        <h1 className="text-5xl font-bold mb-6 leading-snug">
        What Makes us  <span className="text-orange-500">Special?</span>
        </h1>
        <p className="text-gray-600 text-xl mb-6">
        With every purchase you make, we donate a portion to support underprivileged children, providing them with quality education, school supplies, and resources for a brighter future. Your contribution helps us bring positive change to their lives, one step at a time. Join us in this mission by clicking the button below to make a difference together!        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 shadow-lg flex gap-3 items-center">
          Contribute<span><FaArrowRight/></span>
        </button>
      </div>

      
    </section>
  );
};

export default Contribution;