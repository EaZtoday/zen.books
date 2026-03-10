import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SeoHead from '../components/SeoHead';

export default function NotFound() {
  return (
    <>
      <SeoHead
        title="Page Not Found — Zen Books"
        description="The page you're looking for doesn't exist. Head back to Zen Books for real estate investor bookkeeping."
        path="/404"
        noindex
      />
      <section className="min-h-screen flex items-center justify-center bg-cream">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-8xl font-serif font-medium text-cream-300 mb-6"
          >
            404
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-medium text-warm-900 mb-4"
          >
            Page not found.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-warm-600 mb-10"
          >
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-fern text-white px-8 py-4 rounded-full text-base font-medium hover:bg-fern-dark transition-all"
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
