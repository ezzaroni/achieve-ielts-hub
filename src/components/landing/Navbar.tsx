import { useState, useEffect } from "react";
import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { Instagram, Linkedin } from "lucide-react";
import logoAchieved from "@/assets/logo-achieved.png";

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
    name: "Vocabulary Tutor",
    href: "#"
  }, {
    name: "Pricing",
    href: "#"
  }];
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6", isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent")}>
      <MaxWidthWrapper className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={logoAchieved} 
            alt="Achieved Logo" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-16">
          {navLinks.map(link => <a key={link.name} href={link.href} className={cn("text-sm font-medium transition-colors", isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white")}>
              {link.name}
            </a>)}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn("p-2 rounded-xl border transition-all hover:scale-105", isScrolled ? "border-border text-foreground hover:bg-muted" : "border-white/20 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20")}
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn("p-2 rounded-xl border transition-all hover:scale-105", isScrolled ? "border-border text-foreground hover:bg-muted" : "border-white/20 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20")}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </MaxWidthWrapper>
    </nav>;
};