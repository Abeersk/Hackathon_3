"use client";

import React, { useEffect, useState } from "react";
import Features from "../../components/Features";
import Listings from "../../components/Listings";
import Email from "../../components/Email";
import Image from "next/image";
import Footer from "../../components/Footer";
import { Product } from "@/types/product";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { singleProductQuery } from "@/sanity/lib/queries";
import Swal from "sweetalert2";
import { addTOCart } from "../../actions/actions";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data: Product | null = await sanityFetch({
        query: singleProductQuery,
        params: { id },
      });
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-700">Page not found</h1>
      </div>
    );
  }

  const handleAddToCart = (product: Product) => {
    Swal.fire({
      title: "Added to Cart!",
      text: `${product.name} has been added to your cart.`,
      icon: "success",
      position: "top-right",
      showConfirmButton: false,
      timer: 1500,
    });
    addTOCart(product);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="text-gray-900 body-font py-12 px-6 lg:px-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 rounded-lg overflow-hidden shadow-lg">
            <Image
              alt={product.name}
              className="object-cover object-center w-full h-full transform transition-transform duration-500 hover:scale-105"
              src={urlFor(product.imageUrl).url()}
              width={800}
              height={800}
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
            <p className="text-2xl font-semibold text-indigo-900">£{product.price}</p>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">{product.description}</p>
            {product.features && product.features.length > 0 && (
              <ul className="mt-4 list-disc list-inside text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
            {product.dimensions && (
              <p className="mt-4 text-gray-600">
                <strong>Dimensions:</strong> {product.dimensions.height} x {product.dimensions.width} x {product.dimensions.depth}
              </p>
            )}
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-6 px-6 py-3 bg-indigo-950 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Add to Cart
            </button>
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
      <section className="bg-gray-100 py-12">
        <Email />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;
