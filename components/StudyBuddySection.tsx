import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const StudyBuddySection = () => {
  return (
    <section className="bg-[#fff8ed] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        
        {/* Left Image Side */}
        <motion.div 
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full md:w-1/2 relative flex justify-center"
        >
           {/* Decorative Elements */}
           <div className="absolute top-0 left-0 text-gray-200/50">
             <Trophy size={100} strokeWidth={1} />
           </div>
           
           <div className="absolute top-10 right-20 font-serif text-6xl text-gray-200 font-bold rotate-12">100</div>
           
           {/* Student Image */}
           <div className="relative z-10">
             <img 
               src="https://iili.io/fsr4Q0X.png" // Placeholder for Asian students couple
               alt="Students" 
               className="w-full max-w-md object-contain"
               style={{ 
                 maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
               }}
               onError={(e) => {
                 e.currentTarget.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop";
               }}
             />
             
             {/* Floating Badge */}
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="absolute bottom-10 -right-4 md:-right-8 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 z-20"
             >
               <span className="bg-brand-yellow rounded-full p-1">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                   <path d="M20 6L9 17l-5-5" />
                 </svg>
               </span>
               <div className="flex flex-col text-left">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Come on!</span>
                  <span className="text-sm font-bold text-gray-900">You Can do it</span>
               </div>
             </motion.div>
           </div>
        </motion.div>

        {/* Right Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-left"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Meet Achieved, <br/>
            <span className="relative">
              Your Study Buddy.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow/50 -z-10" viewBox="0 0 200 9" fill="currentColor">
                <path d="M2.00025 6.99997C48.5833 2.83329 148.5 -2.50013 198 3.50002" />
              </svg>
            </span>
          </h2>

          <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed mb-10">
            <p>
              Let's be honest— studying for English exam isn't easy, and staying motivated can be tough. That's where Lumie, our cheerful flame mascot and study buddy, lights up your journey. She is here to support your exam preparation with focus and encouragement. With her bright personality, Lumie reminds you to stay on track, stay disciplined, and make every study session count.
            </p>
            <p>
              Whether you're reviewing with AI-scored tasks or building skills, Lumie's with you—making test preparation feel less stressful and truly rewarding from the first step to your exam day.
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#155d66] text-white px-10 py-4 rounded-full font-serif text-lg font-medium hover:bg-[#0e454d] transition-all shadow-lg hover:shadow-xl"
          >
            Join Free
          </motion.button>

        </motion.div>
      </div>
    </section>
  );
};

export default StudyBuddySection;