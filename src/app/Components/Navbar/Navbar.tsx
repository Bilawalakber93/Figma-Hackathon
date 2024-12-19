'use client'


import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, Search } from 'lucide-react'
import { BiUser } from 'react-icons/bi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-amber-600">Food</span>
          <span className="text-white">tuck</span>
        </div>
        </div>
        <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <Link href="/menu" className="hover:text-amber-600">Menu</Link>
          <Link href="/blog" className="hover:text-amber-600">Blog</Link>
          <Link href="/FAQ" className="hover:text-amber-600">Pages</Link>
          <Link href="/about" className="hover:text-amber-600">About</Link>
          <Link href="/Shop" className="hover:text-amber-600">Shop</Link>
          <Link href="/contact" className="hover:text-amber-600">Contact</Link>
        </div>
        {/* Right Section (Search, Cart, User) */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white rounded-full py-4 px-14 pr-8 outline-amber-600"
            />
            <Search className="w-6 h-6 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <Link href="/cart" className="text-white hover:text-amber-500 ml-2">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
          </Link>
          <Link href="/signup" className="text-white hover:text-amber-500 ml-2">
            <BiUser className="h-6 w-6 relative" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-100">
              Home
            </Link>
            <Link href="/menu" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-100">
              Menu
            </Link>
            <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-100">
              Our Chefs
            </Link>
            <Link href="/FAQ" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-100">
              Pages
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-100">
              About
            </Link>
            <Link href="/Shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-100">
              Shop
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-100">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;


