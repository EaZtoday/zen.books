import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
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

      {/* Areas We Serve */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-fern mb-6 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4" /> Areas We Serve
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-medium text-warm-900 mb-6"
          >
            Based in Scranton. Serving investors across NEPA and beyond.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-warm-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            We work with real estate investors throughout Northeast Pennsylvania, the Poconos, and the Lehigh Valley — including out-of-state owners with PA rental properties.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { name: 'Scranton', slug: '/scranton-bookkeeping' },
              { name: 'Wilkes-Barre & NEPA', slug: '/wilkes-barre-nepa-bookkeeping' },
              { name: 'Poconos', slug: '/poconos-bookkeeping' },
              { name: 'Lehigh Valley', slug: '/lehigh-valley-bookkeeping' },
            ].map((loc) => (
              <Link
                key={loc.slug}
                to={loc.slug}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cream-300 text-warm-600 hover:border-fern hover:text-fern transition-all text-sm font-medium"
              >
                <MapPin className="w-3.5 h-3.5" /> {loc.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <BookingSection />
      <PainPointToast painPoints={homePainPoints} />
    </>
  );
}
