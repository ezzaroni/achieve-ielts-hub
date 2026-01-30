import React from 'react';
import { motion } from 'framer-motion';

const AchievedSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-6 py-2 rounded-full bg-[#d6eaea] text-[#1e6f7a] font-medium text-sm mb-8"
        >
          Why Achieved Test?
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-16"
        >
          Achieved For Students, Professionals, & Dreamers
        </motion.h2>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto h-auto md:h-[500px] grid grid-cols-1 md:grid-cols-5 gap-6">
          
          {/* Large Card Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-[#155d66] rounded-[40px] h-80 md:h-full relative overflow-hidden group shadow-xl"
          >
             {/* Abstract Content Placeholder */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0f4a52] to-[#1a707a]"></div>
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>
          </motion.div>

          {/* Right Side Grid */}
          <div className="md:col-span-3 flex flex-col gap-6 h-full">
             
             {/* Top Wide Card */}
             <motion.div 
               initial={{ opacity: 0, y: -30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="bg-[#e5e7eb] rounded-[40px] h-64 md:h-1/2 w-full hover:bg-gray-300 transition-colors duration-300"
             ></motion.div>

             {/* Bottom Two Cards */}
             <div className="flex gap-6 h-64 md:h-1/2">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-[#e5e7eb] rounded-[40px] w-1/2 hover:bg-gray-300 transition-colors duration-300"
                ></motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-[#e5e7eb] rounded-[40px] w-1/2 hover:bg-gray-300 transition-colors duration-300"
                ></motion.div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AchievedSection;