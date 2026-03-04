import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProblemSection } from '../components/ProblemSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { StrategyCardsSection } from '../components/StrategyCardsSection';
import { WhySection } from '../components/WhySection';
import { BookingSection } from '../components/BookingSection';

export default function Home() {
  useEffect(() => { document.title = 'Zen Books — Bookkeeping for Real Estate Investors | Scranton, PA'; }, []);
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <StrategyCardsSection />
      <HowItWorksSection />
      <WhySection />
      <BookingSection />
    </>
  );
}
