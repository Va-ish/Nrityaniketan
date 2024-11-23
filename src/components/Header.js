import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
  return (
    <section className="container mx-auto my-2 flex items-center justify-between">
             <nav>
        <div className="container mx-auto my-2 flex items-center justify-between">
          <div className="text-yellow-100  text-xl font-semibold">
            Nrityaniketan
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="group px-3 py-2 rounded-md text-yellow-100 relative"
            >
              <span>Home</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-yellow-100 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-yellow-100 group-hover:w-3/6"></span>
            </Link>

            <Link
              to="/about"
              className="group px-3 py-2 rounded-md text-yellow-100 relative"
            >
              <span>About</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-yellow-100 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-yellow-100 group-hover:w-3/6"></span>
            </Link>

            <Link
              to="/gallery"
              className="group px-3 py-2 rounded-md text-yellow-100 relative"
            >
              <span>Gallery</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-yellow-100 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-yellow-100 group-hover:w-3/6"></span>
            </Link>

            <Link
              to="/admission"
              className="group px-3 py-2 rounded-md text-yellow-100 relative"
            >
              <span>Admission</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-yellow-100 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-yellow-100 group-hover:w-3/6"></span>
            </Link>

            <Link
              to="/contact"
              className="group px-3 py-2 rounded-md text-yellow-100 relative"
            >
              <span>Contact</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-yellow-100 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-yellow-100 group-hover:w-3/6"></span>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-yellow-100  focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <Link
            to="/"
            className="block text-yellow-100  hover:bg-yellow-950 px-3 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-yellow-100  hover:bg-yellow-950 px-3 py-2 rounded-md"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="block text-yellow-100  bg-yellow-950 px-3 py-2 rounded-md"
          >
            Gallery
          </Link>
          <Link
            to="/admission"
            className="block text-yellow-100  bg-yellow-950 px-3 py-2 rounded-md"
          >
            Admission
          </Link>
          <Link
            to="/contact"
            className="block text-yellow-100  hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Contact
          </Link>
        </div>
      </nav>
          </section>
  )
}
