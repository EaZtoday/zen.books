import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      <div className="absolute inset-0 bg-gradient-to-b from-fern-50/40 via-cream to-cream" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-widest uppercase text-fern mb-8"
        >
          Bookkeeping for Real Estate Investors
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-warm-900 leading-[1.05] mb-8"
        >
          Know your numbers.<br />Grow your portfolio.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-warm-600 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          We keep your QuickBooks clean for every property, entity, and deal —
          so you always know your true cash flow and returns.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 bg-fern text-white px-8 py-4 rounded-full text-base font-medium hover:bg-fern-dark transition-all"
          >
            Book Your Free Portfolio Review
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-sm text-warm-400 mt-4">Free 30-minute call. No commitment. No judgment.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-warm-400 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
