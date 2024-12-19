import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MenuPage: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/Header-bg.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Our Menu</h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">Home</Link>
          <span className="text-orange-500">›</span>
          <span className="text-orange-500">Menu</span>
        </p>
      </div>

      <main className="py-12 px-6 md:px-16 lg:px-28">
        {/* Appetizers Section */}
        <div className="bg-gray-50 flex justify-center items-center p-4 -ml-[500]">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="w-[348] h-[426] md:w-1/2 p-4">
          <Image
            src="/menu-img/Start-Menu.png" // Replace with your actual image path
            alt="Dish"
            width={290} // Set the width
            height={426} // Set the height
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">Starter Menu</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold">Alder Grilled Chinook Salmon</h3>
                <p className="text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">32$</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold text-orange-500">Berries and Creme Tart</h3>
                <p className="text-sm text-gray-600">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-sm text-gray-500">700 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">43$</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold">Tormentoso Bush Pizza Pintoage</h3>
                <p className="text-sm text-gray-600">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-sm text-gray-500">1000 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">14$</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Spicy Vegan Potato Curry</h3>
                <p className="text-sm text-gray-600">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">35$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        {/* Main Course Section */}
        <div className="bg-gray-50 flex justify-center items-center p-4 ml-[500]">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="w-[348] h-[426] md:w-1/2 p-4">
          <Image
            src="/menu-img/Main-Course.png" // Replace with your actual image path
            alt="Dish"
            width={290} // Set the width
            height={426} // Set the height
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">Main Course</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold">Optic Big Breakfast Combo Manu</h3>
                <p className="text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">32$</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold text-orange-500">Cashew Chicken with Stir-Fry</h3>
                <p className="text-sm text-gray-600">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-sm text-gray-500">700 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">43$</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold">Vegetables & Green Salad</h3>
                <p className="text-sm text-gray-600">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-sm text-gray-500">1000 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">14$</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Spicy Vegan Potato Curry</h3>
                <p className="text-sm text-gray-600">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">35$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

          {/* Fun Facts Section */}
       
       <section className="bg-black py-12 rounded-lg mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6">
            <div>
            <Image src="/menu-img/Group-1.png" alt="Partner 1" width={96} height={96} className="h-16 mx-auto" />
              <h3 className="text-4xl font-bold text-white">420+</h3>
              <p className="text-sm text-white">Professional Chiefs</p>
            </div>
            <div>
            <Image src="/menu-img/Group-2.png" alt="Partner 1" width={96} height={96} className="h-16 mx-auto" />
              <h3 className="text-4xl font-bold text-white">320+</h3>
              <p className="text-sm text-white">Items Of Food</p>
            </div>
            <div>
            <Image src="/menu-img/Group-3.png" alt="Partner 1" width={96} height={96} className="h-16 mx-auto" />
              <h3 className="text-4xl font-bold text-white">30+</h3>
              <p className="text-sm text-white">Years Of Experience</p>
            </div>
            <div>
            <Image src="/menu-img/Group-4.png" alt="Partner 1"  width={96} height={96} className="h-16 mx-auto" />
              <h3 className="text-4xl font-bold text-white">200+</h3>
              <p className="text-sm text-white">Happy Customers</p>
            </div>
          </div>
        </section>
       
        {/* Dessert Section */}
        <div className="bg-gray-50 flex justify-center items-center p-4 -ml-[500]">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="w-[348] h-[426] md:w-1/2 p-4">
          <Image
            src="/menu-img/Desert.png" // Replace with your actual image path
            alt="Dish"
            width={290} height={426}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">Dessert</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold">Fig & Lemon Cake</h3>
                <p className="text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">32$</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold text-orange-500">Creamy mascarpone Cake</h3>
                <p className="text-sm text-gray-600">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-sm text-gray-500">700 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">43$</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold">Pastry, blueberries, Lemon juice</h3>
                <p className="text-sm text-gray-600">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-sm text-gray-500">1000 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">14$</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Pain au Chocolat</h3>
                <p className="text-sm text-gray-600">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">35$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        {/* Drinks Section */}
        <div className="bg-gray-50 flex justify-center items-center p-4 ml-[500]">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="w-[348] h-[426] md:w-1/2 p-4">
          <Image
            src="/menu-img/Drink.png" // Replace with your actual image path
            alt="Dish"
            width={290} height={96}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">Drinks</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold">Caffe Macchiato</h3>
                <p className="text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">32$</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold text-orange-500">Aperol Spritz Capacianno</h3>
                <p className="text-sm text-gray-600">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-sm text-gray-500">700 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">43$</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold">Caffe Latte Campuri</h3>
                <p className="text-sm text-gray-600">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-sm text-gray-500">1000 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">14$</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Tormentoso BushTea Pintoage</h3>
                <p className="text-sm text-gray-600">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">35$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      

        {/* Partners Section */}
        <section className="py-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">We work with the best people</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <Image src="/menu-img/Partner (1).png" alt="Partner 1"  width={96} height={16} className="h-16 mx-auto" />
            <Image src="/menu-img/Partner (2).png" alt="Partner 2"  width={96} height={16} className="h-16 mx-auto" />
            <Image src="/menu-img/Partner (3).png" alt="Partner 3"  width={96} height={16} className="h-16 mx-auto" />
            <Image src="/menu-img/Partner (4).png" alt="Partner 4"  width={96} height={16} className="h-16 mx-auto" />
            <Image src="/menu-img/Partner (5).png" alt="Partner 5"  width={96} height={16} className="h-16 mx-auto" />
            <Image src="/menu-img/Partner (6).png" alt="Partner 5"  width={96} height={16} className="h-16 mx-auto" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MenuPage;