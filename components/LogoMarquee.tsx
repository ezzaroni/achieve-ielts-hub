import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Harvard University', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/800px-Harvard_University_logo.svg.png' },
  { name: 'Stanford University', src: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Stanford_athletics_wordmark_2015.png' },
  { name: 'MIT', src: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/MIT_Logo_and_Wordmark.svg' },
  { name: 'Oxford', src: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Oxford-Brookes-University-Logo.png' },
  { name: 'Cambridge', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/University_of_Cambridge_logo.png' },
];

const LogoMarquee = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-white py-12 border-b border-gray-100 overflow-hidden relative"
    >
      {/* Container with fade masks on edges */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        {/* First Loop */}
        <div className="flex items-center justify-center md:justify-start [&_div]:mx-12 [&_img]:max-w-none animate-marquee">
          {logos.map((logo, index) => (
            <div key={`a-${index}`} className="flex items-center justify-center min-w-[120px]">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            </div>
          ))}
        </div>

        {/* Second Loop for seamless infinity */}
        <div className="flex items-center justify-center md:justify-start [&_div]:mx-12 [&_img]:max-w-none animate-marquee" aria-hidden="true">
          {logos.map((logo, index) => (
            <div key={`b-${index}`} className="flex items-center justify-center min-w-[120px]">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            </div>
          ))}
        </div>
        
        {/* Third Loop for wider screens to ensure no gaps */}
         <div className="flex items-center justify-center md:justify-start [&_div]:mx-12 [&_img]:max-w-none animate-marquee" aria-hidden="true">
          {logos.map((logo, index) => (
            <div key={`c-${index}`} className="flex items-center justify-center min-w-[120px]">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default LogoMarquee;