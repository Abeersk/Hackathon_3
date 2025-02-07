import React from 'react';
import Features from '../components/Features';
import Listings from '../components/Listings';
import Email from '../components/Email';
import Image from 'next/image';
import product from '@/public/product.png';

const Pag = () => {
  return (
    <div>

      <section className="text-gray-600 body-font">
        <div className="py-12 mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={product}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h1 className="text-gray-900 text-4xl title-font font-medium mb-3">
                  The Dandy Chair
                </h1>
                <p className="text-gray-900 leading-relaxed font-medium title-font text-3xl -mt-3">
                  £250
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Description
                </h2>
                <p className="leading-relaxed text-lg">
                  A timeless design, with premium materials features as one of our most popular and iconic pieces. The Dandy Chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
                </p>
                <ul className="mt-4 ml-4 list-disc text-left">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Dimensions
                </h2>
                <p className="leading-relaxed text-base">
                  45 x 50 x 75 cm
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Listings />
      <Email />
    </div>
  );
};

export default Pag;
