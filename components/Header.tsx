import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-50 w-full pt-8 px-10 md:px-24 lg:px-48 flex items-center text-white"
    >
      {/* Logo Container - Takes up available space to push nav to center */}
      <div className="flex-1 flex justify-start">
        <div className="flex items-center gap-2 font-serif font-bold text-xl tracking-tight cursor-pointer">
          <div className="relative w-8 h-8">
            {/* Abstract Logo Icon */}
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
              <path d="M12 2L2 22H22L12 2Z" fill="currentColor" fillOpacity="0.3" />
              <path d="M12 6L4.5 22H19.5L12 6Z" fill="currentColor" />
            </svg>
          </div>
          <span>Achieved.Test</span>
        </div>
      </div>

      {/* Navigation - Centered */}
      <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-12 text-lg font-medium text-white/90">
        <a href="#" className="hover:text-white transition-colors relative group">
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
        </a>
        <a href="#" className="hover:text-white transition-colors relative group">
          Our Test
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
        </a>
        <a href="#" className="hover:text-white transition-colors relative group">
          Our Blog
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
        </a>
        <a href="#" className="hover:text-white transition-colors relative group">
          Contact us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all group-hover:w-full"></span>
        </a>
      </nav>

      {/* CTA - Takes up available space */}
      <div className="flex-1 flex justify-end items-center gap-3">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-dark text-white px-7 py-3 rounded-full font-medium hover:bg-gray-900 transition-all text-sm shadow-md"
        >
          Login
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-all shadow-md group"
        >
          <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;