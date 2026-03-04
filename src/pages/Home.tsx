import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { StrategyCardsSection } from '../components/StrategyCardsSection';
import { SmallBusinessSection } from '../components/SmallBusinessSection';
import { WhySection } from '../components/WhySection';
import { BookingSection } from '../components/BookingSection';
import { PainPointToast } from '../components/PainPointToast';

const homePainPoints = [
  "I have no idea how much each property is actually making me.",
  "My bookkeeper doesn't understand that a new roof isn't a 'repair.'",
  "I'm years behind and the thought of tax season makes me sick.",
];

export default function Home() {
  useEffect(() => { document.title = 'Zen Books — Bookkeeping for Real Estate Investors | Scranton, PA'; }, []);
  return (
    <>
      <HeroSection />
      <StrategyCardsSection />
      <SmallBusinessSection />
      <HowItWorksSection />
      <WhySection />
      <BookingSection />
      <PainPointToast painPoints={homePainPoints} />
    </>
  );
}
