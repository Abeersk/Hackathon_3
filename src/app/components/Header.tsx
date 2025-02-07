'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
      const totalQuantity = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
      setCartCount(totalQuantity);
    };

    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);
    return () => window.removeEventListener('cartUpdated', updateCartCount);
  }, []);

  return (
    <header className="max-w-[1440px] mx-auto w-full bg-[#FFFFFF] px-4 md:px-10">
      {/* Top Row: Search, Logo, Icons */}
      <div className="flex flex-row justify-between items-center py-4 border-b-[0.5px] border-[#0000004f]">
        {/* Search Icon */}
        <div className="text-2xl cursor-pointer">
          <IoSearch />
        </div>

        {/* Logo */}
        <Link href="/" className="text-[#22202E] text-2xl font-semibold">
          Avion
        </Link>

        {/* Cart, Profile, and Menu */}
        <div className="flex items-center gap-6 text-2xl">
          <Link href="/cart" className="relative">
            <MdOutlineShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="#email">
            <CgProfile />
          </Link>
          {/* Mobile Menu Button */}
          <FaBars
            className="text-2xl cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {/* Desktop Navigation (For LG Screens) */}
      <nav className="hidden lg:flex justify-center gap-8 py-4 text-lg font-medium">
        <Link href="/all-products" className="hover:text-[#5a526c]">Plant pots</Link>
        <Link href="/product-list" className="hover:text-[#5a526c]">Ceramics</Link>
        <Link href="/all-products" className="hover:text-[#5a526c]">Tables</Link>
        <Link href="#listings2" className="hover:text-[#5a526c]">Chairs</Link>
        <Link href="/all-products" className="hover:text-[#5a526c]">Crockery</Link>
        <Link href="/all-products" className="hover:text-[#5a526c]">Tableware</Link>
        <Link href="/all-products" className="hover:text-[#5a526c]">Cutlery</Link>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-2xl">X</button>
        </div>

        <nav className="flex flex-col items-start gap-4 p-4">
          <Link href="/all-products" className="hover:text-[#5a526c]">Plant pots</Link>
          <Link href="/product-list" className="hover:text-[#5a526c]">Ceramics</Link>
          <Link href="/all-products" className="hover:text-[#5a526c]">Tables</Link>
          <Link href="#listings2" className="hover:text-[#5a526c]">Chairs</Link>
          <Link href="/all-products" className="hover:text-[#5a526c]">Crockery</Link>
          <Link href="/all-products" className="hover:text-[#5a526c]">Tableware</Link>
          <Link href="/all-products" className="hover:text-[#5a526c]">Cutlery</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
