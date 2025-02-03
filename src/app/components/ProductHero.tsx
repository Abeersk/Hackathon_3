import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { Product } from '@/types/product';

const ProductHero: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto py-12 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden shadow-lg">
          <Image
            alt={product.name}
            src={urlFor(product.imageUrl).url()}
            width={600}
            height={600}
            className="object-cover object-center h-full w-full transform hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col lg:py-6 lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <h1 className="text-gray-900 text-4xl font-semibold mb-3">{product.name}</h1>
          <p className="text-gray-900 text-3xl font-bold">£{product.price}</p>

          {/* Product Description */}
          <div className="mb-8">
            <h2 className="text-gray-900 text-lg font-medium mb-3">Description</h2>
            <p className="text-lg leading-relaxed">{product.description}</p>
            <ul className="mt-4 ml-4 list-disc text-left">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>

          {/* Product Dimensions */}
          <h2 className="text-gray-900 text-lg font-medium mb-3">Dimensions</h2>
          <p className="text-base text-gray-600">
            {product.dimensions?.height} x {product.dimensions?.width} x {product.dimensions?.depth}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-6 justify-center lg:justify-start">
            <Link href={`/shopping-baskets/${product._id}`} passHref>
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition">
                Buy Now
              </button>
            </Link>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
