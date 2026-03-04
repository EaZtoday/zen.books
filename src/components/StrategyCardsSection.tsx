import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building2, Hammer, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';

const strategies = [
  {
    icon: Building2,
    title: 'Buy & Hold',
    description: 'Per-property P&L, multi-entity tracking, lender-ready reports for landlords and rental portfolio owners.',
    href: '/buy-and-hold',
  },
  {
    icon: Hammer,
    title: 'Fix & Flip',
    description: 'Per-project cost tracking, rehab budgets, and true profit calculations for every flip.',
    href: '/fix-and-flip',
  },
  {
    icon: Repeat,
    title: 'Wholesale',
    description: 'Assignment fees, marketing ROI, and deal-by-deal profitability for high-volume wholesalers.',
    href: '/wholesale',
  },
];

export function StrategyCardsSection() {
  return (
    <section className="py-32 md:py-40 bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-accent mb-4"
          >
            Your Strategy. Our Expertise.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white"
          >
            Built for how you invest.
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {strategies.map((strategy, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={strategy.href}
                className="block p-10 rounded-3xl border border-forest-200 hover:border-fern-light/40 transition-all group h-full"
              >
                <strategy.icon className="w-8 h-8 text-fern-light mb-6" />
                <h3 className="text-2xl font-serif font-medium text-white mb-4">{strategy.title}</h3>
                <p className="text-forest-400 leading-relaxed text-lg mb-8">{strategy.description}</p>
                <span className="inline-flex items-center gap-2 text-fern-light font-medium group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
