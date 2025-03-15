import React from "react";
import heroImage from "../../assets/AiGenrateImage.png";

const AiGenratorSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between bg-white">
      {/* Text Content */}
      <div className="max-w-[700px] md:pl-25 p-8 lg:mt-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
          Generate your
          <br /> SPIRITUAL Images with <span className="text-orange-500">AI.</span>
        </h1>
        <p className="text-gray-600 mb-8">
          "Generate your own spiritual images with AI by simply entering a prompt for a personalized, inspiring creation."
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full flex items-center justify-center hover:bg-orange-600 shadow-lg">
          GENERATE NOW
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center md:w-1/2 lg:mt-19">
        <img
          src={heroImage}
          alt="Spiritual Journey"
          className="w-full max-w-md md:max-w-lg h-80 rounded-lg"
        />
      </div>
    </section>
  );
};

export default AiGenratorSection;