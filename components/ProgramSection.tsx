import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Calendar, ArrowUpRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Complete IELTS Regulas class",
    rating: 4.0,
    reviews: "2.5k",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop",
    instructor: "VJ. Khaliq",
    price: "Rp.500k",
    avatar: "https://i.pravatar.cc/100?img=11"
  },
  {
    id: 2,
    title: "Complete IELTS Regular class",
    rating: 4.8,
    reviews: "2.5k",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    instructor: "VJ. Khaliq",
    price: "Rp.500k",
    avatar: "https://i.pravatar.cc/100?img=12"
  },
  {
    id: 3,
    title: "Complete IELTS Regulas class",
    rating: 4.5,
    reviews: "2.5k",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    instructor: "VJ. Khaliq",
    price: "Rp.500k",
    avatar: "https://i.pravatar.cc/100?img=13"
  },
  {
    id: 4,
    title: "Complete IELTS Regulas class",
    rating: 4.2,
    reviews: "2.5k",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
    instructor: "VJ. Khaliq",
    price: "Rp.500k",
    avatar: "https://i.pravatar.cc/100?img=14"
  },
  {
    id: 5,
    title: "Complete IELTS Regulas class",
    rating: 4.7,
    reviews: "2.5k",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop",
    instructor: "VJ. Khaliq",
    price: "Rp.500k",
    avatar: "https://i.pravatar.cc/100?img=15"
  },
  {
    id: 6,
    title: "Complete IELTS Regulas class",
    rating: 4.9,
    reviews: "2.5k",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    instructor: "VJ. Khaliq",
    price: "Rp.500k",
    avatar: "https://i.pravatar.cc/100?img=16"
  }
];

const categories = ["All Class", "Regular Class", "Academic Private", "Writing Task", "Speaking"];

const ProgramSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Class");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block px-6 py-2 rounded-full bg-[#d6eaea] text-[#1e6f7a] font-medium text-sm mb-8"
        >
          Our Program Class
        </motion.div>

        {/* Headline with Underline Effect */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight"
        >
          Program Class for Boost Your{' '}
          <span className="relative inline-block">
            Brain and Score
            {/* Yellow Underline Stroke */}
            <motion.svg 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute w-full h-3 -bottom-2 left-0 text-brand-yellow" 
              viewBox="0 0 200 9" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.00025 6.99997C48.5833 2.83329 148.5 -2.50013 198 3.50002" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </motion.svg>
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-500 max-w-2xl mx-auto leading-relaxed font-light text-lg mb-12"
        >
          Automated grading can't catch the nuance of Band 8.0 English. That's why we've put real human examiners.
        </motion.p>
        
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-[#155d66] text-white shadow-md' 
                  : 'bg-[#e0f2f1] text-[#155d66] hover:bg-[#cce8e7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-left"
            >
              {/* Image Container */}
              <div className="relative mb-4 overflow-hidden rounded-2xl h-56">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-brand-yellow">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={14} fill={i < Math.floor(course.rating) ? "currentColor" : "none"} strokeWidth={i < Math.floor(course.rating) ? 0 : 1.5} className={i < Math.floor(course.rating) ? "" : "text-gray-300"} />
                   ))}
                </div>
                <span className="text-xs font-bold text-gray-700 ml-1">{course.rating}</span>
                <span className="text-xs text-gray-400">({course.reviews} review)</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{course.title}</h3>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-y-2 gap-x-4 mb-6 text-[11px] text-gray-500 font-medium">
                <div className="flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                   <span>Online Class</span>
                </div>
                <div className="flex items-center gap-1.5">
                   <Clock size={12} />
                   <span>60 minutes per meet</span>
                </div>
                 <div className="flex items-center gap-1.5">
                   <Calendar size={12} />
                   <span>24 Meet</span>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <img src={course.avatar} alt={course.instructor} className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-sm font-bold text-gray-800">{course.instructor}</span>
                </div>
                <span className="text-teal-600 font-bold text-lg">{course.price}</span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-full font-serif text-lg font-medium hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl"
          >
            Enroll Our Practies Free
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-brand-yellow text-brand-dark rounded-full flex items-center justify-center hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl group"
          >
            <ArrowUpRight size={24} strokeWidth={2} className="group-hover:rotate-45 transition-transform duration-300" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProgramSection;