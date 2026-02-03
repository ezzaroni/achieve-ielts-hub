import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ValueCards } from "@/components/landing/ValueCards";
import { VideoSection } from "@/components/landing/VideoSection";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { TestModules } from "@/components/landing/TestModules";
import { FAQ } from "@/components/landing/FAQ";
import { Blog } from "@/components/landing/Blog";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <ValueCards />
        <FeatureSection />
        <TestModules />
        <VideoSection />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
