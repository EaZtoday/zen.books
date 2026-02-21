import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { PersonasSection } from '../components/PersonasSection';
import { PainFixSection } from '../components/PainFixSection';
import { WhyZenSection } from '../components/WhyZenSection';
import { HowItWorksSection } from '../components/HowItWorksSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PersonasSection />
      <PainFixSection />
      <WhyZenSection />
      <HowItWorksSection />
    </div>
  );
}
