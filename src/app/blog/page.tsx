// BlogSection.tsx

import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Search } from 'lucide-react'
import Link from "next/link";

const BlogSection = () => {
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
      const galleryImages = [
        "/why-choose-us-img/img-1.png",
        "/why-choose-us-img/img-2.png",
        "/why-choose-us-img/img-3.png",
        "/why-choose-us-img/img-4.png",
        "/why-choose-us-img/img-5.png",
        "/why-choose-us-img/img-6.png",
      ];
    return (
    <div className="bg-white">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/Header-bg.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Blog</h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">Home</Link>
          <span className="text-orange-500">›</span>
          <span className="text-orange-500">Blog</span>
        </p>
      </div>
      <div className="container mx-auto px-3 py-5 lg:flex gap-8">
        {/* Main Blog Content */}
        <div className="lg:w-2/3 w-full">
          {/* Blog Post 1 */}
          <div className="bg-gray-50 shadow-md mb-8">
            <Image
              src="/Blog-img/img-1.png"
              alt="Blog Post 1"
              width={871}
              height={520}
              className="object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-4 text-gray-500 text-sm">
                <span className="bg-orange-500 text-white px-2 py-1 rounded">
                  14 Feb
                </span>
                <span>Feb 14, 2022</span>
                <span>37</span>
                <span>Admin</span>
              </div>
              <h2 className="text-2xl font-bold mt-4">
                10 Reasons To Do A Digital Detox Challenge
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo, accusamus repudiandae debitis a soluta ipsa libero dolorum magnam nulla molestiae officia possimus ipsum. Dolorum sunt soluta repellendus id blanditiis quam maiores cumque a atque neque, 
                deserunt consectetur ut delectus necessitatibus!
              </p>
              <button className="mt-4 text-orange-500 font-semibold">
                Read More &rarr;
              </button>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-gray-50 shadow-md mb-8">
            <Image
              src="/Blog-img/img-3.png"
              alt="Blog Post 2"
              width={871}
              height={520}
              className="object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-4 text-gray-500 text-sm">
                <span className="bg-orange-500 text-white px-2 py-1 rounded">
                  14 Feb
                </span>
                <span>Feb 14, 2022</span>
                <span>37</span>
                <span>Admin</span>
              </div>
              <h2 className="text-2xl font-bold mt-4">
                10 Delicious Chicken Recipes To Try Today
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea reiciendis ut aspernatur unde tenetur. Aspernatur velit veniam similique quae laboriosam eligendi incidunt mollitia impedit ad itaque provident dolorum in, 
                et quia, earum ut quisquam dicta nostrum nulla numquam qui exercitationem? Consectetur est dolor nam fugit laborum. Nihil quod illum saepe placeat tempore accusantium? Unde possimus pariatur a nam quos nisi omnis eveniet neque officia. 
                Omnis veniam iusto quaerat sed neque!
            </p>
              <button className="mt-4 text-orange-500 font-semibold">
                Read More &rarr;
              </button>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-gray-50 shadow-md mb-8">
            <Image
              src="/Blog-img/img-4.png"
              alt="Blog Post 1"
              width={871}
              height={520}
              className="object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-4 text-gray-500 text-sm">
                <span className="bg-orange-500 text-white px-2 py-1 rounded">
                  14 Feb
                </span>
                <span>Feb 14, 2022</span>
                <span>37</span>
                <span>Admin</span>
              </div>
              <h2 className="text-2xl font-bold mt-4">
                10 Reasons To Do A Digital Detox Challenge
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo, accusamus repudiandae debitis a soluta ipsa libero dolorum magnam nulla molestiae officia possimus ipsum. Dolorum sunt soluta repellendus id blanditiis quam maiores cumque a atque neque, 
                deserunt consectetur ut delectus necessitatibus!
              </p>
              <button className="mt-4 text-orange-500 font-semibold">
                Read More &rarr;
              </button>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="bg-gray-50 shadow-md mb-8">
            <Image
              src="/Blog-img/img-2.png"
              alt="Blog Post 1"
              width={871}
              height={520}
              className="object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-4 text-gray-500 text-sm">
                <span className="bg-orange-500 text-white px-2 py-1 rounded">
                  14 Feb
                </span>
                <span>Feb 14, 2022</span>
                <span>37</span>
                <span>Admin</span>
              </div>
              <h2 className="text-2xl font-bold mt-4">
                10 Reasons To Do A Digital Detox Challenge
              </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo, accusamus repudiandae debitis a soluta ipsa libero dolorum magnam nulla molestiae officia possimus ipsum. Dolorum sunt soluta repellendus id blanditiis quam maiores cumque a atque neque, 
                deserunt consectetur ut delectus necessitatibus! 
              </p>
              <button className="mt-4 text-orange-500 font-semibold">
                Read More &rarr;
              </button>
            </div>
          </div>
        </div>

        

        {/* Sidebar Section */}
        <div className="lg:w-1/3 w-full">
          {/* Search Bar */}
          <div className="p-6 bg-gray-50 shadow-md mb-8 text-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Keywords ..."
              className="bg-white text-gray-400 py-4 px-14 pr-8 outline-black"
            />
            <div className="bg-amber-500">
            <Search className="w-8 h-8 text-gray-400 bg-white absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
          </div>

          {/* Profile Card */}
          <div className="p-6 bg-gray-50 shadow-md mb-8 text-center">
            <Image
              src="/Blog-img/Blogger.png"
              alt="User"
              width={147}
              height={125.45}
              className="mx-auto rounded-full"
            />
            <h3 className="font-bold text-lg mt-4">Prince Miyako</h3>
            <p className="text-orange-500 text-sm mb-2">Blogger & Photographer</p>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex justify-center gap-4 mt-4 hover:text-amber-500">
            <FaFacebook  className="w-6 h-6"/>
            <FaTwitter className="w-6 h-6"/>
            <FaSquareInstagram className="w-6 h-6"/>
            <FaSquarePinterest className="w-6 h-6"/>
            <FaYoutube className="w-6 h-6"/>
            </div>
          </div>
          {/* Recent Posts */}
          <div className="p-6 bg-gray-50 shadow-md mb-8">
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Recent Posts</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Image
                  src="/Foodsection-img/img-1.png"
                  alt="Recent Post"
                  width={120}
                  height={91.58}
                  className="object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold text-gray-700">
                    Lorem ipsum dolor sit amet
                  </p>
                  <span className="text-sm text-gray-500">June 22, 2023</span>
                </div>
              </div>
              <div className="flex gap-4">
              <Image
                  src="/Foodsection-img/img-2.png"
                  alt="Recent Post"
                  width={120}
                  height={91.58}
                  className="object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold text-gray-700">
                    Lorem ipsum dolor sit amet
                  </p>
                  <span className="text-sm text-gray-500">June 22, 2023</span>
                </div>
              </div>
              <div className="flex gap-4">
              <Image
                  src="/Foodsection-img/img-3.png"
                  alt="Recent Post"
                  width={120}
                  height={91.58}
                  className="object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold text-gray-700">
                    Lorem ipsum dolor sit amet
                  </p>
                  <span className="text-sm text-gray-500">June 22, 2023</span>
                </div>
              </div>
              <div className="flex gap-4">
              <Image
                  src="/Foodsection-img/img-4.png"
                  alt="Recent Post"
                  width={120}
                  height={90}
                  className="object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold text-gray-700">
                    Lorem ipsum dolor sit amet
                  </p>
                  <span className="text-sm text-gray-500">June 22, 2023</span>
                </div>
              </div>
              <div className="flex gap-4">
              <Image
                  src="/Foodsection-img/img-5.png"
                  alt="Recent Post"
                  width={120}
                  height={91.58}
                  className="object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold text-gray-700">
                    Lorem ipsum dolor sit amet
                  </p>
                  <span className="text-sm text-gray-500">June 22, 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Menu */}
          <div className="p-6 bg-gray-50 shadow-md">
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Filter By Menu</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between">
                <Image
                src='/Hero-menu-sec-img/img-1.png'
                alt="Chicken Fry"
                width={67}
                height={62}
                 />
                <span>Chicken Fry</span> <span>26</span>
              </li>
              <li className="flex justify-between">
              <Image
                src='/Hero-menu-sec-img/img-2.png'
                alt="Chicken Fry"
                width={67}
                height={62}
                 />
                <span>Burger</span> <span>46</span>
              </li>
              <li className="flex justify-between">
              <Image
                src='/Hero-menu-sec-img/img-3.png'
                alt="Chicken Fry"
                width={67}
                height={62}
                 />
                <span>Pizza</span> <span>16</span>
              </li>
              <li className="flex justify-between">
              <Image
                src='/Hero-menu-sec-img/img-4.png'
                alt=""
                width={67}
                height={62}
                 />
                <span>Fresh Fruits</span> <span>36</span>
              </li>
              <li className="flex justify-between">
              <Image
                src='/Hero-menu-sec-img/img-5.png'
                alt=""
                width={67}
                height={62}
                 />
                <span>Vegetables</span> <span>18</span>
              </li>
            </ul>
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

          <div className="p-6 bg-gray-50 shadow-md mb-8">
      <h3 className="font-bold text-lg mb-4 border-b pb-2">Gallery Images</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Food ${index + 1}`}
              width={40}
              height={40}
              className="w-full rounded-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
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
        </div>
      </div>
  );
};

export default BlogSection;
