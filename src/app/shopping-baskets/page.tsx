import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import flower from '@/public/flower.png';
import features2 from '@/public/features2.jpeg';
import Footer from '../components/Footer';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <div className="container mx-auto px-6 max-w-[1000px] py-12">
        <h1 className="text-3xl opacity-65 text-center w-full mb-10">
          Plant pots
        </h1>

        <ul className="flex justify-between text-[#2A254B] text-lg border-b pb-2 mb-6">
          <li className="w-1/2 text-left">Product</li>
          <li className="w-1/4 text-center">Quantity</li>
          <li className="w-1/4 text-right">Total</li>
        </ul>

        {/* First Product */}
        <div className="flex flex-wrap items-center border-b py-4">
          <div className="flex items-center w-full sm:w-1/2">
            <Link href='/shopping-baskets'>
              <Image
                src={features2}
                alt="Graystone vase"
                className="w-28 h-36 object-cover rounded-lg"
              />
            </Link>
            <div className="ml-4">
              <h2 className="text-lg font-medium text-[#2A254B]">
                Graystone vase
              </h2>
              <p className="text-[#2A254B] text-sm">
                A timeless ceramic vase with a tri-color grey glaze.
              </p>
              <p className="text-[#2A254B] mt-2">£85</p>
            </div>
          </div>
          <div className="w-full sm:w-1/4 text-center">1</div>
          <div className="w-full sm:w-1/4 text-right font-medium text-[#2A254B]">£85</div>
        </div>

        {/* Second Product */}
        <div className="flex flex-wrap items-center border-b py-4">
          <div className="flex items-center w-full sm:w-1/2">
            <Image
              src={flower}
              alt="Basic white vase"
              className="w-28 h-36 object-cover rounded-lg"
            />
            <div className="ml-4">
              <h2 className="text-lg font-medium text-[#2A254B]">
                Basic white vase
              </h2>
              <p className="text-[#2A254B] text-sm">
                Beautiful and simple, this is one for the classics.
              </p>
              <p className="text-[#2A254B] mt-2">£125</p>
            </div>
          </div>
          <div className="w-full sm:w-1/4 text-center">1</div>
          <div className="w-full sm:w-1/4 text-right font-medium text-[#2A254B]">£125</div>
        </div>

        {/* Subtotal Section */}
        <div className="mt-8 text-right">
          <p className="text-[#4E4D93] text-lg mb-2">
            Subtotal: <span className="font-bold text-gray-900">£210</span>
          </p>
          <p className="text-[#4E4D93] text-sm mb-4">
            Taxes and shipping are calculated at checkout.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 text-lg rounded w-full sm:w-auto">
            Go to checkout
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
