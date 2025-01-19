import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Certifications", path: "#certifications" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-primary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-white text-2xl font-bold">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.path}
                className="text-secondary hover:text-white transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.path}
                  className="text-secondary hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;