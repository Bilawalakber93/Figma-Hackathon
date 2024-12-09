import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* Navbar */}
      <nav className="bg-black w-full">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="#" className="text-white text-2xl font-bold">
            Food<span className="text-yellow-500">tuck</span>
          </Link>
          <ul className="hidden md:flex space-x-6 text-white">
            <li><Link href="#" className="hover:text-yellow-500">Home</Link></li>
            <li><Link href="#" className="hover:text-yellow-500">Menu</Link></li>
            <li><Link href="#" className="hover:text-yellow-500">Blog</Link></li>
            <li><Link href="#" className="hover:text-yellow-500">Pages</Link></li>
            <li><Link href="#" className="hover:text-yellow-500">About</Link></li>
            <li><Link href="#" className="hover:text-yellow-500">Shop</Link></li>
            <li><Link href="#" className="hover:text-yellow-500">Contact</Link></li>
          </ul>
          <div className="flex items-center space-x-4 text-white">
            <button className="hover:text-yellow-500">🔍</button>
            <button className="hover:text-yellow-500">🛒</button>
          </div>
        </div>
      </nav>

      {/* 404 Section */}
      <div
        className="bg-cover bg-center w-full h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('Header-bg.png')" }}
      >
        <h1 className="text-4xl font-bold text-white">404 Error</h1>
      </div>

      {/* Sign-In Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-yellow-500" />
              <span className="ml-2 text-sm text-gray-700">Remember me?</span>
            </label>
            <Link href="#" className="text-sm text-yellow-500 hover:underline">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md font-medium hover:bg-yellow-600"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex flex-col space-y-3">
          <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Image
              src="Google.png"
              alt="Google"
              width={-2} height={6}
              className="mr-2"
            />
            Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Image
              src="Apple.png"
              alt="Apple"
              width={-2} height={6}
              className="mr-2"
            />
            Sign up with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
