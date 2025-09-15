"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">The Hard Cash</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Professional debt management and recovery services with integrity and quality. 
              Trusted by major banks and financial institutions for effective debt recovery solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm">
                  contact@thehardcash.com
                </li>
                <li className="text-gray-300 text-sm">
                  +91 12345 67890
                </li>
                <li className="text-gray-300 text-sm">
                  24/7 Support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 The Hard Cash. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-4 right-4 w-3 h-3 bg-yellow-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-2 h-2 bg-yellow-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
    </footer>
  );
}