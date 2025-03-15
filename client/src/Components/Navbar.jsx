import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logoimage.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 gap-40 text-gray-800 bg-white shadow-md">
      {/* Logo */}
      <div className="h-20 w-20 mr-auto">
        <img src={logo} alt="Logo" className="h-full w-auto ml-12" />
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-16 ml-auto text-md">
        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
        <li><a href="#shop" className="hover:text-blue-400">Shop</a></li>
        <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact Us</a></li>
      </ul>

      {/* Desktop Login Button */}
      <button className="hidden md:flex bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 shadow-sm mr-6">
        <Link to="/login">Login</Link>
      </button>

      {/* Mobile Login & Menu Icon */}
      <div className="flex items-center gap-4 md:hidden">
        <button className="text-gray-800 text-2xl" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 shadow-sm">
          <Link to="/login">Login</Link>
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <ul className="absolute top-22 left-0 w-full bg-white text-center space-y-6 py-8 shadow-lg z-50 md:hidden">
          <li><a href="#home" className="block hover:text-blue-400">Home</a></li>
          <li><a href="#shop" className="block hover:text-blue-400">Shop</a></li>
          <li><a href="#about" className="block hover:text-blue-400">About Us</a></li>
          <li><a href="#contact" className="block hover:text-blue-400">Contact Us</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
