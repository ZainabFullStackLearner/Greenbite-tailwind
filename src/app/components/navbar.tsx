'use client'
import React, { useState } from 'react';
 // Optional: Use for routing
 import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import logo from "@/app/assets/Ellipse3.png"
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      className="w-full h-16 md:h-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/1500x300')", // Replace with your navbar image URL
      }}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-8">
        {/* Logo */}
        <div className="w-14 flex">
         <Image
         src={logo}
         alt='logo'/>
         <p className='text-[30px] font-bold text-white pt-2 pl-2 font-Inter'>GreenBite</p> 
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-Inter text-[20px]">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/pages" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="pages/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <Link href="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
        </nav>

        {/* Hamburger Menu */}
        <button
          onClick={toggleNav}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="absolute top-16 left-0 w-full bg-black z-20 text-center">
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              href="/"
              onClick={toggleNav}
              className="text-white hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="/pages"
              onClick={toggleNav}
              className="text-white hover:text-gray-300"
            >
              About
            </Link>
            <Link
              href="pages/contact"
              onClick={toggleNav}
              className="text-white hover:text-gray-300"
            >
              Contact
            </Link>
            <Link
              href="/login"
              onClick={toggleNav}
              className="text-white hover:text-gray-300"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
