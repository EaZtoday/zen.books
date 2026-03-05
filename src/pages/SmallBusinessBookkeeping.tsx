import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, MessageCircle, Clock } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';
import { PainPointToast } from '../components/PainPointToast';

const pains = [
  "I'm months behind and tax season is coming.",
  "My books are a mess and I don't know where to start.",
  "I need someone who actually understands QuickBooks.",
];

const solutions = [
  { title: 'Monthly Bookkeeping', desc: 'We categorize every transaction, reconcile your accounts, and keep your QuickBooks clean — every single month.' },
  { title: 'Catch-Up & Cleanup', desc: 'Months or years behind? We untangle the mess, reconcile everything, and get you current without judgment.' },
  { title: 'QuickBooks Setup', desc: 'Starting fresh or switching from spreadsheets? We build your QuickBooks file the right way from day one.' },
  { title: 'Tax-Ready Books', desc: 'Your CPA gets clean, organized financials at year-end. No more scrambling, no more surprises.' },
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

const whyUs = [
  {
    icon: Clock,
    title: 'Done For You, Every Month',
    description: 'You run your business. We handle the books. No more late-night spreadsheet sessions.',
  },
  {
    icon: ShieldCheck,
    title: 'QuickBooks Online Experts',
    description: 'Your books live in QBO — configured correctly from day one. No spreadsheets. No guessing.',
  },
  {
    icon: MessageCircle,
    title: 'Zero Judgment. Plain English.',
    description: "We don't care how messy your books are right now. We explain everything simply so you actually understand your numbers.",
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

      {/* How We Help */}
      <section className="py-32 md:py-40 bg-forest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-white text-center mb-20"
          >
            How we help small businesses.
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.1] hover:border-white/20 hover:shadow-[0_8px_40px_rgba(255,255,255,0.06)] hover:backdrop-blur-xl transition-all duration-500 cursor-default"
              >
                <h3 className="text-xl font-serif font-medium text-fern-light mb-4">{s.title}</h3>
                <p className="text-forest-400 leading-relaxed text-lg">{s.desc}</p>
              </motion.div>
            ))}
          </div>
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

      {/* Why Zen Books */}
      <section className="py-32 md:py-40 bg-forest">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-sm font-medium tracking-widest uppercase text-accent mb-4"
            >
              Why Zen Books
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white"
            >
              Your books, handled.
            </motion.h2>
          </div>

          <div className="grid gap-16 md:grid-cols-3 text-center">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-white/[0.06] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-fern-light" />
                </div>
                <h3 className="text-xl font-serif font-medium text-white mb-4">{item.title}</h3>
                <p className="text-forest-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 bg-fern text-white px-8 py-4 rounded-full text-base font-medium hover:bg-fern-dark transition-all"
            >
              Book a Free Call
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
