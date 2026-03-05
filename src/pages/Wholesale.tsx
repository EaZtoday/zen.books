import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';
import { PainPointToast } from '../components/PainPointToast';

const pains = [
  "Assignment fees, double closes, earnest money — my bookkeeper is lost.",
  "I spend more on marketing than anything else and I can't tell what's working.",
  "I did 40 deals last year and have no idea what my actual take-home was.",
  "My books are just a mess of transfers between my acquisition LLC and my marketing LLC.",
];

const solutions = [
  { title: 'Deal-by-Deal Tracking', desc: 'Every assignment fee, double close, and earnest money deposit tracked per deal so you know your true profit on each one.' },
  { title: 'Marketing ROI', desc: 'Know exactly what you spend on direct mail, PPC, cold calling, and driving for dollars — and which channel brings the best deals.' },
  { title: 'Multi-Entity Clarity', desc: 'Acquisition LLC, marketing LLC, holding company — we keep the transfers clean and each entity\'s books separate.' },
  { title: 'Disposition Tracking', desc: 'Track your buyer list deals, assignments, and double closes with the right revenue recognition for each type.' },
];

const packages = [
  {
    name: 'Deal Cleanup',
    subtitle: 'Untangle past deals.',
    features: [
      'Categorize historical transactions by deal',
      'Reconcile all bank and escrow accounts',
      'Separate marketing spend by channel',
      'Calculate true profit per completed deal',
      'Clean up intercompany transfers',
    ],
  },
  {
    name: 'Monthly Deal Care',
    subtitle: 'Stay on top of your pipeline.',
    features: [
      'Monthly categorization by active deal',
      'Reconcile all bank and credit card accounts',
      'Marketing spend tracking by channel',
      'Per-deal P&L updated monthly',
      'Items flagged for your review via email',
    ],
    featured: true,
  },
  {
    name: 'Premium Wholesale Support',
    subtitle: 'For high-volume operations.',
    features: [
      'Everything in Monthly Care',
      'Multi-entity tracking across all LLCs',
      'KPI dashboard: cost per deal, avg assignment fee, marketing ROI',
      'Quarterly strategy calls to review numbers',
      'Direct coordination with your CPA',
      '1099 prep for all contractors',
    ],
  },
];

const steps = [
  { num: '01', title: 'Operation Review', desc: 'We map out your entities, deal flow, marketing channels, and funding sources.' },
  { num: '02', title: 'The Deep Clean', desc: 'We allocate every transaction to the right deal and separate marketing spend by channel.' },
  { num: '03', title: 'System Setup', desc: 'QuickBooks configured so every new deal and marketing expense tracks automatically.' },
  { num: '04', title: 'Monthly Clarity', desc: 'Per-deal P&L and marketing ROI reports so you know exactly where the money goes.' },
];

const faqs = [
  { q: 'I do both assignments and double closes. Can you track them differently?', a: 'Yes. Each deal type gets the right accounting treatment — assignment fees as income, double closes with proper acquisition and sale records.' },
  { q: 'I spend a lot on marketing. Can you show me ROI by channel?', a: 'Absolutely. We break down your spend by direct mail, PPC, cold calling, driving for dollars, or any channel you use — and tie it to deals closed.' },
  { q: 'I have separate LLCs for acquisitions and marketing.', a: 'We handle multi-entity setups and keep intercompany transactions clean between all your entities.' },
  { q: 'I do 30+ deals a year. Is that too many to track?', a: 'Not at all. Our system scales with your volume. The more deals you do, the more valuable per-deal tracking becomes.' },
  { q: 'Do you handle earnest money deposits?', a: 'Yes. We track EMDs in and out, including forfeited deposits and refunds, all tied to the right deal.' },
  { q: "I'm behind on my books from last year.", a: "That's exactly what our Cleanup package is for. We'll reconstruct your deal-level P&L from historical transactions." },
];

export default function Wholesale() {
  useEffect(() => { document.title = 'Bookkeeping for Wholesale Real Estate — Zen Books'; }, []);
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
            For Wholesalers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-warm-900 leading-[1.05] mb-8"
          >
            Know your profit<br />on every deal.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-warm-600 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Deal-by-deal tracking, marketing ROI, and multi-entity clarity — so you scale your operation with real numbers.
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
            How we help wholesalers.
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

      {/* Packages */}
      <section className="py-32 md:py-40 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-warm-900 text-center mb-20"
          >
            Packages for wholesalers.
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

      {/* FAQ */}
      <section className="py-32 md:py-40 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-warm-900 text-center mb-20"
          >
            Questions from wholesalers.
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
