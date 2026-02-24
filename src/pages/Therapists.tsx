import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

const pains = [
  "I dread the end of the month because I have to log all these sessions and copays.",
  "I don't know what I can actually write off, so I probably miss deductions.",
  "I'm embarrassed that my business finances are mixed up with my personal spending.",
  "I want to hire an admin or raise my rates, but I don't know if the numbers work.",
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
];

export default function Therapists() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-white" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-widest uppercase text-purple-600 mb-8"
          >
            For Therapists & Consultants
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-stone-900 leading-[1.05] mb-8"
          >
            Stay in session,<br />not in spreadsheets.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-500 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            We organize your income, expenses, and payouts in QuickBooks so you know exactly what you're taking home.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#book" className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-stone-800 transition-all">
              Book Your Practice Review <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-32 md:py-40 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-900 text-center mb-20"
          >
            The pain of practice bookkeeping.
          </motion.h2>
          <div className="space-y-8">
            {pains.map((pain, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-xl md:text-2xl text-stone-400 italic font-serif text-center py-6 border-b border-stone-200 last:border-0"
              >
                "{pain}"
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-32 md:py-40 bg-stone-900">
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
                className="p-10 rounded-3xl border border-stone-800"
              >
                <h3 className="text-xl font-serif font-medium text-purple-400 mb-4">{s.title}</h3>
                <p className="text-stone-400 leading-relaxed text-lg">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-900 text-center mb-20"
          >
            Packages for practitioners.
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-3xl p-10 flex flex-col ${pkg.featured ? 'bg-stone-900 text-white ring-2 ring-stone-900' : 'bg-stone-50 border border-stone-200'}`}
              >
                <h3 className={`text-2xl font-serif font-medium mb-2 ${pkg.featured ? 'text-white' : 'text-stone-900'}`}>{pkg.name}</h3>
                <p className={`text-sm mb-8 ${pkg.featured ? 'text-stone-400' : 'text-stone-500'}`}>{pkg.subtitle}</p>
                <ul className="space-y-4 flex-1">
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 shrink-0 ${pkg.featured ? 'text-purple-400' : 'text-purple-600'}`} />
                      <span className={`text-sm leading-relaxed ${pkg.featured ? 'text-stone-300' : 'text-stone-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#book" className={`mt-10 text-center py-3.5 rounded-full font-medium transition-all ${pkg.featured ? 'bg-white text-stone-900 hover:bg-stone-100' : 'border border-stone-300 text-stone-700 hover:border-stone-400'}`}>
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-40 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-900 text-center mb-20"
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
                <span className="text-7xl font-serif font-medium text-stone-200 leading-none shrink-0">{step.num}</span>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-2xl font-serif font-medium text-stone-900 mb-3">{step.title}</h3>
                  <p className="text-lg text-stone-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-900 text-center mb-20"
          >
            Questions.
          </motion.h2>
          <div className="space-y-10">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="pb-10 border-b border-stone-100 last:border-0"
              >
                <h3 className="text-lg font-medium text-stone-900 mb-3">{faq.q}</h3>
                <p className="text-stone-500 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
