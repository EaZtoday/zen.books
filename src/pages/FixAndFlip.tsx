import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';
import { PainPointToast } from '../components/PainPointToast';

const pains = [
  "I need to know my true profit on every flip — not a guess.",
  "Rehab costs are scattered across 3 credit cards and a line of credit.",
  "My CPA just sees a pile of transactions. I see 4 active projects.",
  "I'm flipping 3 houses right now and I genuinely don't know if I'm making money.",
];

const solutions = [
  { title: 'Per-Project Tracking', desc: 'Every dollar allocated to the right flip — acquisition, rehab, holding costs, and sale proceeds tracked separately.' },
  { title: 'True Profit Calculation', desc: 'Know your actual margin on every deal, not just the gross number. Holding costs, closing costs, and fees included.' },
  { title: 'Rehab Budget vs. Actual', desc: 'Compare your projected rehab spend to actual costs in real time. No more surprises at closing.' },
  { title: 'Draw & HML Tracking', desc: 'Hard money loans, draws, and interest payments tracked correctly so your books match reality.' },
];

const packages = [
  {
    name: 'Flip Cleanup',
    subtitle: 'Untangle past projects.',
    features: [
      'Categorize historical transactions by project',
      'Reconcile hard money and credit line accounts',
      'Separate personal from business transactions',
      'Calculate true profit per completed flip',
      'Organize contractor payments (1099-ready)',
    ],
  },
  {
    name: 'Monthly Flip Care',
    subtitle: 'Stay on top of active deals.',
    features: [
      'Monthly categorization by active project',
      'Reconcile all bank, credit card, and HML accounts',
      'Rehab cost tracking vs. budget',
      'Per-project P&L updated monthly',
      'Items flagged for your review via email',
    ],
    featured: true,
  },
  {
    name: 'Premium Flip Support',
    subtitle: 'For high-volume flippers.',
    features: [
      'Everything in Monthly Care',
      'Multi-entity tracking across flip LLCs',
      'KPI dashboard: avg profit per flip, holding period, ROI',
      'Quarterly strategy calls to review numbers',
      'Direct coordination with your CPA',
      '1099 prep for all contractors',
    ],
  },
];

const steps = [
  { num: '01', title: 'Deal Review', desc: 'We map out your active and completed flips, entities, and funding sources.' },
  { num: '02', title: 'The Deep Clean', desc: 'We allocate every transaction to the right project and reconcile your accounts.' },
  { num: '03', title: 'Project Setup', desc: 'QuickBooks configured so every new flip automatically tracks the right way.' },
  { num: '04', title: 'Monthly Clarity', desc: 'Per-project P&L showing exactly where every dollar went on every deal.' },
];

const faqs = [
  { q: 'I have multiple flips at once. Can you track them separately?', a: 'Yes. Every flip gets its own profit center in QuickBooks — acquisition, rehab, holding costs, and sale proceeds all tracked per project.' },
  { q: 'I use hard money lenders. Can you track that?', a: 'Absolutely. We track draws, interest payments, and payoffs so your books reflect the true cost of capital on each deal.' },
  { q: 'How do you handle contractor payments?', a: 'We categorize all contractor payments by project and prepare your 1099s at year-end.' },
  { q: 'Can you show me my actual ROI per flip?', a: "Yes. We calculate true profit including all holding costs, closing costs, and financing fees — not just purchase price minus sale price." },
  { q: 'I flip through multiple LLCs.', a: 'No problem. We handle multi-entity setups and keep intercompany transactions clean.' },
  { q: "I'm behind on my books from last year's flips.", a: "That's exactly what our Cleanup package is for. We'll reconstruct your project-level P&L from historical transactions." },
];

export default function FixAndFlip() {
  useEffect(() => { document.title = 'Bookkeeping for Fix & Flip Investors — Zen Books'; }, []);
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fern-50/50 via-cream to-cream" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-widest uppercase text-fern mb-8"
          >
            For Fix & Flip Investors
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-warm-900 leading-[1.05] mb-8"
          >
            Know your profit<br />on every flip.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-warm-600 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Per-project cost tracking, rehab budgets, and true profit calculations — so you flip with confidence, not guesswork.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-fern text-white px-8 py-4 rounded-full text-base font-medium hover:bg-fern-dark transition-all">
              Book Your Free Review <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-sm text-warm-400 mt-4">Free 30-minute call. No commitment required.</p>
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
            How we help flippers.
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

      {/* Social Proof */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-fern mb-6"
          >
            Why flippers trust Zen Books
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-medium text-warm-900 mb-16"
          >
            Your books are in good hands.
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { stat: 'Per-project', label: 'True profit on every flip including all costs' },
              { stat: 'Rehab tracking', label: 'Budget vs. actual in real time' },
              { stat: 'HML-ready', label: 'Draw schedules and payoffs tracked correctly' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-2xl font-serif font-medium text-fern mb-2">{item.stat}</p>
                <p className="text-warm-600 text-sm leading-relaxed">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-32 md:py-40 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-warm-900 text-center mb-20"
          >
            Packages for flippers.
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-3xl p-10 flex flex-col ${pkg.featured ? 'bg-forest text-white ring-2 ring-fern' : 'bg-cream-100 border border-cream-300'}`}
              >
                <h3 className={`text-2xl font-serif font-medium mb-2 ${pkg.featured ? 'text-white' : 'text-warm-900'}`}>{pkg.name}</h3>
                <p className={`text-sm mb-8 ${pkg.featured ? 'text-forest-400' : 'text-warm-600'}`}>{pkg.subtitle}</p>
                <ul className="space-y-4 flex-1">
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 shrink-0 ${pkg.featured ? 'text-fern-light' : 'text-fern'}`} />
                      <span className={`text-sm leading-relaxed ${pkg.featured ? 'text-forest-500' : 'text-warm-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#book" className={`mt-10 text-center py-3.5 rounded-full font-medium transition-all ${pkg.featured ? 'bg-white text-warm-900 hover:bg-cream-100' : 'border border-cream-300 text-warm-900 hover:border-warm-400'}`}>
                  Book a Free Review
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-40 bg-cream-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-warm-900 text-center mb-20"
          >
            How it works.
          </motion.h2>
          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
              >
                <span className="text-7xl font-serif font-medium text-cream-300 leading-none shrink-0">{step.num}</span>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-2xl font-serif font-medium text-warm-900 mb-3">{step.title}</h3>
                  <p className="text-lg text-warm-600 leading-relaxed">{step.desc}</p>
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
            Questions from flippers.
          </motion.h2>
          <div className="space-y-10">
            {faqs.map((faq, i) => (
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

      <BookingSection />
      <PainPointToast painPoints={pains} />
    </>
  );
}
