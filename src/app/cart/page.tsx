// 'use client'

// import { Product } from '@/types/product'
// import React, { useEffect, useState } from 'react'
// import { getCart, removeFromCart, updateCart } from '../actions/actions'
// import Swal from 'sweetalert2'
// import Image from 'next/image'
// import { urlFor } from '@/sanity/lib/image'
// import { useRouter } from 'next/navigation';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([])

//   useEffect(() => {
//     setCartItems(getCart())
//   }, [])

//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this item',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeFromCart(id)
//         setCartItems(getCart())
//         Swal.fire('Removed!', 'Item has been removed.', 'success')
//       }
//     })
//   }

//   const handleQuantityChange = (id: string, quantity: number) => {
//     updateCart(id, quantity)
//     setCartItems(getCart())
//   }

//   const handleIncrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id)
//     if (product) {
//       handleQuantityChange(id, product.quantity + 1)
//     }
//   }

//   const handleDecrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id)
//     if (product && product.quantity > 1) {
//       handleQuantityChange(id, product.quantity - 1)
//     }
//   }

//   const calculatedTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
//   }
// const router =useRouter()
//     const handleProceed = () => {
//       Swal.fire({
//         title: 'Proceed to Checkout?',
//         text: 'Please review your cart before checkout',
//         icon: 'question',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, proceed!'
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire('Success', 'Your order has been successfully processed', 'success')
//           router.push(`/shopping-baskets/${id}`);
//                   setCartItems([])
//         }
//       })
//     }

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-600">Your cart is empty.</p>
//         ) : (
//           <div className="bg-white shadow-md rounded-lg p-6">
//             {cartItems.map((item) => (
//               <div key={item._id} className="border-b border-gray-200 py-4">
//                 <div className="flex flex-col md:flex-row justify-between items-center">
//                   {/* Product Image and Name */}
//                   <div className="py-4 px-4 font-medium text-gray-800 flex items-center gap-4">
//                     <Image
//                       src={item.imageUrl}
//                       alt={item.name}
//                       width={50}
//                       height={50}
//                       className="rounded-md shadow-sm"
//                     />
//                     <span>{item.name}</span>
//                   </div>
//                   {/* Product Details */}
//                   <div className="flex-1 ml-4">
//                     <h2 className="text-xl font-semibold">{item.name}</h2>
//                     <p className="text-gray-600">{item.description}</p>
//                     <p className="text-gray-800 font-bold">${item.price.toFixed(2)}</p>
//                   </div>
//                   {/* Quantity Controls */}
//                   <div className="flex items-center mt-4 md:mt-0">
//                     <button
//                       onClick={() => handleDecrement(item._id)}
//                       className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l hover:bg-gray-300"
//                     >
//                       -
//                     </button>
//                     <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
//                     <button
//                       onClick={() => handleIncrement(item._id)}
//                       className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r hover:bg-gray-300"
//                     >
//                       +
//                     </button>
//                   </div>
//                   {/* Remove Button */}
//                   <button
//                     onClick={() => handleRemove(item._id)}
//                     className="mt-4 md:mt-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//             {/* Total and Checkout Button */}
//             <div className="mt-6">
//               <h2 className="text-2xl font-bold text-right">
//                 Total: ${calculatedTotal().toFixed(2)}
//               </h2>
//             </div>
//             <div className="mt-6 text-right">
//               <button
//                 onClick={handleProceed}
//                 className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Cart
'use client'

import { Product } from '@/types/product'
import React, { useEffect, useState } from 'react'
import { getCart, removeFromCart, updateCart } from '../actions/actions'
import Swal from 'sweetalert2'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const router = useRouter();

  useEffect(() => {
    try {
      setCartItems(getCart())
    } catch (error) {
      console.error('Error loading cart:', error)
    }
  }, [])

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id)
        setCartItems(getCart())
        Swal.fire('Removed!', 'Item has been removed.', 'success')
      }
    })
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCart(id, quantity)
    setCartItems(getCart())
  }

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id)
    if (product) {
      handleQuantityChange(id, product.quantity + 1)
    }
  }

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id)
    if (product && product.quantity > 1) {
      handleQuantityChange(id, product.quantity - 1)
    }
  }

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const handleProceed = () => {
    const firstItemId = cartItems[0]?._id // Get first item's ID

    if (!firstItemId) {
      Swal.fire('Error', 'Your cart is empty!', 'error')
      return;
    }

    Swal.fire({
      title: 'Proceed to Checkout?',
      text: 'Please review your cart before checkout',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success', 'Your order has been successfully processed', 'success')
        router.push(`/shopping-baskets/${firstItemId}`);
        setCartItems([])
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-6">
            {cartItems.map((item) => (
              <div key={item._id} className="border-b border-gray-200 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  {/* Product Image and Name */}
                  <div className="py-4 px-4 font-medium text-gray-800 flex items-center gap-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-md shadow-sm"
                    />
                    <span>{item.name}</span>
                  </div>
                  {/* Product Details */}
                  <div className="flex-1 ml-4">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-800 font-bold">${item.price.toFixed(2)}</p>
                  </div>
                  {/* Quantity Controls */}
                  <div className="flex items-center mt-4 md:mt-0">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="mt-4 md:mt-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            {/* Total and Checkout Button */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-right">
                Total: ${calculatedTotal().toFixed(2)}
              </h2>
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={handleProceed}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
