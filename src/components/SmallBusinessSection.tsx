import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, RefreshCw, Settings, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: BookOpen,
    title: 'Monthly Bookkeeping',
    description: 'We categorize every transaction, reconcile your accounts, and keep your QuickBooks clean — every single month.',
  },
  {
    icon: RefreshCw,
    title: 'Catch-Up & Cleanup',
    description: 'Months or years behind? We untangle the mess, reconcile everything, and get you current without judgment.',
  },
  {
    icon: Settings,
    title: 'QuickBooks Setup',
    description: 'Starting fresh or switching from spreadsheets? We build your QuickBooks file the right way from day one.',
  },
  {
    icon: FileCheck,
    title: 'Tax-Ready Books',
    description: 'Your CPA gets clean, organized financials at year-end. No more scrambling, no more surprises.',
  },
];

export function SmallBusinessSection() {
  return (
    <section className="py-32 md:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-warm-400 mb-4"
          >
            Not Just Investors
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-warm-900 mb-6"
          >
            We help small businesses too.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-warm-600 max-w-2xl mx-auto"
          >
            QuickBooks bookkeeping for any small business — judgment-free, in plain English, done for you every month.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl border border-warm-200 bg-white/40 backdrop-blur-sm hover:bg-white/80 hover:border-warm-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:backdrop-blur-xl transition-all duration-500"
            >
              <service.icon className="w-8 h-8 text-fern mb-6" />
              <h3 className="text-xl font-serif font-medium text-warm-900 mb-4">{service.title}</h3>
              <p className="text-warm-600 leading-relaxed text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/small-business-bookkeeping"
            className="inline-flex items-center justify-center gap-2 bg-fern text-white px-8 py-4 rounded-full text-base font-medium hover:bg-fern-dark transition-all"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
