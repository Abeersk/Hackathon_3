'use client'
import { useState, useEffect, useCallback } from "react";
import { sanityFetch } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { addTOCart } from "../actions/actions";
import { Product } from "@/types/product";
import Pagination from "@/app/components/Pagination"; // Import Pagination Component
import head from "@/public/all-products.jpg";

const ProductCard = ({ product, handleCart }: { product: Product; handleCart: (e: React.MouseEvent, product: Product) => void; }) => {
  return (
    <Link href={`/Product/${product._id}`} passHref>
      <div className="rounded-lg bg-white shadow-lg group hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-4 text-center">
          <h2 className="text-gray-900 text-lg font-semibold group-hover:text-blue-600 transition-colors duration-300">
            {product.name}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {product.description.slice(0, 50)}...
          </p>
          <p className="mt-4 text-lg font-bold text-gray-900">£{product.price}</p>
          <button
            className="mt-4 px-4 py-2 bg-indigo-950 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 w-full text-sm sm:text-base"
            onClick={(e) => handleCart(e, product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

const ProductGrid = ({ products, addToCart }: { products: Product[]; addToCart: (product: Product) => void; }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-[90%] mx-auto">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} handleCart={(e, p) => { e.preventDefault(); addToCart(p); }} />
      ))}
    </div>
  );
};

export default function Listings() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of products per page

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = await sanityFetch({ query: allProducts });
      setProducts(fetchedProducts);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = useCallback((product: Product) => {
    Swal.fire({
      title: "Add to Cart?",
      text: `Do you want to add "${product.name}" to the cart?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        addTOCart(product);
        Swal.fire("Added!", `"${product.name}" has been added to the cart.`, "success");
      }
    });
  }, []);

  // **Pagination Logic**
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full h-32 relative">
        <Image src={head} alt="All Products" layout="fill" objectFit="cover" className="rounded-lg" priority />
        <h1 className="absolute left-12 font-serif bottom-10 text-4xl text-white">All Products</h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-2xl">Loading...</div>
          <div className="w-8 h-8 border-4 border-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <ProductGrid products={paginatedProducts} addToCart={handleAddToCart} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
      )}
    </div>
  );
}
