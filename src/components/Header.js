import React from 'react';

const Header = () => {
  return (
    <header className=" text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="/path/to/your/logo.png"
          alt="Company Logo"
          className="w-8 h-8 mr-2"
        />
        <span className="text-lg font-bold">Your Company Name</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
