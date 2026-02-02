import React, { useState, useEffect } from 'react';
import { MaxWidthWrapper } from '../../layout/MaxWidthWrapper';
import { Instagram } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our Test', href: '#test-modules' },
    { name: 'Our Blog', href: '#' },
    { name: 'Contact us', href: '#' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent"
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
             <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L40 34.641H0L20 0Z" fill={isScrolled ? "#1d7eb6" : "white"}/>
                <circle cx="20" cy="22" r="6" fill={isScrolled ? "white" : "#1d7eb6"}/>
             </svg>
          </div>
          <span className={cn("text-xl font-bold tracking-tight", isScrolled ? "text-gray-900" : "text-white")}>
            achieved<span className="font-light opacity-60">.test</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled ? "text-gray-600 hover:text-primary" : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Icon (Instagram-like) */}
        <div className="flex items-center">
          <button className={cn(
            "p-2 rounded-xl border transition-all", 
            isScrolled ? "border-gray-200 text-gray-800" : "border-white/20 text-white bg-white/10 backdrop-blur-sm"
          )}>
            <div className="w-6 h-6 border-2 border-current rounded-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-current rounded-full" />
            </div>
          </button>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};