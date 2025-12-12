import React from "react";
import logo from "../assets/logoatas.png";
import ekspresiIcon from "../assets/sampinglogo.png";

function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <img src={ekspresiIcon} alt="logo" className="w-15 h-15" />
          <span className="text-xl font-semibold text-[#0A4D9E]">
          </span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-[#0A4D9E] cursor-pointer">Home</li>
          <li className="hover:text-[#0A4D9E] cursor-pointer">About</li>
          <li className="hover:text-[#0A4D9E] cursor-pointer">Program</li>
          <li className="hover:text-[#0A4D9E] cursor-pointer">Project</li>
          <li className="hover:text-[#0A4D9E] cursor-pointer">Testimonials</li>
          <li className="hover:text-[#0A4D9E] cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Icon (opsional) */}
        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
