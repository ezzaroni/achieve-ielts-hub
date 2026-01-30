import React from 'react';
import { motion } from 'framer-motion';

const items = ["Skill Boost", "Scored Mock Test", "Practies Question", "Skill Boost", "Scored Mock Test", "Practies Question"];

const FooterStrip = () => {
  return (
    <div className="relative w-full h-32 overflow-hidden bg-white">
      {/* The scrolling yellow strip */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-brand-yellow py-6 transform -rotate-2 scale-110 shadow-xl z-10 border-y-2 border-black/5">
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div 
            className="flex items-center gap-12 pr-12 animate-marquee"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...items, ...items, ...items].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-black/20"></div>
                <span className="font-serif text-2xl md:text-3xl font-medium text-brand-dark tracking-wide">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FooterStrip;