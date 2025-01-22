import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#011701] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Grid Layout for Small Screens, Flex for Larger Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between lg:items-start space-y-6 lg:space-y-0">
          {/* Logo and Description */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl font-bold mb-2">Green Bite</h1>
            <p className="text-gray-400 text-center lg:text-left">
              Sustainable and eco-friendly products for a greener tomorrow.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <a href="#about" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#products" className="hover:text-gray-400">
              Our Products
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact Us
            </a>
            <a href="#faq" className="hover:text-gray-400">
              FAQ
            </a>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p>123 Green Street, Eco City</p>
            <p>Email: support@greenbite.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <form className="flex flex-col sm:flex-row sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              />
              <button
                type="submit"
                className="mt-4 sm:mt-0 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-10"></div>

        {/* Footer Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Green Bite. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#facebook" className="hover:text-gray-300">
              Facebook
            </a>
            <a href="#instagram" className="hover:text-gray-300">
              Instagram
            </a>
            <a href="#twitter" className="hover:text-gray-300">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
