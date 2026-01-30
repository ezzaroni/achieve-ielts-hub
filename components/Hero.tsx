import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Star, Trophy } from 'lucide-react';
import { ScoreCard } from './ScoreCard';
import { motion, Variants, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import gsap from 'gsap';

// Updated Student Image URL
const Student = "https://iili.io/fsUV8ue.md.png";

const AnimatedBandScore = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(1));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Hero = () => {
  // Refs for GSAP animations
  const trophyRef = useRef(null);
  const testimonialRef = useRef(null);
  const bandScoreRef = useRef(null);
  const skillCardRef = useRef(null);
  const arrowRef = useRef(null);

  // GSAP Floating Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Trophy floats
      gsap.to(trophyRef.current, {
        y: -15,
        rotation: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Testimonial card floats
      gsap.to(testimonialRef.current, {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });

      // Band score bobbing
      gsap.to(bandScoreRef.current, {
        y: -8,
        x: 5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });

      // Skill card slow float
      gsap.to(skillCardRef.current, {
        y: -5,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.2
      });
      
      // Arrow wiggle
      gsap.to(arrowRef.current, {
        rotation: 5,
        x: 3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });

    return () => ctx.revert();
  }, []);

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 10 }
    }
  };

  const popInVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  };

  return (
    <section className="relative pt-14 pb-0 md:pt-20 lg:pt-24 overflow-visible">
      
      {/* Main Content Container */}
      <motion.div 
        className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        
        {/* Top Badge */}
        <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-[#155d66] text-white/90 text-xs font-medium mb-6 border border-white/10 backdrop-blur-sm shadow-sm">
          #1st Test IELTS on 2026
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-5xl lg:text-7xl text-white font-medium leading-[1.1] mb-6 max-w-5xl mx-auto drop-shadow-sm">
          Grow up your skills by online <br className="hidden md:block" />
          courses with Onlearning
        </motion.h1>

        {/* Subtext */}
        <motion.p variants={itemVariants} className="text-white/90 text-sm md:text-base max-w-2xl mx-auto mb-10 font-light tracking-wide">
          Join 200,000+ students acing their English exams with real test practice, instant AI feedback, and smart study plans
        </motion.p>

        {/* Main CTA */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8 relative z-50">
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-yellow text-brand-dark px-10 py-4 rounded-full font-serif text-xl hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl"
          >
            Enroll Our Practies Free
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 bg-brand-yellow text-brand-dark rounded-full flex items-center justify-center hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl group"
          >
            <ArrowUpRight size={28} strokeWidth={2} className="group-hover:rotate-45 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Visual Composition Area */}
        <div className="relative w-full max-w-[1400px] mx-auto h-[600px] md:h-[700px] mt-8 flex justify-center">
          
          {/* Perfect Semi-Circle Background */}
          {/* Dimensions set to 1188px width and 594px height (exactly half) for perfect semi-circle */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute bottom-0 bg-white/10 backdrop-blur-md border-t border-white/20 shadow-2xl shadow-teal-900/5 z-0"
            style={{ 
              width: '1188px',
              height: '594px', 
              maxWidth: '95vw',
              maxHeight: '47.5vw', // Maintain aspect ratio on smaller screens
              borderRadius: "594px 594px 0 0" 
            }}
          ></motion.div>
          
          {/* Main Student Image - Centered on top of the arc */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="absolute bottom-0 z-10 w-[320px] md:w-[450px] lg:w-[580px] flex justify-center items-end"
          >
             <img 
               src={Student}
               alt="Happy Student" 
               className="w-full h-auto object-cover"
               style={{ 
                 filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))'
               }}
             />
          </motion.div>

          {/* === FLOATING ELEMENTS === */}

          {/* 1. Text Paragraph (Top Left) */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.8 }}
             className="absolute top-[15%] left-[5%] lg:left-[2%] max-w-[200px] text-left text-white/90 text-sm font-light leading-relaxed hidden lg:block z-20"
           >
             The world’s most effective preparation platform. Guaranteed high scores via former examiner feedback.
          </motion.div>

          {/* 2. 5000+ Students (Middle Left) */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 1.0 }}
             className="absolute top-[40%] left-[5%] lg:left-[2%] hidden lg:flex flex-col gap-1 text-left z-20"
          >
             <span className="text-5xl font-serif text-[#155d66] font-bold opacity-90">5000+</span>
             <div className="flex items-center gap-3">
               <div className="flex -space-x-3">
                 <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-8 h-8 rounded-full border-2 border-teal-500" />
                 <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-8 h-8 rounded-full border-2 border-teal-500" />
                 <img src="https://i.pravatar.cc/100?img=8" alt="User" className="w-8 h-8 rounded-full border-2 border-teal-500" />
               </div>
               <span className="text-xs text-[#155d66] font-medium leading-tight">students have<br/>joined</span>
             </div>
          </motion.div>

          {/* 3. Band Score Pill (Near Student Left Shoulder) */}
          <motion.div variants={popInVariants} className="absolute top-[35%] left-[15%] md:left-[28%] lg:left-[30%] z-30 hidden md:block">
             <div ref={bandScoreRef} className="bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-xl text-teal-800 font-bold text-sm border border-white/50 min-w-[140px] text-center">
                Band Score <AnimatedBandScore value={8.5} />
             </div>
          </motion.div>

          {/* 4. Trophy (Top Right Area) */}
          <motion.div variants={popInVariants} className="absolute top-[20%] right-[25%] lg:right-[32%] text-white/70 hidden md:block z-20">
             <div ref={trophyRef}>
                <Trophy size={48} strokeWidth={1} />
             </div>
          </motion.div>

          {/* 5. Alisa M Testimonial (Top Right Outer) */}
          <motion.div variants={popInVariants} className="absolute top-[22%] right-[5%] lg:right-[12%] hidden md:block w-60 z-20">
             <div ref={testimonialRef} className="bg-white/10 backdrop-blur-md border border-white/30 p-4 rounded-2xl shadow-xl">
                 <div className="flex gap-3 mb-2 items-center">
                     <img src="https://i.pravatar.cc/100?img=32" alt="Alisa" className="w-10 h-10 rounded-full object-cover border-2 border-brand-yellow" />
                     <div className="text-left">
                     <h4 className="text-white font-bold text-sm">Alisa M</h4>
                     <div className="flex text-brand-yellow gap-0.5">
                         {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                     </div>
                     </div>
                 </div>
                 <p className="text-white/95 text-[11px] leading-relaxed font-light text-left">
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                 </p>
            </div>
          </motion.div>

          {/* 6. Learn Practies + Arrow (Middle Right - Next to Hand) */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 1.2, type: 'spring' }}
             className="absolute bottom-[35%] right-[15%] lg:right-[26%] hidden md:block z-20"
          >
            <div className="relative">
              <div 
                className="font-serif text-3xl font-bold text-brand-yellow transform -rotate-6 inline-block mr-2 drop-shadow-sm"
                style={{ WebkitTextStroke: '1.5px white' }}
              >
                Learn
              </div>
              <br />
              <div 
                className="font-serif text-3xl font-bold text-[#155d66] transform -rotate-6 inline-block ml-10 drop-shadow-sm"
                style={{ WebkitTextStroke: '1.5px white' }}
              >
                Practies
              </div>
              
              {/* Hand drawn arrow pointing to Score Card */}
              <div ref={arrowRef} className="absolute top-10 left-full ml-2 w-16 h-16 text-[#155d66] origin-top-left" style={{ transform: 'rotate(45deg)' }}>
                  <svg viewBox="0 0 100 100" fill="none">
                     <path d="M10,0 Q50,10 60,60" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                     <path d="M50,50 L60,60 L75,50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </div>
            </div>
          </motion.div>

          {/* 7. Score Card (Bottom Right - Overlapping) */}
          <motion.div variants={popInVariants} className="absolute bottom-[10%] right-[5%] lg:right-[18%] hidden md:block z-30">
             <div ref={skillCardRef}>
                 <ScoreCard />
             </div>
          </motion.div>

        </div>

      </motion.div>

    </section>
  );
};

export default Hero;