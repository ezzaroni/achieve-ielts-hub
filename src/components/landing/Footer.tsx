import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { ArrowUp } from "lucide-react";

const Avatar = ({
  src,
  color,
  className,
}: {
  src: string;
  color: string;
  className?: string;
}) => (
  <div
    className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${color} p-1 shadow-xl transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300 cursor-pointer ${className}`}
  >
    <img
      src={src}
      className="w-full h-full rounded-full object-cover border-2 border-background"
      alt="Student"
    />
  </div>
);

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted pt-24 pb-0 relative overflow-hidden">
      <MaxWidthWrapper className="relative z-10 flex flex-col items-center text-center">
        {/* Top Text */}
        <div className="mb-0 md:mb-10 w-full relative z-20">
          <h2 className="text-muted-foreground text-3xl md:text-5xl font-bold mb-2 tracking-tight">
            Boost your brain
          </h2>
          <h2 className="text-foreground text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Boost your score
          </h2>
        </div>

        {/* Globe/Visual Area */}
        <div className="w-full h-[400px] md:h-[500px] relative -mt-16 md:-mt-24 flex items-center justify-center">
          {/* Simple Globe Representation */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 relative shadow-2xl">
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
            
            {/* Floating Avatars */}
            <Avatar
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80"
              color="bg-secondary"
              className="absolute -top-4 left-1/4"
            />
            <Avatar
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80"
              color="bg-primary/30"
              className="absolute top-1/4 -left-4"
            />
            <Avatar
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
              color="bg-primary/30"
              className="absolute top-1/4 -right-4"
            />
            <Avatar
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
              color="bg-secondary"
              className="absolute -bottom-4 left-1/3"
            />
            <Avatar
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&q=80"
              color="bg-primary/30"
              className="absolute bottom-1/4 -right-4"
            />
          </div>

          {/* Gradient Fade Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-foreground via-foreground/10 to-transparent pointer-events-none z-10"></div>
        </div>
      </MaxWidthWrapper>

      {/* Bottom Dark Bar */}
      <div className="bg-foreground text-background py-12 px-6 md:px-12 rounded-t-[3rem] -mt-32 relative z-20 shadow-2xl border-t border-background/5">
        <MaxWidthWrapper className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-background rounded-tr-xl rounded-bl-xl flex items-center justify-center">
              <div className="w-5 h-5 bg-foreground rounded-full" />
            </div>
            <span className="font-bold text-xl">achieved</span>
          </div>

          {/* Newsletter */}
          <div className="bg-background rounded-full p-1 pl-6 flex items-center w-full max-w-md shadow-lg">
            <input
              type="email"
              placeholder="Subscribe now"
              className="flex-grow bg-transparent text-foreground text-sm outline-none placeholder-muted-foreground"
            />
            <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition shadow-md">
              Subscribe
            </button>
          </div>

          {/* Scroll Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition shadow-lg shadow-primary/30 md:absolute md:right-12 md:-top-6 transform hover:-translate-y-1"
          >
            <ArrowUp className="w-6 h-6 text-primary-foreground" />
          </button>
        </MaxWidthWrapper>

        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-xs mt-12 border-t border-muted-foreground/20 pt-8 gap-4">
          <p>© 2024 Achieved.test. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
