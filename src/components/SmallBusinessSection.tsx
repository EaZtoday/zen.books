import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SmallBusinessSection() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-warm-200">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium tracking-widest uppercase text-warm-400 mb-4"
        >
          Not just investors
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-warm-900 mb-4"
        >
          We help small businesses too.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-warm-600 mb-8 max-w-xl mx-auto"
        >
          Monthly bookkeeping, catch-up cleanups, and QuickBooks setup — for any small business, not just real estate.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/small-business-bookkeeping"
            className="inline-flex items-center justify-center gap-2 border border-warm-300 text-warm-700 px-8 py-4 rounded-full text-base font-medium hover:border-fern hover:text-fern transition-all"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
