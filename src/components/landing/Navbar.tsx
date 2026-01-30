import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto text-secondary-foreground">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-secondary-foreground/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-secondary-foreground/30">
          <GraduationCap className="w-5 h-5 text-secondary-foreground" />
        </div>
        <span className="text-xl font-bold tracking-tight">Achieved.Test</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-90">
        <a className="hover:text-primary transition-colors cursor-pointer" href="#">Home</a>
        <a className="hover:text-primary transition-colors cursor-pointer" href="#">Our Test</a>
        <a className="hover:text-primary transition-colors cursor-pointer" href="#">Our Blog</a>
        <a className="hover:text-primary transition-colors cursor-pointer" href="#">Contact us</a>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="dark" size="default" className="px-6">
          Login
        </Button>
        <Button variant="darkIcon" size="icon" className="w-9 h-9">
          <ArrowRight className="w-4 h-4 -rotate-45" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
