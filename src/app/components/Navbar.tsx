import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import Link from 'next/link';

function Navbar() {
  return (
    <div>
      {/* Free Delivery Banner */}
      <header className="flex text-slate-100 p-3 items-center justify-center gap-2 text-xl bg-indigo-950">
        <TbTruckDelivery />
        Free delivery on all orders over £50 with code easter checkout
      </header>

      {/* Navbar Section */}
      <nav className="flex flex-col md:flex-row justify-between items-center mt-6 px-4">
        {/* Logo */}
        <h1 className="text-[#22202E] text-2xl">
          <Link href="/">
            Avion
          </Link>
        </h1>

        {/* Navbar Links */}
        <ul className="flex flex-wrap justify-center gap-8 items-center mt-4 md:mt-0">
          <li>
            <Link href="/all-products">All products</Link>
          </li>
          <li>
            <Link href="/">Plant pots</Link>
          </li>
          <li>
            <Link href="/">Ceramics</Link>
          </li>
          <li>
            <Link href="/">Tables</Link>
          </li>
          <li>
            <Link href="/">Chairs</Link>
          </li>
          <li>
            <Link href="/">Crockery</Link>
          </li>
          <li>
            <Link href="/">Tableware</Link>
          </li>
        </ul>

        {/* Profile & Cart */}
        <div className="flex text-xl gap-3 items-center mt-4 md:mt-0 md:pr-4">
          <Link href="/cart">
            <MdOutlineShoppingCart />
          </Link>
          <CgProfile />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
