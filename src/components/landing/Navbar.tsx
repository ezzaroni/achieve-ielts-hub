import { useState, useEffect } from "react";
import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { cn } from "@/lib/utils";
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    href: "#"
  }, {
    name: "Our Test",
    href: "#test-modules"
  }, {
    name: "Our Blog",
    href: "#"
  }, {
    name: "Contact us",
    href: "#"
  }];
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6", isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent")}>
      <MaxWidthWrapper className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            
          </div>
          <span className={cn("text-xl font-bold tracking-tight", isScrolled ? "text-foreground" : "text-white")}>
            achieved
            <span className="font-light opacity-60">.test</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-16">
          {navLinks.map(link => <a key={link.name} href={link.href} className={cn("text-sm font-medium transition-colors", isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white")}>
              {link.name}
            </a>)}
        </div>

        {/* Right Icon */}
        <div className="flex items-center">
          <button className={cn("p-2 rounded-xl border transition-all", isScrolled ? "border-border text-foreground" : "border-white/20 text-white bg-white/10 backdrop-blur-sm")}>
            <div className="w-6 h-6 border-2 border-current rounded-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-current rounded-full" />
            </div>
          </button>
        </div>
      </MaxWidthWrapper>
    </nav>;
};