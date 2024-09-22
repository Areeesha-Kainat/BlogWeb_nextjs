"use client"
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-lg font-bold text-gray-800">AK_Blogs</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-black">
              Home
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-black">
            Login
            </Link>
            
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-gray-600 hover:text-black">
              Home
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-black">
            Login
            </Link>
            
            
        </div>
      )}
    </nav>
  );
};

export default Nav;
