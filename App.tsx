
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { ScienceSection } from './components/ScienceSection';
import { MethodPhases } from './components/MethodPhases';
import { SocialProof } from './components/SocialProof';
import { OfferDetails } from './components/OfferDetails';
import { Guarantee } from './components/Guarantee';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

const App: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-green-500/30">
      <Hero />
      <PainSection />
      <ScienceSection />
      <MethodPhases />
      <SocialProof />
      <OfferDetails />
      <Guarantee />
      <Footer />
      {showSticky && <StickyCTA />}
    </div>
  );
};

export default App;
