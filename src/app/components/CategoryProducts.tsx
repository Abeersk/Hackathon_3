'use client';

import React, { useState, useEffect } from 'react';
import { sanityFetch } from '@/sanity/lib/client';
import { allProductsByCategory } from '@/sanity/lib/queries';
import { Product } from '@/types/product';
import Image from 'next/image';

const CategoryProducts = ({ categorySlug }: { categorySlug: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  console.log("Category Slug from URL:", categorySlug);

  useEffect(() => {
    if (!categorySlug) return; // Prevents running on first render

    const fetchCategoryProducts = async () => {
      setLoading(true);
      try {
        const queryData = allProductsByCategory(categorySlug);
        console.log("Fetching Query:", queryData.query, "Params:", queryData.params);

        const data = await sanityFetch(queryData);
        console.log("Fetched Products:", data);

        setProducts(data);
      } catch (error) {
        console.error('Error fetching category products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [categorySlug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  console.log("Final Rendered Products:", products);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 text-center capitalize mb-10">
          {categorySlug.replace("-", " ")}
        </h1>

        {products.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">No products found</div>
        ) : (
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product._id} className="lg:w-1/4 md:w-1/2 sm:w-full w-full p-4">
                <div className="block relative rounded overflow-hidden bg-white shadow">
                  <div className="block relative h-96">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-gray-900 text-lg font-medium">{product.name}</h2>
                    <p className="mt-1">£{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryProducts;
