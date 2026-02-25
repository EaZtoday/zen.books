import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

const pains = [
  "I'm a therapist, not an accountant. Looking at QuickBooks makes my brain shut down.",
  "I haven't reconciled my books in 8 months. I feel so much shame around money and my business.",
  "I'm doing my own bookkeeping in QuickBooks, but every time I look at my P&L, I have no idea if I'm making money or not.",
  "How on earth do you reconcile SimplePractice payouts in QBO? The processing fees are driving me insane.",
];

const solutions = [
  { title: 'Clean Income Tracking', desc: 'We match deposits to reports from SimplePractice, TherapyNotes, and other PM software so your revenue is accurate.' },
  { title: 'Expense Clarity', desc: 'Supervision fees, trainings, rent, software — all categorized so you see your true overhead and margins.' },
  { title: 'Tax Peace of Mind', desc: 'Books ready for estimated taxes and year-end. No surprises, no scrambling for reports.' },
  { title: 'Profit & Owner\'s Pay', desc: 'True business expenses separated from owner\'s pay so you see what you\'re really taking home.' },
];

const packages = [
  {
    name: 'Practice Cleanup',
    subtitle: 'When you\'ve fallen behind and need a fresh start.',
    features: [
      'Categorize all past income and expenses',
      'Separate personal from business transactions',
      'Reconcile business checking and credit cards',
      'Match deposits to practice management software',
      'Clean, accurate P&L for your accountant',
    ],
  },
  {
    name: 'Steady Practice Care',
    subtitle: 'A calm, organized practice month after month.',
    features: [
      'Monthly categorization of all transactions',
      'Reconciliation of bank and credit card accounts',
      'Deposits matched to SimplePractice/TherapyNotes',
      'Owner\'s pay separated from business expenses',
      'Quarterly P&L with plain-English summary',
    ],
    featured: true,
  },
  {
    name: 'Premium Practice Support',
    subtitle: 'For group practices or busy consultants.',
    features: [
      'Everything in Steady Care',
      'Monthly P&L and Balance Sheet',
      'Contractor (1099) and payroll tracking',
      'Revenue tracked per clinician (group practices)',
      'Monthly check-in calls to review numbers',
      'Direct CPA coordination at tax time',
    ],
  },
];

const steps = [
  { num: '01', title: 'Practice Review', desc: 'We look at how you bill clients, collect payments, and pay expenses to understand your flow.' },
  { num: '02', title: 'The Setup', desc: 'We connect bank feeds, clean up your chart of accounts, and organize your QuickBooks for clarity.' },
  { num: '03', title: 'Ongoing Care', desc: 'We handle the bookkeeping quietly in the background so your books stay accurate without you lifting a finger.' },
  { num: '04', title: 'Tax Time Zen', desc: 'You hand clean reports to your accountant and breathe easy, knowing everything is correct.' },
];

const faqs = [
  { q: 'I accidentally used my business card for groceries. Is that okay?', a: 'It happens. We\'ll flag it as an owner\'s draw so your business expenses stay accurate and your books stay clean.' },
  { q: 'I use SimplePractice/TherapyNotes. Do you work with that?', a: 'Yes. We match the deposits hitting your bank account to the reports from your practice management software.' },
  { q: 'I\'m not in Scranton. Can we still work together?', a: 'Yes. We are a remote-first firm and work with professionals across the country securely and efficiently.' },
  { q: 'My practice is too small to hire a bookkeeper.', a: 'Most solo practitioners we work with earn $50K\u2013$150K. At that level, the hours you spend on bookkeeping cost more than our monthly fee. We free up your evenings.' },
  { q: 'I don\'t want to give someone access to my bank account.', a: 'We use read-only bank feeds through QuickBooks. We see transactions, not passwords. Your data never leaves QBO and we never touch your accounts directly.' },
];

export default function Therapists() {
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
            For Therapists & Consultants
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-warm-900 leading-[1.05] mb-8"
          >
            Stay in session,<br />not in spreadsheets.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-warm-600 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            We organize your income, expenses, and payouts in QuickBooks so you know exactly what you're taking home.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-fern text-white px-8 py-4 rounded-full text-base font-medium hover:bg-fern-dark transition-all">
              Book Your Practice Review <ArrowRight className="w-4 h-4" />
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
            The pain of practice bookkeeping.
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
            How Zen Books helps your practice.
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
            Why practitioners trust Zen Books
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-medium text-warm-900 mb-16"
          >
            One person. Your person. Not a rotating cast of strangers.
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { stat: 'Plain English', label: 'We translate your numbers — no jargon, no shame' },
              { stat: 'EHR fluent', label: 'SimplePractice, TherapyNotes, Alma — we know them' },
              { stat: 'Tax-ready', label: 'Quarterly estimates and year-end prep, handled' },
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
            Packages for practitioners.
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
                  Book a Practice Review
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
            Common questions from practitioners.
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
