import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex text-white text-lg">
          <a href="https://www1.nyc.gov">
            <Image
              className="pt-1 pr-[2.25px]"
              src="/nyc_logo.png"
              alt="nyc logo"
              width={60}
              height={60}
            />
          </a>
          | Network Operations Center
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="text-white hover:text-gray-300 active:scale-125"
          >
            Home
          </Link>
          <Link
            href="/tools"
            className="text-white hover:text-gray-300 active:scale-125"
          >
            Tools
          </Link>
          <Link
            href="/notifications"
            className="text-white hover:text-gray-300 active:scale-125"
          >
            Notifications
          </Link>
          <Link
            href="/reports"
            className="text-white hover:text-gray-300 active:scale-125"
          >
            Reports
          </Link>
          <Link
            href="/documents"
            className="text-white hover:text-gray-300 active:scale-125"
          >
            Documents
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 active:scale-125"
          >
            Contact Us
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-black p-1">
            <Link href="/" className="block text-white hover:text-gray-300">
              Home
            </Link>
            <Link
              href="/tools"
              className="block text-white hover:text-gray-300"
            >
              Tools
            </Link>
            <Link
              href="/notifications"
              className="block text-white hover:text-gray-300"
            >
              Notifications
            </Link>
            <Link
              href="/reports"
              className="block text-white hover:text-gray-300"
            >
              Reports
            </Link>
            <Link
              href="/documents"
              className="block text-white hover:text-gray-300"
            >
              Documents
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-gray-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
