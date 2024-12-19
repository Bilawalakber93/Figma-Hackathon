"use client";
import React, { useState } from "react";
import Image from "next/image";

const menuCategories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"];

const menuItems = [
  { name: "Lettuce Leaf", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/Hero-menu-sec-img/img-1.png" },
  { name: "Fresh Breakfast", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "14.5$", image: "/Hero-menu-sec-img/img-2.png" },
  { name: "Mild Butter", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/Hero-menu-sec-img/img-3.png" },
  { name: "Fresh Bread", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/Hero-menu-sec-img/img-4.png" },
  { name: "Glow Cheese", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/Hero-menu-sec-img/img-5.png" },
  { name: "Italian Pizza", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "14.5$", image: "/Hero-menu-sec-img/img-6.png" },
  { name: "Slice Beef", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/Hero-menu-sec-img/img-7.png" },
  { name: "Mushroom Pizza", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/Hero-menu-sec-img/img-8.png" },
];

const HeroMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  return (
    <div>
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-center text-amber-500 text-2xl mb-2">Choose & pick</h2>
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-8">
          <span className="text-amber-500">Fr</span>om Our Menu
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category ? "bg-amber-500 text-white" : "text-amber-500 hover:bg-amber-500 hover:text-white"
              } transition-colors duration-300`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">
            <Image
              src="/Hero-menu-sec-img/main.png" // Dynamic image path for the featured dish
              alt="Featured Dish"
              width={466}
              height={362}
              className="rounded-lg object-cover ml-[195px]"
            />
          </div>
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src={item.image} // Construct the src dynamically
                  alt={item.name}
                  width={80} height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  <p className="text-amber-500 font-bold mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroMenu;
