import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { PersonasSection } from '../components/PersonasSection';
import { PainFixSection } from '../components/PainFixSection';
import { WhyZenSection } from '../components/WhyZenSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { BookingSection } from '../components/BookingSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <PersonasSection />
      <PainFixSection />
      <WhyZenSection />
      <HowItWorksSection />
      <BookingSection />
    </div>
  );
}
