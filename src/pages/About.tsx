import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

export default function About() {
  return (
    <>
      <SeoHead
        title="About Zen Books — Real Estate Investor Bookkeeping Team | Scranton, PA"
        description="Meet the Zen Books team. We specialize in QuickBooks bookkeeping for real estate investors in Scranton, Wilkes-Barre, the Poconos, and the Lehigh Valley."
        path="/about"
      />
      <BreadcrumbSchema items={[{ name: 'About', path: '/about' }]} />
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-cream relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/80 via-cream to-cream" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-widest uppercase text-warm-400 mb-8"
          >
            About Zen Books
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium tracking-tight text-warm-900 leading-[1.05] mb-8"
          >
            We take the stress<br />out of your numbers.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-warm-600 leading-relaxed max-w-2xl mx-auto"
          >
            A husband-and-wife bookkeeping team based in Scranton, Pennsylvania, specializing in real estate investors across the U.S.
          </motion.p>
        </div>
      </section>

      {/* The Team */}
      <section className="py-32 md:py-40 bg-cream-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-warm-900 text-center mb-20"
          >
            The team behind your books.
          </motion.h2>
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-cream rounded-3xl p-10 md:p-12 border border-cream-300"
            >
              <p className="text-sm font-medium tracking-widest uppercase text-fern mb-4">The QuickBooks Expert</p>
              <h3 className="text-2xl font-serif font-medium text-warm-900 mb-4">Technical precision.</h3>
              <p className="text-warm-600 leading-relaxed text-lg">
                The wizard who turns chaotic investor data into per-property P&Ls and lender-ready reports. She handles the cleanup, categorization, and complex multi-entity reconciliations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-cream rounded-3xl p-10 md:p-12 border border-cream-300"
            >
              <p className="text-sm font-medium tracking-widest uppercase text-fern mb-4">The Client Partner</p>
              <h3 className="text-2xl font-serif font-medium text-warm-900 mb-4">Human understanding.</h3>
              <p className="text-warm-600 leading-relaxed text-lg">
                The operations lead who ensures every question is answered in plain English, every deadline is met, and you always feel supported — not just processed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-32 md:py-40 bg-forest">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-white mb-10"
          >
            Why we started.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-forest-400 leading-relaxed"
          >
            We saw too many real estate investors treating their bookkeeping like a shameful secret — hiding from their numbers, dreading tax time, losing deals because they couldn't produce clean financials. We built Zen Books to change that. A safe place where you hand over a messy file without fear of judgment and get back clean, investor-grade books.
          </motion.p>
        </div>
      </section>

      {/* Our Promises */}
      <section className="py-32 md:py-40 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-warm-900 text-center mb-20"
          >
            Our promise to you.
          </motion.h2>
          <div className="grid gap-16 md:grid-cols-3 text-center">
            {[
              { title: 'Zero Judgment, Ever.', desc: "We don't care how messy your books are right now. We only care about getting them clean for your next deal." },
              { title: 'Plain English, No Jargon.', desc: 'We explain your reports simply so you actually understand what your portfolio is doing.' },
              { title: 'Reliable Consistency.', desc: "Accurate reports on time, every time. You're never scrambling before a refinance or tax deadline." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-serif font-medium text-warm-900 mb-4">{item.title}</h3>
                <p className="text-warm-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 bg-cream-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-warm-900 mb-8"
          >
            Your books are safe with us.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-warm-600 leading-relaxed mb-12"
          >
            Whether you're years behind or just closing your first deal, we're ready to help. Let's turn that stress into clarity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 bg-fern text-white px-8 py-4 rounded-full text-base font-medium hover:bg-fern-dark transition-all"
            >
              Book a Portfolio Review
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-sm text-warm-400 mt-4">Free 30-minute call. No commitment. No judgment.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
