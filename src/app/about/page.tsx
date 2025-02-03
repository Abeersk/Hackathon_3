import React from 'react';
import Image from 'next/image';
import feature3 from '@/public/feature3.png';
import pic1 from '@/public/pic1.png';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Features1 from '../components/Features1';
import Email from '../components/Email';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { TbTruckDelivery } from 'react-icons/tb';

function Page() {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-center gap-2 p-3 text-xl text-slate-100 bg-indigo-950">
        <TbTruckDelivery />
        Free delivery on all orders over £50 with code easter checkout
      </header>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4">
        <h1 className="text-4xl font-semibold text-[#22202E]">Avion</h1>
        <div className="flex items-center gap-8">
          <ul className="flex gap-8 text-lg">
            <li>About us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <div className="flex items-center gap-4 text-xl">
            <IoSearch />
            <MdOutlineShoppingCart />
            <CgProfile />
          </div>
        </div>
      </nav>

      {/* Categories */}
      <ul className="flex justify-center gap-8 p-4 mt-4 bg-slate-100">
        <li>All products</li>
        <li>Plant pots</li>
        <li>Ceramics</li>
        <li>Tables</li>
        <li>Chairs</li>
        <li>Crockery</li>
        <li>Tableware</li>
      </ul>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center m-14 gap-8">
        <h1 className="text-3xl text-justify">
          A brand built on the love of craftmanship, <br />
          quality and outstanding customer service
        </h1>
        <button className="p-4 bg-slate-100">View our products</button>
      </section>

      {/* Story Section */}
      <section className="flex flex-col lg:flex-row justify-center items-center gap-6 px-4">
        <div className="bg-indigo-950 h-auto lg:h-[400px] lg:w-[550px] text-white p-8">
          <h1 className="text-2xl font-bold">It started with a small idea</h1>
          <p className="mt-4">
            A global brand with local beginnings, our story began in a <br />
            small studio in South London in early 2014
          </p>
        </div>
        <Image src={feature3} width={520} height={300} alt="Feature" className="rounded-lg" />
      </section>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row mt-8 items-center gap-8 px-6">
        <Image className="rounded-lg" src={pic1} height={720} width={700} alt="About Us" />
        <div className="lg:w-1/2">
          <h1 className="text-xl font-medium mb-4">
            Our service isn't just personal, it's actually <br />
            hyper personally exquisite
          </h1>
          <p className="text-slate-600">
            When we started Avion, the idea was simple. Make high quality furniture <br />
            affordable and available for the mass market. <br />
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our
            Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="mt-6 bg-slate-50 h-14 w-36">Get in touch</button>
        </div>
      </div>

      {/* Features and Footer */}
      <Features />
      <Email />
      <Footer />
    </div>
  );
}

export default Page;
