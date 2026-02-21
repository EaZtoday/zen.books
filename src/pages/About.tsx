import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-stone-900 mb-6"
          >
            We’re Here to Take the Stress Out of Your Numbers.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed"
          >
            Zen Books is a husband-and-wife bookkeeping team based in Scranton, Pennsylvania, dedicated to bringing calm, judgment-free financial clarity to small business owners across the U.S. We specialize in helping <strong>Real Estate Investors</strong> and <strong>Therapists & Consultants</strong> stop worrying about their books and start trusting their numbers.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">The Team Behind Your Books</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              We believe that great bookkeeping requires both technical precision and human understanding.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">She</div>
                <div>
                  <h3 className="font-bold text-stone-900">The QuickBooks Expert</h3>
                  <p className="text-stone-600 text-sm mt-1">The technical wizard who loves turning chaotic data into perfect rows and columns, handling the cleanup, categorization, and complex reconciliations.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">He</div>
                <div>
                  <h3 className="font-bold text-stone-900">The Client Partner</h3>
                  <p className="text-stone-600 text-sm mt-1">The operations lead who ensures every question is answered in plain English, every deadline is met, and you always feel supported, not just "processed."</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
            <h3 className="font-bold text-stone-900 mb-4">Why We Started</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              We saw too many talented business owners treating their bookkeeping like a shameful secret—hiding from their numbers, dreading tax time, and feeling embarrassed to ask for help.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We built Zen Books to change that. We wanted to create a safe place where you can hand over a messy file without fear of judgment and get back a clear, organized system.
            </p>
          </div>
        </div>

        <div className="bg-emerald-900 text-emerald-50 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Promise to You</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-bold text-white mb-2">Zero Judgment, Ever.</h3>
              <p className="text-emerald-100 text-sm">We don’t care how messy your books are right now. We only care about getting them clean for your future.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Plain English, No Jargon.</h3>
              <p className="text-emerald-100 text-sm">We explain your reports simply so you actually understand what your business is doing.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Reliable Consistency.</h3>
              <p className="text-emerald-100 text-sm">You’ll get accurate reports on time, every time, so you’re never scrambling before a deadline.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Your Books Are Safe With Us.</h2>
          <p className="text-stone-600 mb-8">Whether you’re years behind or just starting out, we’re ready to help. Let’s turn that stress into clarity.</p>
          <button className="bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Book a QuickBooks Clarity Call
          </button>
        </div>
      </section>
    </div>
  );
}
