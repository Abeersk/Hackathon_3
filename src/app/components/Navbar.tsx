// 'use client'

// import React, { useEffect, useState } from 'react';
// import { CgProfile } from 'react-icons/cg';
// import { MdOutlineShoppingCart } from 'react-icons/md';
// import { TbTruckDelivery } from 'react-icons/tb';
// import Link from 'next/link';

// function Navbar() {
//   const [cartCount, setCartCount] = useState(0);

//   const updateCartCount = () => {
//     const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
//     const totalQuantity = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
//     setCartCount(totalQuantity);
//   };

//   useEffect(() => {
//     updateCartCount(); // Page load hone par cart count update hoga

//     // 🔄 Custom Event Listener (Cart Update Detect Karega)
//     const handleCartUpdate = () => {
//       updateCartCount();
//     };

//     window.addEventListener('cartUpdated', handleCartUpdate);
//     return () => window.removeEventListener('cartUpdated', handleCartUpdate);
//   }, []);

//   return (
//     <div>
//       {/* Free Delivery Banner */}
//       <header className="flex text-slate-100 p-3 items-center justify-center gap-2 text-xl bg-indigo-950">
//         <TbTruckDelivery />
//         Free delivery on all orders over £50 with code easter checkout
//       </header>

//       {/* Navbar Section */}
//       <nav className="flex flex-col md:flex-row justify-between items-center mt-6 px-4">
//         {/* Logo */}
//         <h1 className="text-[#22202E] text-2xl">
//           <Link href="/">Avion</Link>
//         </h1>

//         {/* Navbar Links */}
//         <ul className="flex flex-wrap justify-center gap-8 items-center mt-4 md:mt-0">
//           <li><Link href="/all-products">All products</Link></li>
//           <li><Link href="/all-products">Plant pots</Link></li>
//           <li><Link href="/all-products">Ceramics</Link></li>
//           <li><Link href="/all-products">Tables</Link></li>
//           <li><Link href="/all-products">Chairs</Link></li>
//           <li><Link href="/all-products">Crockery</Link></li>
//           <li><Link href="/all-products">Tableware</Link></li>
//         </ul>

//         {/* Profile & Cart */}
//         <div className="flex text-xl gap-3 items-center mt-4 md:mt-0 md:pr-4 relative">
//           <Link href="/cart" className="relative">
//             <MdOutlineShoppingCart />
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//           <CgProfile />
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
