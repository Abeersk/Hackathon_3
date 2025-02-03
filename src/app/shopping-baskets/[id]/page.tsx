import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartManager from '@/app/components/CArdManager';
import { sanityFetch } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/queries';

const Page = async () => {
  const products = await sanityFetch({ query: allProducts });

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <h1 className="text-3xl font-medium text-gray-800 mb-10 text-center">Your Shopping Cart</h1>
        <CartManager products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
