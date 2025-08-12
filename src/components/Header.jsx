import React from "react";

const Header = () => {
  return (
    <header className=" bg-[#eef4ff] flex flex-row items-center justify-start text-left ml-20 items-align-center">
      <img
        src="kassie.png"
        alt="Logo"
        className="h-10 mb-20 mt-6 ml-20 mr-20"
      />
      <nav className="mr-10">
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-600 hover:text-gray-800">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
