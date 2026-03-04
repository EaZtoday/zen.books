import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { StrategyCardsSection } from '../components/StrategyCardsSection';
import { WhySection } from '../components/WhySection';
import { BookingSection } from '../components/BookingSection';

export default function Home() {
  useEffect(() => { document.title = 'Zen Books — Bookkeeping for Real Estate Investors | Scranton, PA'; }, []);
  return (
    <>
      <HeroSection />
      <StrategyCardsSection />
      <HowItWorksSection />
      <WhySection />
      <BookingSection />
    </>
  );
}
