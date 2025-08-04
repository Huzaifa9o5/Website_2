"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      } bg-white`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
              <i className="ri-cpu-line text-white text-lg"></i>
            </div> */}
              <Image
                src={logo}
                alt="Teresol Logo"
                className="object-contain w-auto h-10"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className="text-grey-700 hover:text-blue-600 hover:scale-110 transition-all duration-300 font-medium whitespace-nowrap transform"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-grey-700 hover:text-blue-600 hover:scale-110 transition-all duration-300 font-medium whitespace-nowrap transform"
            >
              About Us
            </Link>

            <div className="relative group">
              <button
                className="text-grey-700 hover:text-blue-600 hover:scale-110 transition-all duration-300 font-medium whitespace-nowrap flex items-center transform"
                onClick={() => handleDropdownToggle("solutions")}
              >
                Solutions
                {/* <i className="ri-arrow-down-s-line ml-1 transition-transform duration-300 group-hover:rotate-180"></i> */}
              </button>
              {/* <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border transition-all duration-300 transform ${
                  activeDropdown === "solutions"
                    ? "opacity-100 visible scale-100"
                    : "opacity-0 invisible scale-95"
                }`}
              > */}
                {/* <div className="p-4 space-y-2">
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 py-2 px-3 rounded-lg transform"
                  >
                    IoT Solutions
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 py-2 px-3 rounded-lg transform"
                  >
                    Industrial Automation
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 py-2 px-3 rounded-lg transform"
                  >
                    Smart Systems
                  </Link>
                </div> */}
              {/* </div> */}
            </div>

            <div className="relative group">
              <button
                className="text-grey-700 hover:text-blue-600 hover:scale-110 transition-all duration-300 font-medium whitespace-nowrap flex items-center transform"
                onClick={() => handleDropdownToggle("products")}
              >
                Products
                <i className="ri-arrow-down-s-line ml-1 transition-transform duration-300 group-hover:rotate-180"></i>
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border transition-all duration-300 transform ${
                  activeDropdown === "products"
                    ? "opacity-100 visible scale-100"
                    : "opacity-0 invisible scale-95"
                }`}
              >
                <div className="p-4 space-y-2">
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 py-2 px-3 rounded-lg transform"
                  >
                    Hardware Devices
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 py-2 px-3 rounded-lg transform"
                  >
                    Software Platforms
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 py-2 px-3 rounded-lg transform"
                  >
                    Embedded Systems
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="#"
              className="text-grey-700 hover:text-blue-600 hover:scale-110 transition-all duration-300 font-medium whitespace-nowrap transform"
            >
              Services
            </Link>

            <div className="relative group">
              <button
                className="text-grey-700 hover:text-blue-600 hover:scale-110 transition-all duration-300 font-medium whitespace-nowrap flex items-center transform"
                onClick={() => handleDropdownToggle("resources")}
              >
                Resources
                <i className="ri-arrow-down-s-line ml-1 transition-transform duration-300 group-hover:rotate-180"></i>
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border transition-all duration-300 transform ${
                  activeDropdown === "resources"
                    ? "opacity-100 visible scale-100"
                    : "opacity-0 invisible scale-95"
                }`}
              >
                <div className="p-4 space-y-2">
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 py-2 px-3 rounded-lg transform"
                  >
                    Documentation
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 py-2 px-3 rounded-lg transform"
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="#downloads"
                    className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 py-2 px-3 rounded-lg transform"
                  >
                    Downloads
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="#"
              className="text-gre-700 hover:text-blue-600 hover:scale-110 transition-all duration-300 font-medium whitespace-nowrap transform"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-grey-700 hover:text-blue-600 hover:scale-110 transition-all duration-300 font-medium whitespace-nowrap transform"
            >
              Careers{" "}
            </Link>

            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-blue-600 hover:scale-110 hover:shadow-xl transition-all duration-300 font-medium whitespace-nowrap transform active:scale-95">
              Get Quote
            </button>
          </div>

          <button
            className="lg:hidden w-6 h-6 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i
              className={`ri-${
                isMobileMenuOpen ? "close" : "menu"
              }-line text-xl`}
            ></i>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="#home"
                className="text-gray-700 hover:text-black transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-black transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="#solutions"
                className="text-gray-700 hover:text-black transition-colors duration-300"
              >
                Solutions
              </Link>
              <Link
                href="#products"
                className="text-gray-700 hover:text-black transition-colors duration-300"
              >
                Products
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-black transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="#resources"
                className="text-gray-700 hover:text-black transition-colors duration-300"
              >
                Resources
              </Link>
              <Link
                href="#blog"
                className="text-gray-700 hover:text-black transition-colors duration-300"
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-black transition-colors duration-300"
              >
                Contact
              </Link>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 w-fit whitespace-nowrap">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
