'use client'

import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <header className="max-w-[1440px] mx-auto w-full bg-[#FFFFFF] px-4 md:px-10">
        {/* Top Row: Search, Logo, Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b-[0.5px] border-[#0000004f]">
          {/* Search Icon */}
          <div className="text-2xl cursor-pointer mb-4 md:mb-0">
            <IoSearch />
          </div>

          {/* Logo */}
          <Link href="/" className="text-[#22202E] text-2xl font-semibold">
            Avion
          </Link>

          {/* Cart and Profile Icons */}
          <div className="flex items-center gap-6 text-2xl mt-4 md:mt-0">
            <Link href="/shopping-baskets">
              <MdOutlineShoppingCart />
            </Link>
            <Link href="#email">
              <CgProfile />
            </Link>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex justify-between items-center flex-wrap py-4 text-[#726E8D] text-sm md:text-base gap-4">
          <Link
            href="/shopping-baskets"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Plant pots
          </Link>
          <Link
            href="/product-list"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Ceramics
          </Link>
          <Link
            href="/product-list"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Tables
          </Link>
          <Link
            href="#listings2"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Chairs
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Crockery
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Tableware
          </Link>
          <Link
            href="/"
            className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
          >
            Cutlery
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
