import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'The No-Judgment Review',
    description: "A quick call to look at your current setup — entities, properties, accounts. No shame, just a clear plan.",
  },
  {
    number: '02',
    title: 'The Deep Clean',
    description: 'We untangle commingled funds, categorize by property, and build a QuickBooks system that actually works for investors.',
  },
  {
    number: '03',
    title: 'Monthly Clarity',
    description: 'Per-property P&L, clean reconciliations, lender-ready reports. You stop worrying and start trusting your numbers.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32 md:py-40 bg-cream-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-warm-400 mb-4"
          >
            Getting Started
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
            >
              <span className="text-7xl md:text-8xl font-serif font-medium text-cream-300 leading-none shrink-0">
                {step.number}
              </span>
              <div className="pt-2 md:pt-4">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-warm-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-warm-600 leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-accent-dark transition-all"
          >
            Book Your Portfolio Review
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
