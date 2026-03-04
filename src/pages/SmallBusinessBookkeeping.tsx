import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building2, Hammer, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BookingSection } from '../components/BookingSection';
import { PainPointToast } from '../components/PainPointToast';

const pains = [
  "I'm months behind and tax season is coming.",
  "My books are a mess and I don't know where to start.",
  "I need someone who actually understands QuickBooks.",
];

const steps = [
  {
    number: '01',
    title: 'The No-Judgment Review',
    description: 'A quick call to look at your current setup. No shame, just a clear plan forward.',
  },
  {
    number: '02',
    title: 'The Cleanup & Setup',
    description: 'We organize the chaos, reconcile accounts, and build a QuickBooks system that works.',
  },
  {
    number: '03',
    title: 'Monthly Clarity',
    description: 'Clean reports, ongoing support. You stop worrying about your numbers and start trusting them.',
  },
];

const strategies = [
  {
    icon: Building2,
    title: 'Buy & Hold',
    description: 'Per-property P&L and multi-entity tracking for landlords.',
    href: '/buy-and-hold',
  },
  {
    icon: Hammer,
    title: 'Fix & Flip',
    description: 'Per-project cost tracking and true profit on every flip.',
    href: '/fix-and-flip',
  },
  {
    icon: Repeat,
    title: 'Wholesale',
    description: 'Deal-by-deal tracking and marketing ROI for wholesalers.',
    href: '/wholesale',
  },
];

export default function SmallBusinessBookkeeping() {
  useEffect(() => { document.title = 'Small Business Bookkeeping — Done For You | Zen Books, Scranton PA'; }, []);
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/80 via-cream to-cream" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-widest uppercase text-warm-400 mb-8"
          >
            QuickBooks Bookkeeping — Scranton, PA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-warm-900 leading-[1.05] mb-8"
          >
            Small business bookkeeping<br />— done for you.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-warm-600 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            You hand off your messy books once. We keep them clean every month
            in QuickBooks Online — judgment-free, in plain English.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 bg-fern text-white px-8 py-4 rounded-full text-base font-medium hover:bg-fern-dark transition-all"
            >
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-sm text-warm-400 mt-4">Free 30-minute call. No commitment. No judgment.</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-40 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-sm font-medium tracking-widest uppercase text-warm-400 mb-4"
            >
              Getting Started
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-warm-900"
            >
              Three steps to calm.
            </motion.h2>
          </div>
          <div className="space-y-16 md:space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
              >
                <span className="text-7xl md:text-8xl font-serif font-medium text-cream-300 leading-none shrink-0">
                  {step.number}
                </span>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-warm-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-warm-600 leading-relaxed max-w-xl">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialty — The Funnel */}
      <section className="py-32 md:py-40 bg-forest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-sm font-medium tracking-widest uppercase text-accent mb-4"
            >
              Our Specialty
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white mb-6"
            >
              We specialize in real estate investors.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-forest-400 max-w-2xl mx-auto"
            >
              We serve all small businesses — and we go deepest with real estate investors. If that's you, we built something specific.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {strategies.map((strategy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={strategy.href}
                  className="block p-10 rounded-3xl border border-forest-200 hover:border-fern-light/40 transition-all group h-full"
                >
                  <strategy.icon className="w-8 h-8 text-fern-light mb-6" />
                  <h3 className="text-2xl font-serif font-medium text-white mb-4">{strategy.title}</h3>
                  <p className="text-forest-400 leading-relaxed text-lg mb-8">{strategy.description}</p>
                  <span className="inline-flex items-center gap-2 text-fern-light font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-forest-400 text-lg mb-6">Not a real estate investor? We still help.</p>
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 border border-forest-300 text-forest-500 px-8 py-4 rounded-full text-base font-medium hover:border-fern-light hover:text-fern-light transition-all"
            >
              Book a Call — Any Business
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <BookingSection />
      <PainPointToast painPoints={pains} />
    </>
  );
}
