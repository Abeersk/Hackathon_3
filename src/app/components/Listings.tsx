'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { sanityFetch } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/queries';
import { addTOCart } from '../actions/actions';
import { Product } from '@/types/product';

const Listings = React.memo(() => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await sanityFetch({ query: allProducts });
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    Swal.fire({
      title: 'Added to Cart!',
      text: `${product.name} has been added to your cart.`,
      icon: 'success',
      position: 'top-right',
      showConfirmButton: false,
      timer: 1500,
    });
    addTOCart(product);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-2xl">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <section className="text-gray-600 body-font mb-8">
      <div className="container px-5 py-16 lg:py-24 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 pl-4 md:pl-7 pb-8">
          New Ceramics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(1, 9).map((product) => (
            <div
              key={product._id}
              className="group rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <Link href={`/Product/${product._id}`} passHref>
                <div className="cursor-pointer">
                  <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h2 className="text-lg font-medium text-gray-900 group-hover:font-bold">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-gray-600">£{product.price}</p>
                  </div>
                </div>
              </Link>
              <div className="p-4 flex flex-col gap-3">
                <Link href={`/Product/${product._id}`} passHref>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors duration-300 w-full text-sm sm:text-base">
                    View Details
                  </button>
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="px-4 py-2 bg-indigo-950 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Listings.displayName = 'Listings';
export default Listings;
