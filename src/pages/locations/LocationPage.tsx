import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import { BookingSection } from '../../components/BookingSection';
import { PainPointToast } from '../../components/PainPointToast';
import { LocationSchema } from './LocationSchema';
import type { LocationData } from './locationData';

const painPoints = [
  "I have no idea how much each property is actually making me.",
  "My bookkeeper doesn't understand that a new roof isn't a 'repair.'",
  "I'm years behind and the thought of tax season makes me sick.",
];

export default function LocationPage({ data }: { data: LocationData }) {
  useEffect(() => {
    document.title = data.pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', data.metaDescription);
  }, [data]);

  return (
    <>
      <LocationSchema data={data} />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fern-50/50 via-cream to-cream" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-widest uppercase text-fern mb-8 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4" /> {data.heroTag}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-warm-900 leading-[1.05] mb-8 whitespace-pre-line"
          >
            {data.heroHeadline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-warm-600 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            {data.heroSubhead}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-fern text-white px-8 py-4 rounded-full text-base font-medium hover:bg-fern-dark transition-all">
              Book Your Portfolio Review <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-sm text-warm-400 mt-4">Free 30-minute call. No commitment. No judgment.</p>
          </motion.div>
        </div>
      </section>

      {/* Market Insight */}
      <section className="py-32 md:py-40 bg-forest">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-white text-center mb-16"
          >
            {data.marketInsight.title}
          </motion.h2>
          <div className="space-y-6 mb-16">
            {data.marketInsight.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-lg text-forest-400 leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {data.marketInsight.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl font-serif font-medium text-fern-light mb-2">{stat.value}</p>
                <p className="text-sm text-forest-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Challenges */}
      <section className="py-32 md:py-40 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-warm-900 text-center mb-20"
          >
            {data.investorChallenges.title}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {data.investorChallenges.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border border-cream-300 bg-cream-100 hover:border-warm-400 transition-all duration-500 cursor-default"
              >
                <h3 className="text-xl font-serif font-medium text-warm-900 mb-4">{item.title}</h3>
                <p className="text-warm-600 leading-relaxed text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 md:py-40 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-warm-900 text-center mb-20"
          >
            {data.services.title}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {data.services.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-fern mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-serif font-medium text-warm-900 mb-2">{item.title}</h3>
                  <p className="text-warm-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 md:py-40 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-warm-900 text-center mb-20"
          >
            Questions from {data.region} investors.
          </motion.h2>
          <div className="space-y-10">
            {data.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="pb-10 border-b border-cream-200 last:border-0"
              >
                <h3 className="text-lg font-medium text-warm-900 mb-3">{faq.q}</h3>
                <p className="text-warm-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Also Serving */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-warm-400 mb-6">We also serve</p>
          <div className="flex flex-wrap justify-center gap-4">
            {data.otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={loc.slug}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cream-300 text-warm-600 hover:border-fern hover:text-fern transition-all text-sm font-medium"
              >
                <MapPin className="w-3.5 h-3.5" /> {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
      <PainPointToast painPoints={painPoints} />
    </>
  );
}
