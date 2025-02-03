'use client'
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductCard({
  product,
  handleCart,
}: {
  product: Product;
  handleCart: (e: React.MouseEvent, product: Product) => void;
}) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Link href={`/Product/${product._id}`} passHref>
      <div className="rounded-lg bg-white shadow-lg group hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer">
        {/* Product Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Product Details */}
        <div className="p-4 text-center">
          <h2 className="text-gray-900 text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
            {product.name}
          </h2>
          {/* Description with "See More" */}
          <p className="mt-2 text-sm text-gray-600">
            {showDescription ? (
              <>
                {product.description}{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setShowDescription(false)}
                >
                  See Less
                </span>
              </>
            ) : (
              <>
                {product.description.slice(0, 50)}...
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setShowDescription(true)}
                >
                  See More
                </span>
              </>
            )}
          </p>
          <p className="mt-4 text-lg font-bold text-gray-900">£{product.price}</p>
          {/* Buttons */}
          <div className="mt-4 flex justify-center gap-4">
            <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors duration-300">
              Buy Now
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
              onClick={(e) => handleCart(e, product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
