import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
        {/* Top Newsletter Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2 text-white">
            <span className="text-amber-500">Still</span> You Need Our Support?
          </h2>
          <p className="text-gray-400 mb-4">
          Dont wait! Make a smart & logical quote here. Its pretty easy.
          </p>
          <form className="flex flex-col md:flex-row justify-center items-center gap-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full md:w-1/3 px-4 py-2 rounded-md focus:outline-none text-black"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-all"
            >
              Subscribe Now
            </button>
          </form>
        </div>
        <hr className="border-gray-700 mb-8" />

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* About Us */}
          <div>
            <h3 className="text-white font-semibold mb-3">About Us.</h3>
            <p className="text-gray-400 leading-relaxed">
              Corporate clients and leisure travelers rely on Groundlink for
              dependable, safe, and professional chauffeur service across major
              cities worldwide.
            </p>
            <div className="mt-4">
              <span className="block text-amber-500 font-semibold">
                Opening Hours
              </span>
              <p>Mon - Sat (8.00 - 6.00)</p>
              <p>Sunday - Closed</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Useful Links</h3>
            <ul className="space-y-2">
              {["About", "News", "Partners", "Team", "Menu", "Contacts"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-orange-500">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-white font-semibold mb-3">Help?</h3>
            <ul className="space-y-2">
              {[
                "FAQ",
                "Term & Conditions",
                "Reporting",
                "Documentation",
                "Support Policy",
                "Privacy",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-white font-semibold mb-3">Recent Post</h3>
            <ul className="space-y-3">
              {[1, 2, 3].map((post) => (
                <li key={post} className="flex items-start gap-3">
                  <div>
                    <Image
                      src="/why-choose-us-img/img-3.png"
                      alt="Post Image"
                      width={60}
                      height={59}
                      className="rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold hover:text-amber-500">
                      Keep Your Business
                    </p>
                    <span className="text-gray-400 text-xs">20 Feb 2022</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center text-white text-sm bg-gray-700">
          <p className="text-center md:text-left mb-4 md:mb-0">
            Copyright &copy; 2022 by Ayeman. All Rights Reserved.
          </p>
          <FaFacebook />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
