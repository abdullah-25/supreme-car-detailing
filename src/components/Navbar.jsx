// components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black absolute w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-xl font-bold">
              <img
                src={logo}
                alt="Supreme Auto Detailing"
                className="
    h-16 md:h-15
    w-auto 
    drop-shadow-lg 
    hover:scale-105 
    transition-transform 
    duration-200
    filter brightness-110 
    mx-4
    my-2
  "
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="/" className="text-white hover:text-blue-200 px-3 py-2">
                Home
              </a>
              <a
                href="#services"
                className="text-white hover:text-blue-200 px-3 py-2"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="text-white hover:text-blue-200 px-3 py-2"
              >
                Gallery
              </a>
              {/* <a
                href="#contact"
                className="text-white hover:text-blue-200 px-3 py-2"
              >
                Contact
              </a> */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="text-white block px-3 py-2">
              Home
            </a>
            <a href="#services" className="text-white block px-3 py-2">
              Services
            </a>
            <a href="#gallery" className="text-white block px-3 py-2">
              Gallery
            </a>
            <a href="#contact" className="text-white block px-3 py-2">
              Contact
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
