import React from 'react';
import hero1 from '@/public/hero1.jpg'; // Importing the image correctly
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative">
      {/* Div with specific size, and image as background */}
      <div
        className="relative w-full h-[78vh]"
        style={{
          backgroundImage: `url(${hero1.src})`,
          backgroundAttachment: 'fixed', // Keeps the image fixed during scrolling
          backgroundSize: 'cover',
          backgroundPosition: 'top', // Adjusts image position for better visibility
        }}
      >
        {/* Overlay for reducing opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-15"></div>

        {/* Content box */}
        <div className="absolute inset-0 flex justify-center md:justify-end items-center px-4">
          <div className="text-[#22202E] px-6 md:px-20 py-16 bg-[#FFFFFF] bg-opacity-90 rounded-md shadow-lg mr-0 md:mr-20">
            {/* Text content */}
            <h1 className="text-2xl font-serif text-center md:text-left mb-4">
              Luxury homeware for people
              <br />
              who love timeless design quality
            </h1>
            <p className="text-lg mb-16 text-[#5B5676] text-center md:text-left">
              Shop the new Spring 2022 collection today
            </p>
            {/* Button */}
            <div className="flex justify-center md:justify-start mt-4">
              <Link href="/all-products">
                <button className="bg-[#F9F9F9] group flex items-center text-[#2A254B] py-3 px-8 rounded-md shadow hover:bg-gray-100 transition duration-300">
                  View Collection
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;