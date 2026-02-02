import React from 'react';
import { MaxWidthWrapper } from '../../layout/MaxWidthWrapper';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const Blog: React.FC = () => {
    const articles = [
        { title: "Finding Creativity and Impact in UX: Hannah's Story", author: "Hannah Alifa", date: "19 Jan 2026", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" },
        { title: "How to score Band 8.0 in Speaking with simple tricks", author: "Dony Rasyid", date: "22 Jan 2026", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800" },
        { title: "The ultimate guide to Writing Task 2 for Academic", author: "Jhon Paul", date: "25 Jan 2026", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" }
    ];

  return (
    <section className="bg-[#155a8a] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-[#155a8a] opacity-90"></div>
        
        <MaxWidthWrapper className="relative z-10">
            <div className="flex justify-between items-end mb-12 text-white">
                <a href="#" className="text-sm border-b border-white/50 pb-1 hover:text-white hover:border-white transition">View All Blog</a>
                <div className="text-right">
                    <p className="text-sm opacity-70 mb-1">from our blog</p>
                    <h2 className="text-4xl font-light">Blog and <span className="font-bold">Article</span></h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((article, idx) => (
                    <div key={idx} className="bg-white rounded-[2rem] overflow-hidden relative group h-[400px] cursor-pointer shadow-xl">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                             <div className="inline-block bg-white/20 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white mb-2">
                                {article.author}
                             </div>
                             <h3 className="text-white font-bold text-lg leading-tight mb-3 group-hover:underline decoration-white/50 underline-offset-4">
                                {article.title}
                             </h3>
                             <div className="text-xs text-white/60">{article.date} | Success Story</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12 gap-4">
                 <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition">
                    <ArrowLeft className="w-5 h-5" />
                 </button>
                 <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition">
                    <ArrowRight className="w-5 h-5" />
                 </button>
            </div>
        </MaxWidthWrapper>
    </section>
  );
};