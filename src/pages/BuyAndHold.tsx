import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';
import { PainPointToast } from '../components/PainPointToast';
import SeoHead from '../components/SeoHead';
import ServiceSchema from '../components/ServiceSchema';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const pains = [
  "I just want to know how much each door is actually making me.",
  "My bookkeeper doesn't understand that a new roof isn't a 'repair.'",
  "I have 3 LLCs and 4 bank accounts and it's all a mess.",
  "I can't get a lender to look at my financials because they're a disaster.",
];

const solutions = [
  { title: 'Property-Level P&L', desc: 'QuickBooks configured to track income and expenses by property, so you see exactly how each door performs.' },
  { title: 'Entity Management', desc: 'One LLC or five — we keep intercompany transfers and equity accounts straight so nothing falls through the cracks.' },
  { title: 'CapEx vs. Repairs', desc: 'Major renovations categorized correctly versus simple repairs. No more guessing at tax time.' },
  { title: 'Lender-Ready Reports', desc: 'Your books stay current so you can hand a P&L to any lender instantly and look professional.' },
];

const packages = [
  {
    name: 'Portfolio Cleanup',
    subtitle: 'When you need a fresh start.',
    features: [
      'Categorize historical transactions by property',
      'Reconcile mortgages and escrow accounts',
      'Fix intercompany transfers between entities',
      'Separate personal from business transactions',
      'CapEx vs. Repairs correctly classified',
    ],
  },
  {
    name: 'Monthly Portfolio Care',
    subtitle: 'Ongoing peace of mind.',
    features: [
      'Monthly categorization with property tags',
      'Reconcile all bank and credit card accounts',
      'Mortgage payment tracking (principal / interest / escrow)',
      'Monthly P&L by property and portfolio-wide',
      'Items flagged for your review via email',
    ],
    featured: true,
  },
  {
    name: 'Premium Portfolio Support',
    subtitle: 'Deeper insight for growing portfolios.',
    features: [
      'Everything in Monthly Care',
      'Balance Sheet per entity',
      'KPI tracking: NOI per property, expense ratios',
      'Quarterly strategy calls to review numbers',
      'Direct coordination with your CPA',
      '1099 prep for contractors',
    ],
  },
];

const steps = [
  { num: '01', title: 'Portfolio Review', desc: 'We map out your entities, properties, and accounts to create a clear plan.' },
  { num: '02', title: 'The Deep Clean', desc: 'We untangle commingled funds and allocate income and expenses to the right properties.' },
  { num: '03', title: 'Automated Flow', desc: 'Bank feeds and rules set up so your QuickBooks stays clean with minimal manual work.' },
  { num: '04', title: 'Monthly Clarity', desc: 'Clear reports showing exactly how your portfolio performed this month.' },
];

const faqs = [
  { q: 'I have multiple LLCs. Can you handle that?', a: 'Yes. We specialize in multi-entity setups and keep intercompany transactions clean and separate.' },
  { q: 'Do you work with my CPA?', a: 'Absolutely. We prepare the clean, year-end books they need to file your taxes efficiently.' },
  { q: "I'm currently using Excel. Can we move to QuickBooks?", a: "Yes. We'll set up your QuickBooks Online file from scratch and import your data correctly." },
  { q: 'How do we work together remotely?', a: 'We use secure cloud tools to access your QuickBooks. We serve investors across the U.S.' },
  { q: 'My portfolio is too small to justify the cost.', a: 'We work with investors starting at 3 units. Clean books pay for themselves the first time you refinance or sell.' },
  { q: "A bookkeeper won't understand real estate.", a: 'We specialize in investor bookkeeping: CapEx vs. repairs, 1031 exchanges, entity structure. Your CPA handles depreciation schedules — we make sure the underlying data is correct.' },
];

export default function BuyAndHold() {
  return (
    <>
      <SeoHead
        title="Bookkeeping for Buy & Hold Investors — Zen Books"
        description="Per-property P&L, multi-entity tracking, and lender-ready financials for buy and hold real estate investors. QuickBooks bookkeeping by Zen Books, Scranton PA."
        path="/buy-and-hold"
      />
      <ServiceSchema
        serviceName="Buy & Hold Investor Bookkeeping"
        serviceDescription="QuickBooks bookkeeping for buy and hold real estate investors. Per-property P&L, multi-entity tracking, CapEx classification, and lender-ready financial reports."
        path="/buy-and-hold"
        faqs={faqs}
      />
      <BreadcrumbSchema items={[{ name: 'Buy & Hold', path: '/buy-and-hold' }]} />
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fern-50/50 via-cream to-cream" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-widest uppercase text-fern mb-8"
          >
            For Buy & Hold Investors
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-warm-900 leading-[1.05] mb-8"
          >
            Clear books for<br />every property.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-warm-600 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Per-property P&L, multi-entity tracking, and lender-ready financials — so you always know your true cash flow.
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

      {/* How We Help */}
      <section className="py-32 md:py-40 bg-forest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-white text-center mb-20"
          >
            How we help landlords.
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
            Why landlords trust Zen Books
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-medium text-warm-900 mb-16"
          >
            We've seen worse. We don't judge.
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { stat: 'Property-level', label: 'P&L for every door in your portfolio' },
              { stat: 'Multi-entity', label: 'LLC structures kept clean and separate' },
              { stat: 'Lender-ready', label: 'Financials your bank will actually accept' },
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
            Packages for landlords.
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
                  Book a Portfolio Review
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
            Questions from landlords.
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
