import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, MessageCircle, BarChart3 } from 'lucide-react';

const reasons = [
  {
    icon: BarChart3,
    title: 'We Specialize in Bookkeeping for Real Estate Investors.',
    description: 'Not a generalist bookkeeper who also "does" investors. We live and breathe REI: CapEx vs. repairs, multi-entity structures, 1031 prep, lender-ready financials.',
  },
  {
    icon: ShieldCheck,
    title: 'QuickBooks Online Experts.',
    description: 'Your books live in QBO — configured correctly for real estate from day one. No spreadsheets. No guessing.',
  },
  {
    icon: MessageCircle,
    title: 'Zero Judgment. Plain English.',
    description: "We don't care how messy your books are right now. We explain everything simply so you actually understand your numbers.",
  },
];

export function WhySection() {
  return (
    <section className="py-32 md:py-40 bg-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-warm-400 mb-4"
          >
            Why Zen Books
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-warm-900"
          >
            Built different.
          </motion.h2>
        </div>

        <div className="grid gap-16 md:grid-cols-3 text-center">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 bg-fern-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <reason.icon className="w-7 h-7 text-fern" />
              </div>
              <h3 className="text-xl font-serif font-medium text-warm-900 mb-4">{reason.title}</h3>
              <p className="text-warm-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
