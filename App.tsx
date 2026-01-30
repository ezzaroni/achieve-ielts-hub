import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import ProgramSection from './components/ProgramSection';
import AchievedSection from './components/AchievedSection';
import StudyBuddySection from './components/StudyBuddySection';
import FooterStrip from './components/FooterStrip';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden">
      {/* Updated Gradient to be brighter and more vibrant */}
      <div className="relative bg-gradient-to-b from-[#2094a0] via-[#48a9b9] to-[#dcfce7] rounded-b-[40px] md:rounded-b-[80px] overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-50"></div>
        
        <Header />
        <Hero />
      </div>
      
      <main>
        <LogoMarquee />
        <ProgramSection />
        <AchievedSection />
        <StudyBuddySection />
      </main>
      
      <FooterStrip />
    </div>
  );
}