import React, { useState, useEffect } from 'react';
import { TreeDeciduous } from 'lucide-react';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TreeDeciduous className="h-8 w-8 text-nature-leaf" />
          <span className="font-serif text-xl font-medium tracking-tight text-nature-leaf">
            The Mother Tree
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm hover:text-nature-leaf transition-colors duration-300">
            About
          </a>
          <a href="#membership" className="text-sm hover:text-nature-leaf transition-colors duration-300">Giving-Back</a>
          <a href="#contact" className="text-sm hover:text-nature-leaf transition-colors duration-300">
            Contact
          </a>
        </nav>
        
        <button className="px-5 py-2 rounded-full bg-nature-leaf text-white text-sm font-medium transform transition duration-300 hover:shadow-lg hover:scale-105">Connect</button>
      </div>
    </header>;
};
export default Header;