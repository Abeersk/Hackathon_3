// import { Product } from "@/types/product.js";
// import Image from "next/image";

// export default function ProductGrid({
//   products,
//   addToCart,
// }: {
//   products: Product[];
//   addToCart: (product: Product) => void;
// }) {
//   return (
//     <div className="w-[70%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
//       {products.map((product: Product) => (
//         <div
//           key={product._id}
//           className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
//         >
//           <div className="relative h-40 bg-gray-100 flex items-center justify-center">
//             <Image
//               src={product.imageUrl}
//               alt={product.name}
//               layout="fill"
//               objectFit="contain"
//               className="p-4"
//             />
//           </div>
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-gray-800 truncate">
//               {product.name}
//             </h2>
//             <p className="text-sm text-gray-500 mt-2 line-clamp-2">
//               {product.description.substring(0, 100)}...
//             </p>
//             <div className="flex items-center justify-between mt-4">
//               <p className="text-lg font-bold text-gray-900">£{product.price}</p>
//               <p className="text-sm text-yellow-500 flex items-center">
//                 {product.rating}
//               </p>
//             </div>
//             <button
//               onClick={() => addToCart(product)}
//               className="w-full mt-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }




// ProductDisplay.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

// ProductCard Component: Individual product ka card view
export function ProductCard({
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

// ProductGrid Component: Grid view jahan saare products display hote hain using ProductCard
export function ProductGrid({
  products,
  addToCart,
}: {
  products: Product[];
  addToCart: (product: Product) => void;
}) {
  return (
    <div className="w-[70%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          handleCart={(e, p) => {
            e.preventDefault(); // Link ke default behavior ko rokne ke liye
            addToCart(p);
          }}
        />
      ))}
    </div>
  );
}

