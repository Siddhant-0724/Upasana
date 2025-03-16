import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logoimage.jpg";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  console.log(user);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-1 gap-40 text-gray-800 bg-white shadow-md">
      {/* Logo */}
      <div className="h-20 w-20 mr-auto">
        <img
          src={logo}
          alt="Logo"
          onClick={() => navigate("/")}
          className="h-full w-auto ml-12 cursor-pointer"
        />
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-16 ml-auto text-md">
        <li>
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>
        </li>
        <li>
          <a href="#shop" className="hover:text-blue-400">
            Shop
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-400">
            About Us
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Desktop Button for User or Signup */}
      {user ? (
        <span className="hidden md:flex  text-gray-800 mr-8">
          <h1>
            <span className="text-orange-400 text-xl font-semibold">
              Namaste!{" "}
            </span>
            <p className="text-sm">{user.firstName}</p>
          </h1>
        </span>
      ) : (
        <button className="hidden md:flex bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 shadow-sm mr-6">
          <Link to="/signup">Signup</Link>
        </button>
      )}

      {/* Mobile Login & Menu Icon */}
      <div className="flex items-center gap-4 md:hidden">
        <button
          className="text-gray-800 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        {user ? (
          <h1 className="text-gray-800 mr-3">
            <span className="text-orange-400 text-xl font-semibold">
              Namaste!{" "}
            </span>
            <p className="text-sm">{user.firstName}</p>
          </h1>
        ) : (
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 shadow-sm">
            <Link to="/signup">Signup</Link>
          </button>
        )}
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <ul className="absolute top-22 left-0 w-full bg-white text-center space-y-6 py-8 shadow-lg z-50 md:hidden">
          <li>
            <a href="#home" className="block hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#shop" className="block hover:text-blue-400">
              Shop
            </a>
          </li>
          <li>
            <a href="#about" className="block hover:text-blue-400">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="block hover:text-blue-400">
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
