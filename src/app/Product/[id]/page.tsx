'use client'
import React from 'react';
import Features from '../../components/Features';
import Listings from '../../components/Listings';
import Email from '../../components/Email';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Product } from '@/types/product';
import { sanityFetch } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { singleProductQuery } from '@/sanity/lib/queries';
import Link from 'next/link';

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  // Fetch single product by id
  const product: Product | null = await sanityFetch({
    query: singleProductQuery,
    params: { id },
  });

  if (!product) {
    return (
      <div>
        <h1>Page not found</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="text-gray-100 body-font">
        <div className="container mx-auto py-12 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden shadow-lg">
            <Image
              alt={product.name}
              className="object-cover object-center h-full w-full transform transition-transform duration-500 hover:scale-110"
              src={urlFor(product.imageUrl).url()}
              width={800}
              height={800}
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col lg:py-6 lg:w-1/2 lg:pl-12 text-center lg:text-left">
            {/* Product Title and Price */}
            <div className="mb-8">
              <h1 className="text-gray-900 text-4xl font-semibold mb-3">{product.name}</h1>
              <p className="text-gray-900 text-3xl font-bold">£{product.price}</p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-gray-900 text-lg font-medium mb-3">Description</h2>
              <p className="text-lg leading-relaxed">{product.description}</p>
              <ul className="mt-4 ml-4 list-disc list-inside text-left">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>

            {/* Dimensions */}
            <div>
              <h2 className="text-gray-900 text-lg font-medium mb-3">Dimensions</h2>
              <p className="text-base leading-relaxed text-gray-600">
                {product.dimensions?.height} x {product.dimensions?.width} x {product.dimensions?.depth}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-6 justify-center lg:justify-start">
              <Link href={`/shopping-baskets/${product._id}`} passHref>
                <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300">
                  Buy Now
                </button>
              </Link>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12">
        <Features />
      </section>

      {/* Listings Section */}
      <section className="py-12">
        <Listings />
      </section>

      {/* Email Section */}
      <section className="bg-gray-100 text-white py-12">
        <Email />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;
