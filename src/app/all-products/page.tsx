








// ///                              2 feb sunday


// 'use client'
// import { sanityFetch } from "@/sanity/lib/client";
// import { allProducts } from "@/sanity/lib/queries";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { addTOCart } from "@/app/actions/actions";
// import Swal from "sweetalert2";
// import ProductCard from "../components/ProductCard";
// import { Product } from "@/types/product"; // Import the correct Product type

// export default function Listings() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchProducts = async () => {
//     const fetchedProducts: Product[] = await sanityFetch({ query: allProducts });
//     setProducts(fetchedProducts);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleCart = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     Swal.fire({
//       title: `${product.name} added to cart`,
//       position: "top-start",
//       icon: "success",
//       showConfirmButton: false,
//       timer: 1500,
//     });

//     addTOCart(product); // Ensure `addTOCart` accepts the correct type
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Page Heading */}
//       <div className="py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
//         <h1 className="text-4xl font-bold tracking-wide">Explore Our Products</h1>
//         <p className="mt-4 text-lg">Find the best deals and amazing products!</p>
//       </div>

//       {/* Loading Indicator */}
//       {loading ? (
//         <div className="flex justify-center items-center min-h-screen">
//           <div className="text-2xl">Loading...</div>
//         </div>
//       ) : (
//         // Products Grid
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-12">
//           {products.map((product) => (
//             <ProductCard key={product._id} product={product} handleCart={handleCart} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
'use client'
import { sanityFetch } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { product } from "@/sanity/schemaTypes/product";
import Image from "next/image";
import Link from "next/link";
import head from '@/public/all-products.jpg'
import { useEffect, useState } from "react";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default function Listings() {
  // States for products and loading
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const fetchedProducts: Product[] = await sanityFetch({ query: allProducts });
    setProducts(fetchedProducts);
    setLoading(false); // Set loading to false after fetching
  };

  // Fetch products on initial load
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Section with Image */}
      <div className="w-full h-32 relative">
        <Image
          src={head} // Update with actual image URL or path
          alt="All Products"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <h1 className="absolute left-12 font-serif bottom-10 text-4xl text-white">
          All Products
        </h1>
      </div>

     

      {/* Loading Indicator */}
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-2xl">Loading...</div>
        </div>
      ) : (
        // Products Grid
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-12">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

// Product Card Component
function ProductCard({ product }: { product: Product }) {
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
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors duration-300">
              Buy Now
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
