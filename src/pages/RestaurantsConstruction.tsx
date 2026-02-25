import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

const pains = [
  "I had to actually disconnect my POS software from my accounting software because of all the data noise it generated.",
  "I've been in construction for 20 years and I still don't know if I'm actually making money or just collecting a paycheck.",
  "Accounting in the restaurant industry is a nightmare. Tips, waste, comps — nothing is straightforward.",
  "Half my guys are so old school they still mail paper invoices. QuickBooks only works if everyone else uses it. Which they don't.",
];

const solutions = [
  { title: 'High-Volume Processing', desc: 'Hundreds of daily transactions categorized accurately. POS deposits matched to bank deposits so nothing slips through.' },
  { title: 'Vendor & Sub Tracking', desc: 'Every vendor payment and subcontractor payment tracked. Accounts payable aging so you know what you owe and when.' },
  { title: 'Payroll Coordination', desc: 'Payroll entries verified every period. Your labor costs are accurate whether you run a crew or a kitchen.' },
  { title: 'Job Costing & Margins', desc: 'Food cost %, labor cost %, gross margin by job — the numbers that make or break your business, tracked automatically.' },
];

const packages = [
  {
    name: 'Operations Cleanup',
    subtitle: 'When you\'ve fallen behind on the volume.',
    features: [
      'Categorize all historical transactions',
      'Reconcile banks, credit cards, and lines of credit',
      'POS deposit reconciliation (Toast, Square, Clover)',
      'Job costing setup (construction) or COGS tracking (restaurants)',
      'Separate personal from business transactions',
    ],
  },
  {
    name: 'Monthly Operations Care',
    subtitle: 'Keeping up with the daily flood.',
    features: [
      'Monthly categorization of high-volume transactions',
      'Reconciliation of all accounts',
      'Food/bev cost % or job cost tracking',
      'POS and payment processor reconciliation',
      'Sales tax tracking and reconciliation',
      'Monthly P&L by location or by job',
    ],
    featured: true,
  },
  {
    name: 'Premium Operations Support',
    subtitle: 'For multi-location or high-growth operations.',
    features: [
      'Everything in Monthly Care',
      'Weekly transaction processing',
      'Payroll integration and verification',
      '1099 prep for all subcontractors',
      'KPI tracking: food cost %, labor %, margin by job',
      'Monthly strategy calls and CPA coordination',
    ],
  },
];

const steps = [
  { num: '01', title: 'Operations Review', desc: 'We map out your transaction flow, vendors, and reporting needs to create a clear plan.' },
  { num: '02', title: 'The Cleanup', desc: 'We power through the backlog no matter how many transactions, and set up proper cost tracking.' },
  { num: '03', title: 'Automated Flow', desc: 'Bank feeds, rules, and POS integrations set up so your QuickBooks stays clean despite the volume.' },
  { num: '04', title: 'Monthly Clarity', desc: 'Clear reports showing your margins, your costs, and whether the numbers are working.' },
];

const faqs = [
  { q: 'Can you handle hundreds of transactions per month?', a: 'Yes. We specialize in high-volume bookkeeping and have systems to process large transaction counts efficiently.' },
  { q: 'Do you work with POS systems like Toast or Square?', a: 'Yes. We reconcile POS deposits to your bank account, accounting for fees, tips, and timing differences.' },
  { q: 'Can you track costs per job for construction?', a: 'Yes. We set up job costing in QuickBooks using Projects or Classes so you know profitability per job.' },
  { q: 'What about 1099s for my subcontractors?', a: 'We track all sub payments throughout the year so 1099 prep is handled at year-end. No last-minute scrambling.' },
  { q: 'No one understands my industry.', a: 'We reconcile POS systems like Toast and Square daily. We set up job costing in QuickBooks. We track food cost percentages and subcontractor payments. This is what we do.' },
  { q: 'I don\'t have time to gather the paperwork you need.', a: 'We pull transactions directly from your bank feeds and POS systems. You don\'t need to gather anything. Just keep running your business.' },
];

export default function RestaurantsConstruction() {
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
            For Restaurants & Construction
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-warm-900 leading-[1.05] mb-8"
          >
            Stay on the job.<br />We'll track every dollar.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-warm-600 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            High-volume transactions, vendors, payroll. We handle the numbers so you can stay on the job site or in the kitchen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-fern text-white px-8 py-4 rounded-full text-base font-medium hover:bg-fern-dark transition-all">
              Book an Operations Review <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-sm text-warm-400 mt-4">Free 30-minute call. No commitment. No judgment.</p>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-32 md:py-40 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-warm-900 text-center mb-20"
          >
            The pain of operations bookkeeping.
          </motion.h2>
          <div className="space-y-8">
            {pains.map((pain, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-xl md:text-2xl text-warm-400 italic font-serif text-center py-6 border-b border-cream-300 last:border-0"
              >
                "{pain}"
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-32 md:py-40 bg-forest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-white text-center mb-20"
          >
            How Zen Books handles high-volume ops.
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border border-forest-200"
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
            Why operators trust Zen Books
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-medium text-warm-900 mb-16"
          >
            We handle the mess so you can stay on the floor.
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { stat: 'POS-reconciled', label: 'Toast, Square, Clover — matched to your bank daily' },
              { stat: 'Job-costed', label: 'Know which projects actually made money' },
              { stat: 'High-volume', label: 'Hundreds of transactions a month, processed accurately' },
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
            Packages for operations.
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
                <a href="#book" className={`mt-10 text-center py-3.5 rounded-full font-medium transition-all ${pkg.featured ? 'bg-white text-warm-900 hover:bg-cream-100' : 'border border-cream-300 text-warm-900 hover:border-cream-400'}`}>
                  Book an Operations Review
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
            Common questions from operators.
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
    </>
  );
}
