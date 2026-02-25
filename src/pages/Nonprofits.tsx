import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

const pains = [
  "Looking for help with QuickBooks nightmare for tracking nonprofit functions, programs, subprograms, restricted funds...",
  "Our last volunteer treasurer just stopped returning emails. I have a shoebox of receipts and a board meeting in two weeks.",
  "I just want someone to translate the financials into plain English so I can explain them to my board without sounding like an idiot.",
  "I'm terrified we are going to fail our grant audit. The previous ED was paying for personal lunches out of the general fund.",
];

const solutions = [
  { title: 'Fund Tracking', desc: 'Restricted and unrestricted funds separated properly in QuickBooks so you never accidentally spend grant money on the wrong thing.' },
  { title: 'Board-Ready Reports', desc: 'Clean Statement of Activities and Statement of Financial Position formatted and delivered before every board meeting.' },
  { title: 'Grant Compliance', desc: 'Grant spending tracked against budgets so you always know your burn rate and can report to funders accurately.' },
  { title: 'Audit Preparation', desc: 'Organized, reconciled books with supporting schedules so your auditor gets clean files instead of a scavenger hunt.' },
];

const packages = [
  {
    name: 'Nonprofit Cleanup',
    subtitle: 'When your books need a fresh start.',
    features: [
      'Rebuild chart of accounts for nonprofit reporting',
      'Set up fund tracking (restricted vs. unrestricted)',
      'Categorize all historical transactions by program',
      'Reconcile all bank and credit card accounts',
      'Generate Statement of Activities and Financial Position',
    ],
  },
  {
    name: 'Monthly Nonprofit Care',
    subtitle: 'Board-ready and grant-compliant every month.',
    features: [
      'Monthly categorization with program/fund tags',
      'Reconciliation of all accounts',
      'Grant budget vs. actuals tracking',
      'Monthly financial statements by program',
      'Functional expense allocation',
    ],
    featured: true,
  },
  {
    name: 'Premium Nonprofit Support',
    subtitle: 'For orgs with multiple grants or upcoming audits.',
    features: [
      'Everything in Monthly Care',
      'Formatted board financial packets',
      'Grant burn-rate analysis',
      'Annual audit preparation and support',
      'Monthly calls with ED or Finance Director',
      'Direct coordination with auditor and CPA',
    ],
  },
];

const steps = [
  { num: '01', title: 'Organization Review', desc: 'We map out your programs, funding sources, and reporting needs to create a clear plan.' },
  { num: '02', title: 'The Cleanup', desc: 'We untangle funds, allocate expenses to the right programs, and reconcile every account.' },
  { num: '03', title: 'Ongoing Care', desc: 'Monthly bookkeeping with fund tracking, so your books are always current and compliant.' },
  { num: '04', title: 'Board & Audit Ready', desc: 'Clean reports delivered on time. Your board is confident and your auditor is happy.' },
];

const faqs = [
  { q: 'Do you understand nonprofit accounting?', a: 'Yes. We track restricted vs. unrestricted funds, functional expenses, and generate Statement of Activities and Statement of Financial Position.' },
  { q: 'Can you prepare reports for our board?', a: 'Absolutely. We deliver formatted financial packets with P&L by program, balance sheet, and budget vs. actuals.' },
  { q: 'We have an audit coming up. Can you help?', a: 'Yes. We prepare organized files with supporting schedules so your auditor has everything they need.' },
  { q: 'Can you track multiple grants?', a: 'Yes. Each grant gets its own tracking so you always know your burn rate and remaining budget.' },
  { q: 'We have a volunteer treasurer. Do we still need this?', a: 'Many of our clients started that way. We work alongside your treasurer or take over entirely — either way, your board gets accurate, on-time reports.' },
  { q: 'We\'re a small charity. Bookkeeping feels like overhead.', a: 'Clean books mean faster audits, fewer findings, and more grant approvals. Most clients save more than our fee in avoided problems. Think of it as protecting your funding.' },
];

export default function Nonprofits() {
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
            For Nonprofits
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-warm-900 leading-[1.05] mb-8"
          >
            Focus on your mission.<br />We'll handle the math.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-warm-600 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Clean, transparent reporting for your board, your funders, and your auditor — so you can focus on the work that matters.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-fern text-white px-8 py-4 rounded-full text-base font-medium hover:bg-fern-dark transition-all">
              Book an Organization Review <ArrowRight className="w-4 h-4" />
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
            The pain of nonprofit bookkeeping.
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
            How Zen Books helps nonprofits.
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
            Why nonprofits trust Zen Books
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-medium text-warm-900 mb-16"
          >
            Clean books mean more grants, not more overhead.
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { stat: 'Fund tracking', label: 'Restricted vs. unrestricted — always separated correctly' },
              { stat: 'Board-ready', label: 'Financial packets your board will actually understand' },
              { stat: 'Audit-proof', label: 'Organized schedules your auditor needs on day one' },
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
            Packages for nonprofits.
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
                  Book an Organization Review
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
            Common questions from nonprofit leaders.
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
