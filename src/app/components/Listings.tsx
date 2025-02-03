import React from 'react';
import Image from 'next/image';
import hero from '@/public/hero.jpeg';
import features1 from '@/public/features1.jpeg';
import features2 from '@/public/features2.jpeg';
import pic2 from '@/public/pic2.jpeg';

const imageData = [
  {
    src: hero,
    alt: 'Hero Image',
    title: 'The Dandy Chair',
    price: '£250',
  },
  {
    src: features1,
    alt: 'Feature 1 Image',
    title: 'Shooting Stars',
    price: '£155',
  },
  {
    src: features2,
    alt: 'Feature 2 Image',
    title: 'The Silky Vase',
    price: '£125',
  },
  {
    src: pic2,
    alt: 'Pic 2 Image',
    title: 'The Lucy Lamp',
    price: '£399',
  },
];

const Listings = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-8">
        <div className="container px-5 py-16 lg:py-24 mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 pl-4 md:pl-7 pb-8">
            New Ceramics
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {imageData.map((item, index) => (
              <div
                key={index}
                className="group rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Text Section */}
                <div className="p-4 text-center">
                  <h2 className="text-lg font-medium text-gray-900 group-hover:font-bold">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-gray-600">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listings;
