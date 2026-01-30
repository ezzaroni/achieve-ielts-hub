import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PartnersSection from "@/components/landing/PartnersSection";
import ProgramSection from "@/components/landing/ProgramSection";
import AchievedSection from "@/components/landing/AchievedSection";
import StudyBuddySection from "@/components/landing/StudyBuddySection";
import MarqueeSection from "@/components/landing/MarqueeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero with Navbar */}
      <div className="relative">
        <div className="absolute inset-0 gradient-hero" />
        <Navbar />
        <HeroSection />
      </div>

      {/* Partner Logos */}
      <PartnersSection />

      {/* Program Classes */}
      <ProgramSection />

      {/* Achieved For Section */}
      <AchievedSection />

      {/* Study Buddy Section */}
      <StudyBuddySection />

      {/* Marquee */}
      <MarqueeSection />
    </div>
  );
};

export default Index;
