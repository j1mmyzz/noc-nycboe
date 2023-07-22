import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-md">Replace w logo here</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            tab2
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            tab3
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            tab4
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            tab5
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {/* Responsive Hamburger Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-black p-4">
            <a href="#" className="block text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="block text-white hover:text-gray-300">
              tab2
            </a>
            <a href="#" className="block text-white hover:text-gray-300">
              tab3
            </a>
            <a href="#" className="block text-white hover:text-gray-300">
              tab4
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              tab5
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
