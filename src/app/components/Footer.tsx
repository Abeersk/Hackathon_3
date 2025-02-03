import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="footer" className="bg-[#1A103D] text-white">
      <footer className="py-12 px-4">
        <div className="container mx-auto flex flex-wrap justify-between">
          {/* Menu Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold tracking-wider mb-4">Menu</h2>
            <nav className="list-none mb-10 space-y-2">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </nav>
          </div>

          {/* Categories Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold tracking-wider mb-4">Categories</h2>
            <nav className="list-none mb-10 space-y-2">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
            </nav>
          </div>

          {/* Our Company Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold tracking-wider mb-4">Our company</h2>
            <nav className="list-none mb-10 space-y-2">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </nav>
          </div>

          {/* Mailing List Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold tracking-wider mb-4">Join our mailing list</h2>
            <div className="relative flex w-full text-center">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="h-[54px] w-full md:w-[400px] bg-white/15 bg-opacity-60 rounded-l border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[#FFFFFF] py-2 px-8 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button className="text-[#2A254B] bg-[#FFFFFF] border-0 focus:outline-none h-[54px] md:w-56 w-full hover:bg-indigo-600 text-[12px] rounded-r">
                Signup
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="container mx-auto py-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm">Copyright © 2022 Aven LTD</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="https://www.facebook.com/abeer.shaikh.7568" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <FaTwitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <a href="https://www.instagram.com/abeer.shaikh.7568/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-abeer-b94a522b7/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
