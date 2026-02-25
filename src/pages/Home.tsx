import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { PersonasSection } from '../components/PersonasSection';
import { PainFixSection } from '../components/PainFixSection';
import { WhyZenSection } from '../components/WhyZenSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { BookingSection } from '../components/BookingSection';

export default function Home() {
  useEffect(() => { document.title = 'Zen Books — QuickBooks Bookkeeping for Small Business | Scranton, PA'; }, []);
  return (
    <>
      <HeroSection />
      <PersonasSection />
      <PainFixSection />
      <WhyZenSection />
      <HowItWorksSection />
      <BookingSection />
    </>
  );
}
