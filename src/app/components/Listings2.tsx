'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { sanityFetch } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/queries';
import { addTOCart } from '../actions/actions';
import { Product } from '@/types/product';

const Listings2 = React.memo(() => {
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
      position: 'top-start',
      showConfirmButton: false,
      timer: 1500
    });
    addTOCart(product);
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-2xl font-semibold mb-2">Loading...</div>
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section id="listings2" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.slice(0, 3).map((product, index) => (
            <div
              key={product._id}
              className={`${
                index === 0 ? 'lg:w-1/2' : 'lg:w-1/4'
              } md:w-1/2 sm:w-full w-full p-4 group`}
            >
                <Link href={`/Product/${product._id}`} passHref>
              <div className="block relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="block relative h-96 cursor-pointer">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="absolute group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                <div className="mt-4 text-center">
                  <h2 className="text-gray-900 title-font text-lg font-semibold group-hover:font-bold transition-all duration-300">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-gray-700 font-medium">£{product.price}</p>
                  <div className="p-4 flex flex-col gap-3">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors duration-300 w-full text-sm sm:text-base">
          View Details
            </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="px-4 py-2 bg-indigo-950 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 w-full"
                  >
                  Add to Cart
                </button>
              </div>
                </div>
              </div>
                    </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
Listings2.displayName = "Listings2"
export default Listings2;
