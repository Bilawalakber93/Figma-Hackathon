"use client";

import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Sidebar Component
const Sidebar = () => {
  const [priceRange, setPriceRange] = useState(5000);
  const tags = [
    "Sandwich",
    "Tikka",
    "Bbq",
    "Restaurant",
    "Chicken Sharma",
    "Health",
    "Fastfood",
    "Food",
    "Pizza",
    "Burger",
    "Chicken",
  ];

  return (
    
    <div className="w-full md:w-1/4 bg-white p-4 rounded-md shadow-md">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Product"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-4">Category</h3>
        <ul className="space-y-2">
          {["Sandwiches", "Burger", "Chicken Chup", "Drink", "Pizza", "Non Veg", "Uncategorized"].map((category) => (
            <li key={category}>
              <label className="flex items-center text-gray-700">
                <input type="checkbox" className="mr-2 rounded border-gray-300 focus:ring-orange-500" />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Banner */}
      <div className="mb-6">
        <div className="relative">
          <Image
            src="/ourshop-img/sidebar.png" // Replace with your banner image URL
            alt="Classic Restaurant"
            width={96}
            height={96}
            className="w-full h-96 object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
            <h4 className="font-semibold text-sm">Perfect Taste</h4>
            <p className="text-xs">Classic Restaurant</p>
            <p className="font-bold text-lg">45.00$</p>
            <button className="mt-2 text-orange-500 font-semibold text-xs underline">
              Shop Now →
            </button>
          </div>
        </div>
      </div>
      {/* Filter By Price */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-4">Filter By Price</h3>
        <div className="flex items-center">
          <input
            type="range"
            min="0"
            max="8000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>From $0 to ${priceRange}</span>
          <button className="text-orange-500 font-medium">Filter</button>
        </div>
      </div>
      <div className="p-4 md:p-8">
      {/* Popular Tags Section */}
      <div className="p-6 bg-gray-50 shadow-md mb-8">
      <h3 className="font-bold text-lg mb-4 border-b pb-2">Popular Tags</h3>
      <div className="space-y-4">
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm cursor-pointer hover:bg-orange-500 hover:text-white transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      </div>
          </div>
          {/* Follow Us Section */}
                <div className="p-6 bg-gray-50 shadow-md mb-8">
                <h3 className="font-bold text-lg mb-4 border-b pb-2">Follow Us</h3>
                <div className="space-y-4">
                  <div className="flex justify-center gap-5 ">
                      <FaFacebook  className="hover:bg-gray-400 w-10 h-10"/>
                      <FaTwitter className="hover:bg-gray-400 w-10 h-10"/>
                      <FaSquareInstagram className="hover:bg-gray-400 w-10 h-10"/>
                      <FaSquarePinterest className="hover:bg-gray-400 w-10 h-10"/>
                      <FaYoutube className="hover:bg-gray-400 w-10 h-10"/>
                  </div>
                  </div>
                </div>

    </div>
  );
};

// Main Content
const ProductGrid = () => {
    const products = [
        { id: 1, name: "Fresh Lemon", price: "$38.00", oldPrice: "$45.00", image: "/ourshop-img/img- (1).png", category: "Drink" },
        { id: 2, name: "Chocolate Waffle", price: "$28.00", oldPrice: "$30.00", image: "/ourshop-img/img- (2).png", category: "Dessert" },
        { id: 3, name: "Burger", price: "$21.00", oldPrice: "$25.00", image: "/ourshop-img/img- (3).png", category: "Burger" },
        { id: 4, name: "Country Burger", price: "$45.00", oldPrice: "$49.00", image: "/ourshop-img/img- (4).png", category: "Pizza" },
        { id: 5, name: "Drink", price: "$23.00", oldPrice: "$28.00", image: "/ourshop-img/img- (5).png", category: "Sandwiches" },
        { id: 6, name: "Pizza", price: "$43.00", oldPrice: "$45.00", image: "/ourshop-img/img- (6).png", category: "Drink" },
        { id: 7, name: "Cheese Butter", price: "$35.00", oldPrice: "$37.00", image: "/ourshop-img/img- (7).png", category: "Desert" },
        { id: 8, name: "Sandwiches", price: "$38.00", oldPrice: "$42.00", image: "/ourshop-img/img- (8).png", category: "Burger" },
        { id: 9, name: "Chicken chup", price: "$18.00", oldPrice: "$22.00", image: "/ourshop-img/img- (9).png", category: "Pizza" },
        { id: 10, name: "Country Burger", price: "$26.00", oldPrice: "$30.00", image: "/ourshop-img/img- (10).png", category: "Sandwiches" },
        { id: 11, name: "Drink", price: "$33.00", oldPrice: "$36.00", image: "/ourshop-img/img- (11).png", category: "Drink" },
        { id: 12, name: "Pizza", price: "$40.00", oldPrice: "$44.00", image: "/ourshop-img/img- (12).png", category: "Desert" },
        { id: 13, name: "Cheese Butter", price: "$24.00", oldPrice: "$28.00", image: "/ourshop-img/img- (13).png", category: "Burger" },
        { id: 14, name: "Sandwiches", price: "$34.00", oldPrice: "$40.00", image: "/ourshop-img/img- (5).png", category: "Pizza" },
        { id: 15, name: "Chicken Chup", price: "$10.00", oldPrice: "$14.00", image: "/ourshop-img/img- (7).png", category: "Sandwiches" },
        // Add more products as needed
    ];

  return (

    <div className="w-full md:w-3/4">
      {/* Sort By and Show */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <label htmlFor="sortBy" className="text-gray-700 font-medium mr-2">Sort By:</label>
            <select id="sortBy" className="border rounded-md px-4 py-2 bg-white text-gray-700 focus:ring-2 focus:ring-orange-500">
              <option value="newest">Newest</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="show" className="text-gray-700 font-medium mr-2">Show:</label>
            <select id="show" className="border rounded-md px-4 py-2 bg-white text-gray-700 focus:ring-2 focus:ring-orange-500">
              <option value="default">Default</option>
              <option value="10">10 Items</option>
              <option value="20">20 Items</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Image
                src={product.image}
                alt={product.name}
                width={412}
                height={330}
                className="object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-bold">{product.price}</span>
                    <span className="text-gray-400 line-through">{product.oldPrice}</span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

// Main Layout
const MainLayout = () => {
  return (
    <div>
        {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/Header-bg.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Our Shop</h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">Home</Link>
          <span className="text-orange-500">›</span>
          <span className="text-orange-500">Shop</span>
        </p>
      </div>
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
      {/* Main Content */}
      <ProductGrid />
      {/* Sidebar */}
      <Sidebar />
    </div>
    </div>
  );
};

export default MainLayout;
