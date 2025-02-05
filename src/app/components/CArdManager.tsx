


// 'use client'

//   import React, { useState } from 'react';
//   import { Product } from '@/types/product.js';
//   import Image from 'next/image';
//   import Swal from 'sweetalert2';

//   const CartManager = ({ products }: { products: Product[] }) => {
//     const [cart, setCart] = useState<Product[]>([]);

//     const handleAddToCart = (product: Product) => {
//       Swal.fire({
//         title: 'Are you sure?',     
//         text: `Do you want to add ${product.name} to the cart?`,
//         icon: 'question',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, add it!',
//         cancelButtonText: 'No, cancel!',
//       }).then((result) => {
//         if (result.isConfirmed) {
//           setCart((prevProduct) => [...prevProduct, product]);
//           Swal.fire('Added!', `${product.name} has been added to the cart.`, 'success');
//         }
//       });
//     };

//     const handleRemoveFromCart = (product_id: string) => {
//       Swal.fire({
//         title: 'Are you sure?',
//         text: 'Do you want to remove this product from the cart?',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, remove it!',
//         cancelButtonText: 'No, keep it!',
//       }).then((result) => {
//         if (result.isConfirmed) {
//           const newData = cart.filter((item) => item._id !== product_id);
//           setCart(newData);
//           Swal.fire('Removed!', 'The product has been removed from the cart.', 'success');
//         }
//       });
//     };

//     return (
//       <>
//         <div className="container mx-auto my-8">
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white shadow-md rounded-lg">
//               <thead className="bg-gray-100 border-b">
//                 <tr>
//                   <th className="text-left text-gray-600 font-semibold py-3 px-4">Product Name</th>
//                   <th className="text-left text-gray-600 font-semibold py-3 px-4">Description</th>
//                   <th className="text-right text-gray-600 font-semibold py-3 px-4">Price</th>
//                   <th className="text-center text-gray-600 font-semibold py-3 px-4">Quantity</th>
//                   <th className="text-center text-gray-600 font-semibold py-3 px-4">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.map((item: Product) => (
//                   <tr className="border-b hover:bg-gray-50 transition" key={item._id}>
//                     <td className="py-4 px-4 font-medium text-gray-800 flex items-center gap-4">
//                       <Image
//                         src={item.imageUrl}
//                         alt={item.name}
//                         width={50}
//                         height={50}
//                         className="rounded-md shadow-sm"
//                       />
//                       {item.name}
//                     </td>
//                     <td className="py-4 px-4 text-gray-600">{item.description.substring(0, 100)}...</td>
//                     <td className="py-4 px-4 text-right text-gray-800">${item.price}</td>
//                     <td className="py-4 px-4 text-center">
//                       <input
//                         type="number"
//                         className="w-16 text-center border-gray-300 rounded-md"
//                         min="1"
//                         value="1"
//                         readOnly
//                       />
//                     </td>
//                     <td className="py-4 px-4 text-center">
//                       <button
//                         onClick={() => handleRemoveFromCart(item._id)}
//                         className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600 transition"
//                       >
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <button className="w-full mt-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition">
//               CheckOut
//             </button>
//           </div>

//           <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Name</label>
//               <input type="text" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input type="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">Phone</label>
//               <input type="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
//             </div>
//             <button className="w-full py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition">
//               Submit Order
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   };

//   export default CartManager;


                 //    2 feb sunday 
// CartManager.tsx
'use client';

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { getCart, removeFromCart, updateCart } from "../actions/actions";
import Swal from "sweetalert2";
import { ProductGrid } from "@/app/components/ProductDisplay";

const CartManager = React.memo(({ products }: { products: Product[] }) => {
  const [cartItems, setCartItems] = useState<Product[]>(getCart());

  const handleRemove = useCallback((id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCart());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  }, []);

  const handleQuantityChange = useCallback((id: string, quantity: number) => {
    updateCart(id, quantity);
    setCartItems(getCart());
  }, []);

  const handleIncrement = useCallback(
    (id: string) => {
      const product = cartItems.find((item) => item._id === id);
      if (product) {
        handleQuantityChange(id, product.quantity + 1);
      }
    },
    [cartItems, handleQuantityChange]
  );

  const handleDecrement = useCallback(
    (id: string) => {
      const product = cartItems.find((item) => item._id === id);
      if (product && product.quantity > 1) {
        handleQuantityChange(id, product.quantity - 1);
      }
    },
    [cartItems, handleQuantityChange]
  );

  const handleAddToCart = useCallback(
    (product: Product) => {
      const existingProduct = cartItems.find((item) => item._id === product._id);
      if (existingProduct) {
        handleQuantityChange(product._id, existingProduct.quantity + 1);
      } else {
        const updatedCart = [...cartItems, { ...product, quantity: 1 }];
        setCartItems(updatedCart);
      }
    },
    [cartItems, handleQuantityChange]
  );

  return (
    <>
      <div className="container mx-auto my-8">
        {/* Cart Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item: Product) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.description.substring(0, 50)}...
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-800">£{item.price * item.quantity}</span>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout Button */}
        <button className="w-full mt-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition">
          CheckOut
        </button>

        {/* Customer Information */}
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="phone"
              name="phone"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <button className="w-full py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition">
            Submit Order
          </button>
        </div>
      </div>

      {/* Product Grid with products list */}
      <ProductGrid products={products} addToCart={handleAddToCart} />
    </>
  );
});

export default CartManager;



// 'use client';

// import React, { useState } from 'react';
// import ProductGrid from './ProductGrid';
// import { Product } from '@/types/product.js';

// const CartManager = ({ products }: { products: Product[] }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const handleAddToCart = (product: Product) => {
//     // Prevent duplicate items
//     if (!cart.find((item) => item._id === product._id)) {
//       setCart((prevCart) => [...prevCart, product]);
//     }
//   };

//   const handleRemoveFromCart = (productId: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
//   };

//   const handleCheckout = () => {
//     // Redirect or handle checkout
//     console.log('Proceeding to checkout with items:', cart);
//   };

//   return (
//     <div>
//       {/* Product Grid */}
//       <ProductGrid products={products} addToCart={handleAddToCart} />

//       {/* Cart Section */}
//       <div className="container mx-auto my-8">
//         <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-lg">
//             <thead className="bg-gray-100 border-b">
//               <tr>
//                 <th className="text-left text-gray-600 font-semibold py-3 px-4">Product</th>
//                 <th className="text-left text-gray-600 font-semibold py-3 px-4">Price</th>
//                 <th className="text-left text-gray-600 font-semibold py-3 px-4">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((product) => (
//                 <tr key={product._id} className="border-b">
//                   <td className="py-3 px-4">
//                     <div className="flex items-center">
//                       <img
//                         src={product.imageUrl}
//                         alt={product.name}
//                         className="w-16 h-16 rounded-lg mr-4"
//                       />
//                       <span className="font-medium">{product.name}</span>
//                     </div>
//                   </td>
//                   <td className="py-3 px-4">£{product.price}</td>
//                   <td className="py-3 px-4">
//                     <button
//                       onClick={() => handleRemoveFromCart(product._id)}
//                       className="text-red-600 hover:underline"
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Checkout Section */}
//         {cart.length > 0 && (
//           <div className="mt-6 text-right">
//             <button
//               onClick={handleCheckout}
//               className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartManager;
