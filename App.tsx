import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { ValueCards } from './components/sections/ValueCards';
import { FeatureSection } from './components/sections/FeatureSection';
import { TestModules } from './components/sections/TestModules';
import { FAQ } from './components/sections/FAQ';
import { Blog } from './components/sections/Blog';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ValueCards />
        <FeatureSection />
        <TestModules />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;